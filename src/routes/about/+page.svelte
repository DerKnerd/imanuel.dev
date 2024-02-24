<svelte:head>
	<title>Imanuel Ulbricht – Über mich</title>
</svelte:head>
<main>
	<aside>
		<img alt="Ein Bild von mir" aria-hidden="true" src="/assets/about/me.png" />
		<h1>Imanuel Ulbricht</h1>
		<ul>
			<li>Software Developer</li>
			<li>Web Designer</li>
			<li>App Designer</li>
		</ul>
	</aside>
	<article>
		<section>
			<h2>Mein Weg</h2>
			<p>
				2007 habe ich im Alter von 13 Jahren mit dem Programmieren angefangen. Der erste Kontakt mit
				Programmierung war Delphi 5 im Informatikunterricht. Zuhause habe ich mich umgeschaut und
				über einen Kollegen meines Vaters Zugang zu der Sprache C bekommen. Nachdem ich das Buch
				quasi eingeatmet habe, war ich hooked und wollte mehr. Nach kurzer Netzrecherche bin ich auf
				die Openbooks des Galileo Computing Verlags gestoßen und habe direkt C# und Java gelernt.
				Bis heute bin ich ein großer Fan der Bücher des Rheinwerk Verlags, der Verlag der Galileo
				Computing heute ist.
			</p>
			<p>
				Nach der Schule habe ich mich für eine Ausbildung als Fachinformatiker Anwendungsentwicklung
				entschieden. Die Ausbildung habe ich im Dezember 2010 bei der Mentana-Claimsoft GmbH in Bad
				Salzdetfurth angefangen. Während der Ausbildung habe ich im Bereich Kryptographie,
				Webentwicklung und auch Systemadministration gearbeitet. Hauptsächlich wurden C#, Java und
				C++ eingesetzt. Die Ausbildung habe ich im Juni 2013 erfolgreich abgeschlossen.
			</p>
			<p>
				Meine erste Festanstellung war bei der Netrada Europe GmbH in Hannover. Im Februar 2014,
				kurz nachdem ich angefangen hab, wurde Netrada von der arvato AG gekauft. Im Laufe der Zeit
				bei arvato habe ich, mit den Kollegen, das Order Management System von diversen Kunden aus
				der Modebranche weiterentwickelt. Die Software war in Borland C++ 6 geschrieben und mein
				erster Kontakt mit Legacy Software.
			</p>
			<p>
				Ende 2014 ist mein Vertrag bei arvato ausgelaufen und ich habe eine neue Stelle bei der
				Computacenter AG & co. oHG in Hannover angenommen. Die Stelle war mein erster Job im Bereich
				Consulting. Im Laufe der Zeit bei Computacenter wurde ich in einem internen Projekt für eine
				Software zur Organisation von Hardwarerollouts bei Kunden eingesetzt. Alle Anwendungen
				wurden in ASP.net MVC, C# und JavaScript entwickelt.
			</p>
			<p>
				Im April 2016 bin ich von Computacenter zu der COMPRA GmbH in Hildesheim gewechselt.
				Zunächst habe ich das intern entwickelte Shopsystem auf Basis von ASP.net WebForms, C# und
				JavaScript weiter entwickelt. Aufgrund von Personalmangel wurde ich allerdings in die
				Entwicklung von Webshops auf Basis von Shopware versetzt. In der Zeit im Shopware Team habe
				ich die Deployment und Entwicklungsprozesse komplett neu strukturiert und modernisiert.
			</p>
			<p>
				Im Laufe von 2017 hat sich herauskristallisiert, dass COMPRA auf Dauer kein Zuhause für mich
				ist und ich bin im Dezember 2017 zu der FERCHAU GmbH in Braunschweig gewechselt. Bei FERCHAU
				wurde ich an einen Finanzkunden im Automotive Umfeld vermittelt, leider darf ich nicht sagen
				wer es war. Dort habe ich das Frontend für ein Leasingrücknahmesystem auf Basis von React
				und JavaScript entwickelt. Im Mai 2018 hat der Kunde das Budget gekürzt und leider wurde ich
				aus dem Projekt genommen. Leider hatte FERCHAU auch keine Projekte in der Hinterhand und ich
				wurde deshalb an die LINEAS Informationstechnik GmbH vermittelt und habe dort eine neue
				Festanstellung bekommen.
			</p>
			<p>
				Bei LINEAS habe ich zunächst an einem internen Projekt auf Basis von React und express
				gearbeitet. Direkt wurde meine Fähigkeit für gutes Design erkannt und auch gefördert. Im
				Laufe des Projekts war ich verantwortlich für den kompletten Designprozess und habe ein UI
				Framework in React entwickelt. Das Projekt wurde Ende 2020 abgeschlossen und ein neues
				Projekt hat begonnen. In diesem Projekt habe ich ebenfalls die Führung im Bereich Design
				übernommen. Wir haben uns für die Nutzung von KendoUI und ASP.net core entschieden. Das
				Projekt ist aktuell noch in Entwicklung.<br />
				Im August 2023 gab es einen Betriebsübergang von der LINEAS zur GOD mbH. Dort bin ich bis heute
				angestellt.
			</p>
		</section>
	</article>
</main>

<style>
	main {
		display: flex;
		box-sizing: border-box;
		flex-wrap: wrap;
	}

	@media screen and (max-width: 1023px) {
		main {
			display: block;
		}
	}

	aside {
		width: 15%;
	}

	@media screen and (max-width: 1023px) {
		aside {
			width: 100%;
			padding-left: 0;
			padding-bottom: 2rem;
		}
	}

	@media screen and (min-width: 1920px) and (max-width: 2559px) {
		aside {
			width: 25%;
		}
	}

	@media screen and (min-width: 1024px) and (max-width: 1919px) {
		aside {
			width: 25%;
		}
	}

	article {
		width: 85%;
		padding-left: 2rem;
		box-sizing: border-box;
	}

	@media screen and (max-width: 1023px) {
		article {
			width: 100%;
			padding-left: 0;
		}
	}

	@media screen and (min-width: 1920px) and (max-width: 2559px) {
		article {
			width: 75%;
		}
	}

	@media screen and (min-width: 1024px) and (max-width: 1919px) {
		article {
			width: 75%;
		}
	}

	img {
		width: 100%;
		height: auto;
	}

	h1 {
		font-family: var(--font-family-heading);
		color: var(--primary-color);
		font-size: 2rem;
		margin: 0;
		font-weight: var(--font-weight-regular);
	}

	ul {
		font-family: var(--font-family-heading);
		color: var(--primary-color);
		font-size: 1.5rem;
		margin: 0;
		padding: 0 0 0 1.5rem;
	}

	h2 {
		font-family: var(--font-family-heading);
		font-weight: var(--font-weight-regular);
		margin: 0;
		font-size: 1.5rem;
		color: var(--primary-color);
	}

	section {
		margin: 0 0 1rem;
	}

	p {
		margin: 0 0 1rem;
	}
</style>
