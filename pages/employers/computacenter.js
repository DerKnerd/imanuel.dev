import React from 'react'
import Link from 'next/link'
import ComputacenterLogo from '../../assets/employers/computacenter.png'

export default function Computacenter() {
  return (
    <main className="iuc-employer">
      <header className="iuc-employer__header">
        <Link href="/employers">
          <a aria-label="Back to My Employers" className="iuc-employer__back-button">
            <span className="iuc-employer__arrow" />
          </a>
        </Link>
        <h1 className="iuc-employer__name">Computacenter</h1>
      </header>
      <img src={ComputacenterLogo} alt="Computacenter AG & Co. oHG" className="iuc-employer__logo" />
      <h2 className="iuc-employer__heading-two">Who is Computacenter?</h2>
      <p className="iuc-employer__text">
        Computacenter is a leading independent provider of IT infrastructure services, enabling users and their business
        in a digital world. We advise organisations on IT strategy, implement the most appropriate technology, optimise
        its performance, and manage our customers’ infrastructures. In doing this we help CIOs and IT departments in
        enterprise and corporate organisations maximise productivity and the business value of IT for internal and
        external users.
      </p>
      <p className="iuc-employer__text">
        Computacenter provides user support, supply chain management, and secure provision of applications and data to
        support individual working styles and improve collaboration. To achieve this, we assist with consulting as well
        as the implementation and operation of networks and datacenter infrastructures on or off customers’ premises and
        in the cloud.
      </p>
      <p className="iuc-employer__text">
        Computacenter combines global reach with local expertise. We operate Infrastructure Operations Centers and Group
        Service Desks across Europe, South Africa, Asia and the Americas from which our employees provide user support
        in 30 languages. Customers with global requirements are served through an extensive international partner
        network, which mirrors the requirements of our European-headquartered client base.
      </p>
      <h2 className="iuc-employer__heading-two">Who are Computacenter Clients?</h2>
      <ul className="iuc-employer__list">
        <li>IT-Niedersachsen</li>
        <li>Heathrow Airport</li>
        <li>Hays</li>
        <li>BMW Group</li>
        <li>Channel 4</li>
        <li>Camelot</li>
      </ul>
      <h2 className="iuc-employer__heading-two">What did I do at Computacenter?</h2>
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
