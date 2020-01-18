import React from 'react'
import ArvatoClaim from '../../assets/employers/arvato-bertelsmann-seeklogo.com.svg'
import Link from 'next/link'

export default function Arvato() {
  return (
    <main className="iuc-employer">
      <header className="iuc-employer__header">
        <Link href="/employers">
          <a aria-label="Back to My Employers" className="iuc-employer__back-button">
            <span className="iuc-employer__arrow" />
          </a>
        </Link>
        <h1 className="iuc-employer__name">Arvato</h1>
      </header>
      <ArvatoClaim className="iuc-employer__logo" />
      <h2 className="iuc-employer__heading-two">Who is Arvato?</h2>
      <p className="iuc-employer__text">
        Arvato is an internationally active services company and one of eight divisions of Bertelsmann SE & Co. KGaA.
        The division includes the solutions groups Arvato Financial Solutions, Arvato Supply Chain Solutions and Arvato
        Systems as well as the Majorel group of companies, in which
        Bertelsmann owns 50 percent of shares.
      </p>
      <p className="iuc-employer__text">
        More than 70,000 employees in almost 40 countries develop and implement innovative solutions for business
        customers all over the world. These include SCM and IT solutions as well as financial and customer communication
        services, which are continuously developed with a focus on innovations in automation and data/analytics.
      </p>
      <p className="iuc-employer__text">
        Globally renowned companies from a wide variety of industries – from telecommunications providers and energy
        providers to banks and insurance companies, e-commerce, IT and Internet providers – rely on Arvato’s portfolio
        of solutions.
      </p>
      <h2 className="iuc-employer__heading-two">Who are Arvato Clients?</h2>
      <ul className="iuc-employer__list">
        <li>Esprit</li>
        <li>Tommy Hilfiger</li>
        <li>Versace</li>
      </ul>
      <h2 className="iuc-employer__heading-two">What did I do at Arvato?</h2>
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
