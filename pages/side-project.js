import React from 'react'

import JinyaGalleryCmsWebStartpage from '../assets/jinya/jinya-web-startpage.png'
import JinyaGalleryCmsAppStartpage from '../assets/jinya/jinya-app-startpage.png'

export default function SideProject() {
  return (
    <div className="iuc-side-project">
      <h1 className="iuc-side-project__heading-one">Jinya</h1>
      <h2 className="iuc-side-project__heading-two">Jinya Gallery CMS</h2>
      <section className="iuc-side-project__section">
        <img className="iuc-side-project__image iuc-side-project__image--right" src={JinyaGalleryCmsWebStartpage}
             alt="" aria-hidden />
        <p className="iuc-side-project__paragraph">
          The <i>Jinya Gallery CMS</i> is a content management system for artists in the fields of video, print, and
          digital art. Jinya offers an easy way to arrange and display the artworks. This enables a drag and drop based
          solution which we have named <i>Gallery Designer</i>.
        </p>
        <p className="iuc-side-project__paragraph">
          My good friend and artist <a className="iuc-side-project__link" href="https://jenny-jinya.com"
                                       target="_blank">Jenny-Jinya</a> approached me,
          because she wanted a new website. She asked me to check what’s possible. She explicitly wanted a solution that
          is specially adapted to the presentation of artwork. Since I had broad knowledge of various programming
          languages, I informed myself directly what was possible. In doing so, I looked at the requirements from
          different angles. On the one hand, the solution should be very performant to reduce unnecessary waiting times
          on the end user side. On the other hand, an administration as simple as possible and going live soon was
          desired. Since the application should be hosted on a shared hoster, it was only possible to use PHP. In the
          backend, which is called <i>Designer</i>, we were relatively free in the design, but decided to use a simple
          two-part design.
        </p>
        <p className="iuc-side-project__paragraph">
          The designer was divided into two areas, one for data maintenance and another for the placement of artworks in
          the galleries. At that time only images were implemented, and videos were not yet planned. However, the
          implementation of the CMS was delayed, because I was more involved in my job and therefore didn't have leisure
          time to take care of the CMS intensively. However, after a while I was able to improve my work—life balance
          and could spend more time with the development of the CMS. On February 10, 2018, after four months of
          development, the <i>Jinya Gallery CMS</i> was released as version 1.0.
        </p>
        <p className="iuc-side-project__paragraph">
          A lot has happened since that day.
        </p>
        <p className="iuc-side-project__paragraph">
          With version 2.0, which was released on May 18, 2018, there were some major changes. The original concept —
          the administration of the CMS in two different areas — has turned out to be extremely unintuitive and
          therefore the designer was redeveloped from scratch. The basic features of this designer are still present in
          the current <i>Jinya</i> version. The backend has not only changed visually, there were also several technical
          innovations. First, the classic MVC architecture of the application was scrapped and replaced by a simple
          RESTful API. This RESTful API enabled a much more flexible implementation of the designer and offers the
          possibility of opening up new end devices; previously, only desktop browsers were supported.
        </p>
        <p className="iuc-side-project__paragraph">
          The new designer version 2.0 was designed based on modern web technologies like Vue.js 2.5. The interface is a
          design developed from scratch, which tries to pack as many features as possible into a simple interface. With
          version 6.0 a static cache for the HTML files was implemented. This change has resulted in a significant
          performance increase for end users and reduced loading times to a few milliseconds.
        </p>
        <p className="iuc-side-project__paragraph">
          The last major change came with version 11.0, in the form of new media handling. Before version 10.0, images
          and videos were managed separately, and it was impossible to mix these types of art. This was replaced by the
          Media Manager. This change enables an artist to present their different works of art in the same way they are
          used to from platforms like Bēhance.
        </p>
        <p className="iuc-side-project__paragraph">
          The current version of the <i>Jinya Gallery CMS</i> is based on the PHP framework Symfony version 4.3 and an
          update to Symfony 5.0 is planned. The designer was written in Vue.js with ECMAScript 6 and SCSS. Since version
          7.0.0 there are prepared Docker containers, which currently run <a className="iuc-side-project__link"
                                                                             target="_blank"
                                                                             href="https://imanuel.ulbricht.design">my
          personal artist website</a> based on Kubernetes.
        </p>
        <p className="iuc-side-project__paragraph">
          Other sites that are based on the Jinya Gallery CMS are <a href="https://jenny-jinya.com"
                                                                     className="iuc-side-project__link"
                                                                     target="_blank">jenny-jinya.com</a> and <a
          className="iuc-side-project__link" href="https://comicsjenny-jinya.com"
          target="_blank">comics.jenny-jinya.com</a>
        </p>
      </section>
      <div className="iuc-side-project__seperator" />
      <h2 className="iuc-side-project__heading-two">Other applications from the Jinya project</h2>
      <section className="iuc-side-project__section">
        <img className="iuc-side-project__image iuc-side-project__image--left" src={JinyaGalleryCmsAppStartpage}
             alt="" aria-hidden />
        <p className="iuc-side-project__paragraph">
          Currently, a mobile application based on Dart and Flutter is under design and development under the name <i>Jinya
          Gallery App</i>. With the <i>Jinya Gallery App</i> it will be possible to manage and edit
          different <i>Jinya</i> based pages on one device. The release is planned for Mid- to Late-2020.
        </p>
        <p className="iuc-side-project__paragraph">
          <i>Jinya Api</i> is another project of the <i>Jinya</i> series. This small Go based application allows the
          automatic generation of bug reports and feature requests in the project management system of <i>Jinya</i>.
          Currently this system is JetBrains YouTrack.
        </p>
        <p className="iuc-side-project__paragraph">
          Besides the <i>Jinya Api</i> and the <i>Jinya Gallery App</i>, there is one last component that is responsible
          for creating the update channels. This component is also a small Go based application which, through a single
          step in the build process, creates an up-to-date listing of all versions of the <i>Jinya Gallery CMS</i>.
          These lists are read by <i>Jinya Gallery CMS</i> during an update and the desired version is downloaded.
        </p>
      </section>
      <div className="iuc-side-project__seperator" />
    </div>
  )
}
