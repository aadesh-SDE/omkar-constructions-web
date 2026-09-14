import { Helmet } from 'react-helmet-async'
import heroImg from '../assets/photos/hero-excavator-sunset.jpg'
import { PageHero } from '../components/sections/PageHero'
import { ContactForm } from '../components/sections/contact/ContactForm'
import { Icon } from '../components/ui/Icon'
import { Kicker } from '../components/ui/Kicker'
import { footerContact } from '../content/nav'

// Note: there was no Contact page in the Figma file (only Home, About,
// Services and Projects were designed) — this page is built to match the
// same design system/style, not traced from a Figma frame.
export function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Omkar Constructions</title>
        <meta
          name="description"
          content="Get in touch with Omkar Constructions to discuss your project requirements."
        />
      </Helmet>
      <PageHero
        breadcrumb="Contact"
        kicker="Get In Touch"
        heading={["Let's Start the", 'Conversation']}
        body="Tell us about your project and we'll get back to you to discuss how we can help."
        image={heroImg}
      />

      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
          <div>
            <Kicker>Send a Message</Kicker>
            <h2 className="mt-3 font-heading text-2xl font-bold text-ink lg:text-3xl">
              Discuss Your Project Requirements
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="rounded-card bg-mist p-6">
            <h3 className="font-heading text-lg font-bold text-ink">Contact Information</h3>
            <ul className="mt-4 space-y-4">
              {footerContact.phones.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <Icon name="phone" className="h-4 w-4" />
                  </span>
                  <span className="font-body text-sm text-ink-soft">{p}</span>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  <Icon name="mail" className="h-4 w-4" />
                </span>
                <span className="font-body text-sm text-ink-soft">{footerContact.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  <Icon name="pin" className="h-4 w-4" />
                </span>
                <span className="font-body text-sm text-ink-soft">{footerContact.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
