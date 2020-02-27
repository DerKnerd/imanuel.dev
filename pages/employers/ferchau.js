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
        <h1 className="iuc-employer__name">FERCHAU GmbH</h1>
      </header>
      <img src={FerchauClaim} alt="Ferchau Logo" aria-hidden className="iuc-employer__logo" />
      <h2 className="iuc-employer__heading-two">Who is FERCHAU?</h2>
      <blockquote className="iuc-employer__quote">
        <p className="iuc-employer__text">
          Derzeit arbeiten bei der FERCHAU GmbH mehr als 8.400 Ingenieure, IT-Consultants, Techniker und Technische
          Zeichner in über 100 Niederlassungen und Standorten sowie in über 110 Technischen Büros und Projektgruppen
          (Stand: 31.12.2018). FERCHAU ist in den sieben Fachbereichen Maschinenbau, Anlagenbau, Elektrotechnik,
          Fahrzeugtechnik, Informationstechnik, Luft- und Raumfahrttechnik sowie Schiffbau und Meerestechnik tätig.
        </p>
        <p className="iuc-employer__text">
          Der Engineering- und IT-Dienstleister bietet seinen Kunden drei Leistungsbausteine an: Im Bereich Engineering
          Competence übernimmt das Unternehmen ganze Workpackages, die entweder beim Kunden vor Ort oder in den eigenen
          Technischen Büros bearbeitet werden. Im zweiten Kompetenzfeld, dem Engineering Support, unterstützen die
          Fachkräfte des Engineering- und IT-Dienstleisters den Kunden vor Ort. Im dritten Bereich, den Managed
          Services, unterstützt FERCHAU seine Kunden bei der Bündelung von Beschaffungsprozessen für Engineering- und
          IT-Dienstleistungen.
        </p>
        <cite className="iuc-employer__cite">
          <a target="_blank" className="iuc-employer__cite--link" href="https://www.ferchau.com/de/de">
            FERCHAU GmbH
          </a>
        </cite>
      </blockquote>
      <h2 className="iuc-employer__heading-two">Who are FERCHAUs’ clients?</h2>
      <ul className="iuc-employer__list">
        <li>None published</li>
      </ul>
      <h2 className="iuc-employer__heading-two">What did I do at FERCHAU?</h2>
      <p className="iuc-employer__text">
        In December 2017 I started my job as software developer at FERCHAU&nbsp;GmbH in Brunswick. At FERCHAU I was
        assigned to a customer in the automotive environment. At this customer I developed a leasing take-back system
        and improved my knowledge in modern web frameworks.
      </p>
      <p className="iuc-employer__text">
        Unfortunately, due to budget cuts, I was not able to stay with the customer for long and had to leave the
        project after less than five months. In the course of the reorientation and in search of a new customer, I was
        “handed over to” LINEAS Informationstechnik GmbH after only six months and thus ended my short career at
        FERCHAU.
      </p>
    </main>
  )
}
