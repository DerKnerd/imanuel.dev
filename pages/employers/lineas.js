import React from 'react'
import LineasClaim from '../../assets/employers/lineas.png'
import Link from 'next/link'

export default function Lineas() {
  return (
    <main className="iuc-employer">
      <header className="iuc-employer__header">
        <Link href="/employers">
          <a aria-label="Back to My Employers" className="iuc-employer__back-button">
            <span className="iuc-employer__arrow" />
          </a>
        </Link>
        <h1 className="iuc-employer__name">LINEAS Informationstechnik GmbH</h1>
      </header>
      <img src={LineasClaim} className="iuc-employer__logo" alt="Logo of LINEAS Informationstechnik GmbH" />
      <h2 className="iuc-employer__heading-two">Who is LINEAS?</h2>
      <p className="iuc-employer__text">
        Bereits seit 1989 gehört LINEAS zu den führenden Software- und Beratungshäusern in Niedersachsen. Mit
        innovativen Ansätzen, viel Kreativität, höchster Professionalität und großer Begeisterung tragen wir zum Erfolg
        unserer Kunden bei und entwickeln für Sie maßgeschneiderte, zukunftssichere, integrierte Lösungen.
      </p>
      <p className="iuc-employer__text">
        Mit unserem marktorientierten Themenmanagement erweitern wir unser Leistungsportfolio und die Kompetenz unserer
        Mitarbeiter um neue Technologien und Methoden. Auf dieser Basis entwickeln sich unsere Mitarbeiter
        kontinuierlich weiter.
      </p>
      <p className="iuc-employer__text">
        Wir bieten Service in vollem Umfang: Unser Team aus hochspezialisierten Profis begleitet jeden Kunden von der
        Beratung über die Konzeption und Entwicklung bis hin zum Rollout und übernimmt auch den anschließenden Support.
        Dabei folgen sie stets unseren Grundwerten:
        <ul>
          <li>Zuverlässigkeit und Verbindlichkeit</li>
          <li>Respekt und Verantwortung</li>
          <li>Kooperation und Vertrauen</li>
          <li>Transparenz</li>
          <li>Mut und Nachhaltigkeit</li>
          <li>Selbstständigkeit und Individualismus</li>
        </ul>
      </p>
      <h2 className="iuc-employer__heading-two">Who are LINEAS Clients?</h2>
      <ul className="iuc-employer__list">
        <li>None published</li>
      </ul>
      <h2 className="iuc-employer__heading-two">What did I do at LINEAS?</h2>
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
