import React from 'react'
import MentanaClaim from '../../assets/employers/mentana.png'
import Link from 'next/link'

export default function Mentana() {
  return (
    <main className="iuc-employer">
      <header className="iuc-employer__header">
        <Link href="/employers">
          <a aria-label="Back to My Employers" className="iuc-employer__back-button">
            <span className="iuc-employer__arrow" />
          </a>
        </Link>
        <h1 className="iuc-employer__name">Mentana-Claimsoft GmbH</h1>
      </header>
      <img src={MentanaClaim} alt="Mentana-Claimsoft GmbH Logo" aria-hidden className="iuc-employer__logo" />
      <h2 className="iuc-employer__heading-two">Who is Mentana-Claimsoft?</h2>
      <blockquote className="iuc-employer__quote">
        <p className="iuc-employer__text">
          Die Mentana-Claimsoft GmbH ist seit mehr als 20 Jahren auf den Bereich elektronischer Signaturen spezialisiert
          und unterstützt Ihre Kunden mit sicheren Signaturlösungen bei einem effizienten Digitalisierungsprozess. Das
          Ziel: reibungslose Arbeitsabläufe, eine gesteigerte Wirtschaftlichkeit und ein hohes Maß an Rechtssicherheit.
          Dabei entwickeln wir individuelle Kundenlösungen und binden unsere Technologien in etablierte Prozesse,
          Fachanwendungen und Archive ein.
        </p>
        <p className="iuc-employer__text">
          Mentana-Claimsoft unterstützt eGovernment, eHealth, eJustice und Wirtschaft mit einem modular aufgebauten
          Leistungsangebot bei der Digitalisierung und Sicherung von Dokumenten und Prozessen. Im Fokus steht der
          Einsatz der elektronischen Signaturen mit all seinen Facetten und Vorteilen.
        </p>
        <cite className="iuc-employer__cite">
          <a target="_blank" className="iuc-employer__cite--link" href="https://www.mentana-claimsoft.de/">
            Mentana-Claimsoft GmbH
          </a>
        </cite>
      </blockquote>
      <h2 className="iuc-employer__heading-two">Who are Mentana-Claimsofts’ clients?</h2>
      <ul className="iuc-employer__list">
        <li>AOK Bremen/Bremerhaven</li>
        <li>Landkreis Hildesheim</li>
        <li>Deutsche Rentenversicherung</li>
        <li>Lufthansa Technik</li>
      </ul>
      <h2 className="iuc-employer__heading-two">What did I do at Mentana-Claimsoft?</h2>
      <p className="iuc-employer__text">
        In December 2010 I stated my apprenticeship as an IT specialist in the field of application development at the
        then Mentana GmbH. During my training I got to know many areas of software development.
      </p>
      <p className="iuc-employer__text">
        At the beginning of my training I wrote a tool to be able to read various parameters from a Windows NT 4.0
        system or above. With the help of this application, it became possible to cover many support cases and reduce
        the effort needed to support customers. By further developing the application into a static library, it became
        possible to integrate these features directly into the existing products. This led to further simplifications of
        the support process, as it could be started directly from the applications.
      </p>
      <p className="iuc-employer__text">
        In the further course of my apprenticeship I was increasingly employed in the field of cryptography. Together
        with some colleagues, I designed and developed the email system De-Mail, which is legally watertight in Germany.
        My task was the development of a gateway for the De-Mail technology, so that it was to be able to integrate it
        into existing email environments, such as Microsoft Exchange systems. To enable the end user to distinguish
        regular email from De-Mail, an Outlook plugin was developed. While developing the Outlook plugin, I proved my
        talent for developing Office plugins and thus developed several plugins.
      </p>
      <p className="iuc-employer__text">
        At the end of the apprenticeship I developed a service for synchronizing certificates. This service was supposed
        to ensure that all customers of Mentana-Claimsoft&nbsp;GmbH trust the same certificates, avoiding problems with
        missing or untrusted certificates.
      </p>
      <p className="iuc-employer__text">
        In July 2013 I successfully completed the apprenticeship scheme with a score of 71 per cent.
      </p>
    </main>
  )
}
