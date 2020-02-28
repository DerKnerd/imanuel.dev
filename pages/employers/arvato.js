import React from 'react'
import ArvatoClaim from '../../assets/employers/arvato.svg'
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
        <h1 className="iuc-employer__name">Arvato Verwaltungsgesellschaft mbH</h1>
      </header>
      <ArvatoClaim className="iuc-employer__logo" />
      <h2 className="iuc-employer__heading-two">Who is Arvato?</h2>
      <blockquote className="iuc-employer__quote">
        <p className="iuc-employer__text">
          Arvato is an internationally active services company and one of eight divisions of Bertelsmann SE & Co. KGaA.
          The division includes the solutions groups Arvato Financial Solutions, Arvato Supply Chain Solutions and
          Arvato Systems as well as the Majorel group of companies, in which Bertelsmann owns 50 percent of shares.
        </p>
        <p className="iuc-employer__text">
          More than 70,000 employees in almost 40 countries develop and implement innovative solutions for business
          customers all over the world. These include SCM and IT solutions as well as financial and customer
          communication services, which are continuously developed with a focus on innovations in automation and
          data/analytics.
        </p>
        <p className="iuc-employer__text">
          Globally renowned companies from a wide variety of industries – from telecommunications providers and energy
          providers to banks and insurance companies, e-commerce, IT and Internet providers – rely on Arvato’s portfolio
          of solutions.
        </p>
        <cite className="iuc-employer__cite">
          <a target="_blank" className="iuc-employer__cite--link" href="https://www.bertelsmann.com/divisions/arvato/">
            Bertelsmann SE & Co. KGaA
          </a>
        </cite>
      </blockquote>
      <h2 className="iuc-employer__heading-two">Who are Arvatos’ clients?</h2>
      <ul className="iuc-employer__list">
        <li>Esprit</li>
        <li>Tommy Hilfiger</li>
        <li>Versace</li>
      </ul>
      <h2 className="iuc-employer__heading-two">What did I do at Arvato?</h2>
      <p className="iuc-employer__text">
        In October 2013 I started working at Netrada Europe GmbH as a junior software engineer. During spring 2014
        Netrada Europe GmbH was taken over by Arvato Bertelsmann and subsequently split into Arvato
        Verwaltungsgesellschaft mbH and Arvato&nbsp;Betriebsgesellschaft&nbsp;mbH, separating administration and
        fulfillment.
      </p>
      <p className="iuc-employer__text">
        During my time at Arvato, I have gained a lot of experience in logistics and warehouse management software.
        Together with my colleagues I developed the order management system that was used by Arvato's customers. In the
        process of further development, I learned a lot about working with legacy systems and was able to significantly
        improve my skills in understanding foreign code.
      </p>
    </main>
  )
}
