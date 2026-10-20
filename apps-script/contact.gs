/**
 * Omkar Constructions — Contact form → email.
 *
 * Paste this whole file into a Google Apps Script project (Code.gs) and
 * deploy it as a Web app (Execute as: Me, Who has access: Anyone).
 * The website POSTs the form as JSON; this script checks every field and
 * emails the inquiry to TO_EMAIL.
 */

const TO_EMAIL = 'omkarconstruction155@gmail.com';

const REQUIRED_FIELDS = {
  name: 'Full Name',
  phone: 'Phone Number',
  email: 'Email Address',
  message: 'What do you need?',
};

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Honeypot: bots fill the hidden field, real visitors never do.
    if (data._honey) return json({ success: true });

    const error = validate(data);
    if (error) return json({ success: false, message: error });

    MailApp.sendEmail({
      to: TO_EMAIL,
      replyTo: data.email,
      name: 'Omkar Constructions Website',
      subject: 'New project inquiry from ' + data.name,
      htmlBody: emailTable('New project inquiry', [
        ['Full Name', data.name],
        ['Phone Number', data.phone],
        ['Email Address', data.email],
        ['What do you need?', data.message],
      ]),
    });

    return json({ success: true });
  } catch (err) {
    return json({ success: false, message: String(err) });
  }
}

/** Lets you open the /exec URL in a browser to check the deployment is live. */
function doGet() {
  return json({ ok: true, form: 'contact' });
}

function validate(data) {
  for (const key in REQUIRED_FIELDS) {
    if (!String(data[key] || '').trim()) return REQUIRED_FIELDS[key] + ' is required.';
  }
  if (!/^\d{10}$/.test(data.phone)) return 'Phone Number must be 10 digits.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return 'Email Address is not valid.';
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
