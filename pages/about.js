import React from 'react'

import Me from '../assets/about/me.png'

export default function About() {
  return (
    <div className="iuc-about">
      <aside className="iuc-about__sidebar">
        <img src={Me} alt="A picture of myself" className="iuc-about__img" />
        <h1 className="iuc-about__name">Imanuel Ulbricht</h1>
        <ul className="iuc-about__list">
          <li>Software Developer</li>
          <li>Web Designer</li>
          <li>App Designer</li>
        </ul>
      </aside>
      <main className="iuc-about__content">
        <section className="iuc-about__section">
          <h2 className="iuc-about__heading-two">Who am I?</h2>
          <p className="iuc-about__paragraph">
            Even before I acquired my school leaving certificate (grade average: 1.72) at the St. Augustinus-School
            Hildesheim in 2010, I started programming in 2007 at the age of 13. The first programming language I worked
            with was Delphi 5 and it was there that I discovered my passion for programming. To extend my knowledge in
            the C-languages I bought teaching material for the programming language C. This opened the way for me to
            further C languages like C++, C# and Java.
          </p>
          <p className="iuc-about__paragraph">
            Due to my interest in programming I started an apprenticeship as a computer science expert (subject area)
            software development at Mentana-Claimsoft GmbH in Bad Salzdetfurth at the end of 2010, which I successfully
            completed in June 2013. During my apprenticeship, I expanded and deepened my knowledge in the programming
            languages C++, C# and Java. Furthermore, I acquired basic knowledge in the languages SQL, JavaScript, CSS
            and HTML, which, among other things, formed an essential part of my final project work. Another essential
            part of my education was the field of cryptography as well as De-Mail.
          </p>
          <p className="iuc-about__paragraph">
            After my education I started a job at Netrada Europe GmbH. In February 2014 Netrada Europe GmbH was bought
            by arvato AG. During my time at arvato I got to know the world of backend eCommerce programming. Furthermore
            I gained knowledge of Borland C++ Builder 6 and the maintenance of legacy software.
          </p>
          <p className="iuc-about__paragraph">
            After my contract at arvato expired at the end of 2014, I took a job at Computacenter AG & co. oHG, where I
            gained basic knowledge in the area of SharePoint and had my first project contact with Angular.js and
            knockout.js.
          </p>
          <p className="iuc-about__paragraph">
            In April 2016 I accepted a new position at COMPRA GmbH in Hildesheim. There I first developed on the
            in-house shop system and got to know the advantages of working according to Scrum. In the course of time, I
            was employed for the development of webshops based on Shopware. There I found my way well and was able to
            bring my knowledge very quickly to a high level. Besides the development based on Shopware, I have done
            other projects in C#/.net and Apache Cordova.
          </p>
          <p className="iuc-about__paragraph">
            Later in the end of 2017 I accepted a new challenge at the company FERCHAU GmbH. There I was assigned to a
            customer in the automotive and financial area. There I improved my knowledge of modern web technologies like
            ReactJS and EcmaScript 6. Due to budget constraints, FERCHAU needed to look for a new customer and I was
            “handed over to” LINEAS Informationstechnik GmbH after only working 6 months for FERCHAU.
          </p>
          <p className="iuc-about__paragraph">
            At LINEAS I developed an internal project based on ReactJS and Express.js. In this project, I could train
            and improve my design skills. Currently I work at LINEAS. Due to confidentiality I cannot say much about the
            project, apart from the technologies. The application is going to be a modern web application based on
            ASP.net core and KendoUI.
          </p>
          <p className="iuc-about__paragraph">
            My personal strengths include a high level of commitment, rapid and creative development of problem
            solutions as well as the ability to cooperate, customer-oriented working methods and discretion.
          </p>
        </section>
      </main>
    </div>
  )
}
