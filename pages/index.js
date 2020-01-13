import Menu from '../components/menu'
import React from 'react'

import '../scss/grid.scss'

import AndroidRobot from '../assets/tools/Androidrobot.svg'
import PhpLogo from '../assets/tools/php-logo.svg'
import ToolboxLogo from '../assets/tools/toolbox.svg'
import CreativeCloudLogo from '../assets/tools/adobe-creative-cloud-logo.svg'
import NodejsLogo from '../assets/tools/nodejs-seeklogo.com.svg'
import DatabaseLogo from '../assets/tools/Database.svg'
import GoogleLogo from '../assets/tools/logo_Google_FullColor_3x_830x271px.max-2800x2800.png'
import JetbrainsLogo from '../assets/tools/jetbrains-seeklogo.svg'
import AsfLogo from '../assets/tools/ApacheSoftwareFoundation.svg'
import Html5Logo from '../assets/tools/HTML5-Logo.svg'
import MicrosoftLogo from '../assets/tools/microsoft-seeklogo.com.svg'
import AtlassianLogo from '../assets/tools/atlassian-logo-gradient-vertical-blue.svg'
import LinuxLogo from '../assets/tools/Icons8_flat_linux.svg'
import JavaLogo from '../assets/tools/java-seeklogo.com.svg'
import Footer from '../components/footer'

export default function Index() {
  return (
    <>
      <Menu />
      <main className="iuc-grid">
        <div className="iuc-grid__tile">
          <AndroidRobot />
        </div>
        <div className="iuc-grid__tile iuc-grid__tile--empty" />
        <div className="iuc-grid__tile">
          <PhpLogo />
        </div>
        <div className="iuc-grid__tile iuc-grid__tile--empty" />
        <div className="iuc-grid__tile">
          <ToolboxLogo />
        </div>
        <div className="iuc-grid__tile iuc-grid__tile--empty" />
        <div className="iuc-grid__tile">
          <CreativeCloudLogo />
        </div>
        <div className="iuc-grid__tile iuc-grid__tile--empty" />
        <div className="iuc-grid__tile">
          <NodejsLogo />
        </div>
        <div className="iuc-grid__tile iuc-grid__tile--empty" />
        <div className="iuc-grid__tile">
          <DatabaseLogo />
        </div>
        <div className="iuc-grid__tile iuc-grid__tile--empty" />
        <div className="iuc-grid__tile">
          <img src={GoogleLogo} alt="Google" />
        </div>
        <div className="iuc-grid__tile iuc-grid__tile--empty" />
        <div className="iuc-grid__tile">
          <JetbrainsLogo />
        </div>
        <div className="iuc-grid__tile iuc-grid__tile--empty" />
        <div className="iuc-grid__tile">
          <AsfLogo />
        </div>
        <div className="iuc-grid__tile iuc-grid__tile--empty" />
        <div className="iuc-grid__tile">
          <Html5Logo />
        </div>
        <div className="iuc-grid__tile iuc-grid__tile--empty" />
        <div className="iuc-grid__tile">
          <MicrosoftLogo />
        </div>
        <div className="iuc-grid__tile iuc-grid__tile--empty" />
        <div className="iuc-grid__tile">
          <AtlassianLogo />
        </div>
        <div className="iuc-grid__tile iuc-grid__tile--empty" />
        <div className="iuc-grid__tile">
          <LinuxLogo />
        </div>
        <div className="iuc-grid__tile iuc-grid__tile--empty" />
        <div className="iuc-grid__tile">
          <JavaLogo />
        </div>
        <div className="iuc-grid__tile iuc-grid__tile--empty" />
      </main>
      <Footer />
    </>
  )
}
