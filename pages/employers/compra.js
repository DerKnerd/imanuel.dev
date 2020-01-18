import React from 'react'
import CompraClaim from '../../assets/employers/COMPRA_Claim.svg'
import Link from 'next/link'

export default function Compra() {
  return (
    <main className="iuc-employer">
      <header className="iuc-employer__header">
        <Link href="/employers">
          <a aria-label="Back to My Skills" className="iuc-employer__back-button">
            <span className="iuc-employer__arrow" />
          </a>
        </Link>
        <h1 className="iuc-employer__name">COMPRA</h1>
      </header>
      <CompraClaim className="iuc-employer__logo" />
      <h2 className="iuc-employer__heading-two">Who is COMPRA?</h2>
      <p className="iuc-employer__text">
        Seit 1989 gelingt es der COMPRA kontinuierlich einen großen Kundenkreis mittelständischer Unternehmen mit
        unterschiedlichsten Unternehmensschwerpunkten auf- und auszubauen. Über 50 Mitarbeiter betreuen aktuell mehr
        als 200 mittelständische Unternehmen und über 450 Handwerksbetriebe im Bereich betriebswirtschaftlicher
        Softwarelösungen.
      </p>
      <h2 className="iuc-employer__heading-two">Who are COMPRAs Clients?</h2>
      <ul className="iuc-employer__list">
        <li>Biozym</li>
        <li>mateco</li>
        <li>ROSSMANN</li>
        <li>ASAL Baubeschlag</li>
        <li>LCN Cosmetics</li>
        <li>ZAH Hildesheim</li>
        <li>Spielplatzgeräte Maier</li>
      </ul>
      <h2 className="iuc-employer__heading-two">What did I do at COMPRA?</h2>
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
