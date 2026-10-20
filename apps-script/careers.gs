/**
 * Omkar Constructions — Careers application form → email (with resume).
 *
 * Paste this whole file into a separate Google Apps Script project (Code.gs)
 * and deploy it as a Web app (Execute as: Me, Who has access: Anyone).
 * The website POSTs the application as JSON with the resume base64-encoded;
 * this script checks every field and emails the application to TO_EMAIL
 * with the resume attached.
 */

const TO_EMAIL = 'omkarconstruction155@gmail.com';

const REQUIRED_FIELDS = {
  name: 'Full Name',
  phone: 'Phone Number',
  email: 'Email Address',
  location: 'Current Location',
  position: "Position You're Applying For",
  experience: 'Total Experience',
  notice_period: 'Notice Period',
  about: 'Tell us about yourself',
};

const RESUME_TYPES = {
  pdf: 'application/pdf',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
};
const RESUME_MAX_BYTES = 5 * 1024 * 1024;

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Honeypot: bots fill the hidden field, real visitors never do.
    if (data._honey) return json({ success: true });

    const error = validate(data);
    if (error) return json({ success: false, message: error });

    const resume = data.resume;
    const ext = resume.name.split('.').pop().toLowerCase();
    const bytes = Utilities.base64Decode(resume.data);
    if (bytes.length > RESUME_MAX_BYTES) {
      return json({ success: false, message: 'Resume must be 5 MB or smaller.' });
    }
    const attachment = Utilities.newBlob(bytes, RESUME_TYPES[ext], resume.name);

    MailApp.sendEmail({
      to: TO_EMAIL,
      replyTo: data.email,
      name: 'Omkar Constructions Website',
      subject: 'Job Application – ' + data.position + ' – ' + data.name,
      htmlBody: emailTable('New job application', [
        ['Full Name', data.name],
        ['Phone Number', data.phone],
        ['Email Address', data.email],
        ['Current Location', data.location],
        ["Position You're Applying For", data.position],
        ['Total Experience', data.experience],
        ['Notice Period', data.notice_period],
        ['Tell us about yourself', data.about],
        ['Resume', resume.name + ' (attached)'],
      ]),
      attachments: [attachment],
    });

    return json({ success: true });
  } catch (err) {
    return json({ success: false, message: String(err) });
  }
}

/** Lets you open the /exec URL in a browser to check the deployment is live. */
function doGet() {
  return json({ ok: true, form: 'careers' });
}

function validate(data) {
  for (const key in REQUIRED_FIELDS) {
    if (!String(data[key] || '').trim()) return REQUIRED_FIELDS[key] + ' is required.';
  }
  if (!/^\d{10}$/.test(data.phone)) return 'Phone Number must be 10 digits.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return 'Email Address is not valid.';

  const resume = data.resume;
  if (!resume || !resume.name || !resume.data) return 'Resume is required.';
  const ext = String(resume.name).split('.').pop().toLowerCase();
  if (!RESUME_TYPES[ext]) return 'Resume must be a PDF, DOC or DOCX file.';
  return null;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\n/g, '<br>');
}

function emailTable(title, rows) {
  const body = rows
    .map(function (row) {
      return (
        '<tr><td style="padding:8px 12px;border:1px solid #ddd;background:#fafafa;font-weight:bold;">' +
        escapeHtml(row[0]) +
        '</td><td style="padding:8px 12px;border:1px solid #ddd;">' +
        escapeHtml(row[1]) +
        '</td></tr>'
      );
    })
    .join('');
  return (
    '<h2 style="font-family:Arial,sans-serif;color:#ff5b0a;">' + escapeHtml(title) + '</h2>' +
    '<table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse;">' +
    body +
    '</table>'
  );
}
