import React from 'react'
import PhpLogo from '../assets/tools/php-logo.png'
import ToolboxLogo from '../assets/tools/toolbox.svg'
import CreativeCloudLogo from '../assets/tools/adobe-creative-cloud-logo.png'
import NodejsLogo from '../assets/tools/nodejs.svg'
import DatabaseLogo from '../assets/tools/Database.svg'
import GoogleLogo from '../assets/tools/logo_Google_FullColor_3x_830x271px.max-2800x2800.png'
import JetbrainsLogo from '../assets/tools/jetbrains.svg'
import AsfLogo from '../assets/tools/ApacheSoftwareFoundation.svg'
import Html5Logo from '../assets/tools/HTML5-Logo.svg'
import MicrosoftLogo from '../assets/tools/microsoft.svg'
import AtlassianLogo from '../assets/tools/atlassian-logo-gradient-vertical-blue.svg'
import LinuxLogo from '../assets/tools/Icons8_flat_linux.svg'
import JavaLogo from '../assets/tools/java.svg'
import Link from 'next/link'

export default function Index() {
  return (
    <div role="grid" className="iuc-grid" aria-label="My Skills">
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <Link href="/skill/php">
        <a aria-label="My PHP skills" title="My PHP skills" className="iuc-grid__tile">
          <img src={PhpLogo} alt="PHP" aria-hidden />
        </a>
      </Link>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <Link href="/skill/adobe">
        <a aria-label="My Adobe skills" title="My Adobe skills" className="iuc-grid__tile">
          <img src={CreativeCloudLogo} alt="Adobe Creative Cloud" aria-hidden />
        </a>
      </Link>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <Link href="/skill/node">
        <a aria-label="My NodeJS skills" title="My NodeJS skills" className="iuc-grid__tile">
          <NodejsLogo aria-hidden />
        </a>
      </Link>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <Link href="/skill/google">
        <a aria-label="My Google skills" title="My Google skills" className="iuc-grid__tile">
          <img src={GoogleLogo} alt="PHP" aria-hidden />
        </a>
      </Link>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <Link href="/skill/jetbrains">
        <a className="iuc-grid__tile" aria-label="My Jetbrains skills" title="My Jetbrains skills">
          <JetbrainsLogo aria-hidden />
        </a>
      </Link>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <Link href="/skill/apache">
        <a className="iuc-grid__tile" aria-label="My Apache skills" title="My Apache skills">
          <AsfLogo aria-hidden />
        </a>
      </Link>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <Link href="/skill/html5">
        <a className="iuc-grid__tile" aria-label="My HTML5 skills" title="My HTML5 skills">
          <Html5Logo aria-hidden />
        </a>
      </Link>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <Link href="/skill/microsoft">
        <a className="iuc-grid__tile" aria-label="My Microsoft skills" title="My Microsoft skills">
          <MicrosoftLogo aria-hidden />
        </a>
      </Link>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <Link href="/skill/atlassian">
        <a className="iuc-grid__tile" aria-label="My Atlassian skills" title="My Atlassian skills">
          <AtlassianLogo aria-hidden />
        </a>
      </Link>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <Link href="/skill/linux">
        <a className="iuc-grid__tile" aria-label="My Linux skills" title="My Linux skills">
          <LinuxLogo aria-hidden />
        </a>
      </Link>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <Link href="/skill/java">
        <a className="iuc-grid__tile" aria-label="My Java skills" title="My Java skills">
          <JavaLogo aria-hidden />
        </a>
      </Link>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <Link href="/skill/database">
        <a className="iuc-grid__tile" aria-label="My Database skills" title="My Database skills">
          <DatabaseLogo aria-hidden />
        </a>
      </Link>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <Link href="/skill/toolbox">
        <a aria-label="Other tools I know" title="Other tools I know" className="iuc-grid__tile">
          <ToolboxLogo aria-hidden />
        </a>
      </Link>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--medium-hidden iuc-grid__tile--large-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--medium-hidden iuc-grid__tile--large-hidden" />
    </div>
  )
}
