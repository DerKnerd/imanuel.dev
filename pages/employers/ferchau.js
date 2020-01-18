import React from 'react'
import FerchauClaim from '../../assets/employers/FERCHAU.png'
import Link from 'next/link'

export default function Ferchau() {
  return (
    <main className="iuc-employer">
      <header className="iuc-employer__header">
        <Link href="/employers">
          <a aria-label="Back to My Employers" className="iuc-employer__back-button">
            <span className="iuc-employer__arrow" />
          </a>
        </Link>
        <h1 className="iuc-employer__name">Ferchau</h1>
      </header>
      <img src={FerchauClaim} alt="Ferchau Logo" aria-hidden className="iuc-employer__logo" />
      <h2 className="iuc-employer__heading-two">Who is Ferchau?</h2>
      <p className="iuc-employer__text">
        Derzeit arbeiten bei der FERCHAU GmbH mehr als 8.400 Ingenieure, IT-Consultants,
        Techniker und Technische Zeichner in über 100 Niederlassungen und Standorten sowie in über 110 Technischen Büros
        und Projektgruppen (Stand: 31.12.2018). FERCHAU ist in den sieben Fachbereichen Maschinenbau, Anlagenbau,
        Elektrotechnik, Fahrzeugtechnik, Informationstechnik, Luft- und Raumfahrttechnik sowie Schiffbau und
        Meerestechnik tätig.
      </p>
      <p className="iuc-employer__text">
        Der Engineering- und IT-Dienstleister bietet seinen Kunden drei Leistungsbausteine an: Im Bereich Engineering
        Competence übernimmt das Unternehmen ganze Workpackages, die entweder beim Kunden vor Ort oder in den eigenen
        Technischen Büros bearbeitet werden. Im zweiten Kompetenzfeld, dem Engineering Support, unterstützen die
        Fachkräfte des Engineering- und IT-Dienstleisters den Kunden vor Ort. Im dritten Bereich, den Managed Services,
        unterstützt FERCHAU seine Kunden bei der Bündelung von Beschaffungsprozessen für Engineering- und
        IT-Dienstleistungen.
      </p>
      <h2 className="iuc-employer__heading-two">Who are Ferchau Clients?</h2>
      <ul className="iuc-employer__list">
        <li>None published</li>
      </ul>
      <h2 className="iuc-employer__heading-two">What did I do at Ferchau?</h2>
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
