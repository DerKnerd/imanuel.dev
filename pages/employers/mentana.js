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
      <h2 className="iuc-employer__heading-two">Who is Mentana-Claimsoft GmbH?</h2>
      <p className="iuc-employer__text">
        Die Leistungen unseres Unternehmens werden immer bedeutender für die Reorganisation von Geschäftsprozessen und
        somit für die erfolgreiche Geschäftstätigkeit unserer Kunden. Der Qualitätsstandard unserer Produkte und
        Dienstleistungen wird auch Gesetzgebungen (z.B. De-Mail-Gesetz, Signatur-Gesetz) und Richtlinien des BSI und
        BfDI beeinflusst.
      </p>
      <p className="iuc-employer__text">
        Für die Mentana-Claimsoft GmbH stellen diese Rahmenbedingungen die Herausforderung dar, die Qualität unserer
        Produkte und Dienstleistungen konsequent an den Bedürfnissen unserer Kunden, Rechtsgrundlagen und Richtlinien
        auszurichten. Als Grundlage dient unser Qualitätsmanagementsystem gemäß DIN EN ISO 9001:2015.
      </p>
      <p className="iuc-employer__text">
        Seit der Gründung 1999 verstehen wir uns als ein innovatives und lernendes Unternehmen, bei dem das langfristige
        Denken und nicht unbedingt kurzfristiges Gewinnstreben im Vordergrund steht. Diese Einstellung ist für alle
        Mitarbeiterinnen und Mitarbeiter wichtig, um für den Wettbewerb gerüstet zu sein. Bei uns hat die Aus- und
        Weiterbildung der Mitarbeiterinnen und Mitarbeiter einen hohen Stellenwert. Dabei geht es nicht nur um die
        fachliche Komponente sondern auch um die Weiterentwicklung der Persönlichkeit.
      </p>
      <p className="iuc-employer__text">
        Zufriedene Mitarbeiter und ein positives Betriebsklima sind die Basis für den Erfolg unseres Unternehmens. Im
        Zentrum unserer Tätigkeit steht der Kunde mit seinen Wünschen, Anregungen und Bedürfnissen, die mit den
        geltenden Gesetzen und vorhandenen IT-Sicherheitsaspekten in Einklang gebracht werden müssen.
      </p>
      <h2 className="iuc-employer__heading-two">Who are Mentana-Claimsoft GmbH Clients?</h2>
      <ul className="iuc-employer__list">
        <li>AOK Bremen/Bremerhaven</li>
        <li>Landkreis Hildesheim</li>
        <li>Deutsche Rentenversicherung</li>
        <li>Lufthansa Technik</li>
      </ul>
      <h2 className="iuc-employer__heading-two">What did I do at Mentana-Claimsoft GmbH?</h2>
      <p className="iuc-employer__text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
        dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
        magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
        sanctus est Lorem ipsum dolor sit.
      </p>
    </main>
  )
}
