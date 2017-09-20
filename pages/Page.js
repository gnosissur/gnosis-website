import React from 'react'
import { Content, Grid, GridItem, Nav, NavLink, Header, Section, Figure, Quote, Footer } from '../components'

const header = {
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: 'url(/assets/stars.jpg)',
}

const title = {
    fontFamily: '"Gotham-Medium", sans-serif',
    textTransform: 'uppercase',
    textAlign: 'left',
    lineHeight: 'normal',
    letterSpacing: '.25em',
    fontSize: '2em',
    fontWeight: 200,
    color: 'white',
    backgroundColor: '#e8aeb3',
    padding: 30,
}

const data = [
    { day: undefined, time: '', title: 'Was ist Gnosis', content: 'Einführung in das gnostische Weltbild. Von Meistern, Schülern, Strömungen und Traditionen. Gnosis in der Kunst, Philosophie, Wissenschaft und Religion. Kabbalah und Alchemie. Faktoren des Bewusstseins.', image: '/assets/kether.jpg', height: 600 },

    { day: undefined, month: '', time: '', title: 'Persönlichkeit\nEssenz\n& Ego', content: 'Die esoterische Psychologie, der Aufbau unseres Ichs, innere Zustände, Missstände und Möglichkeiten. Praktische Übung: Der Observierende und das Observierte, die Teilung des Bewusstseins.', image: '/assets/bosch.jpg', height: 300 },

    { day: undefined, month: '', time: '18:00', title: 'Erwachen des\nBewusstseins', content: 'Was ist das Bewusstsein, woher kommt es, welchen Anteil nimmt es an unserem Leben, wie stärkt man es. Praktische Übung: SOL, eine weitere Teilung des Bewusstseins.', image: '/assets/tongues.jpg', height: 300 },

    { day: undefined, month: '', time: '', title: 'Ego', content: 'Der Mensch ist zu seinem Nachsehen nicht eines. Er ist ist Bund verschiedenster Persönlichkeiten. Praktische Übung: Vertiefung der Übungen.', image: '/assets/pandora.jpg', height: 600 },

    { day: undefined, month: '', time: '', title: 'Licht\nWärme\n& Ton', content: 'Einführung in die Kabbalah. Das Gesetz der 3 (Schöpfung) und das Gesetz der 7 (Ordnung, Harmonie, Entwicklung). Chakras und ihr Einfluss auf uns. Praktische Übung: Vokalisation, Mantrams.', image: '/assets/trinity.jpg', height: 600 },

    { day: undefined, month: '', time: '', title: 'Die Maschine Mensch', content: 'Die esoterische Physiologie. Unsere Fakultäten, Nervensysteme und Mittler. Wie Funktioniert der Mensch aus der esoterischen Betrachtung. Praktische Übung: EInführung in die Selbstbeobachtung.', image: '/assets/sleepwalk.jpg', height: 600 },

    { day: undefined, month: '', time: '', title: 'Welt der\nRelationen', content: 'Der Mensch und seine Rolle opder Funktion in der Welt, in der Gesellschaft mit Hinblick auf seinen göttlichen Aspekt. Praktische Übung: Retrospektion.', image: '/assets/relations.jpg', height: 300, position: 'top' },

    { day: undefined, month: '', time: '', title: 'Weg und Leben\nNiveau des Wesens', content: 'Das Leben von Moment zu Moment und das Niveau des Bewusstseins. Praktische Übung: Wachsamkeit, Konzentration, falsche innere Zustände.', image: '/assets/ladder.jpg', height: 600, position: 'right bottom' },

    { day: undefined, month: '', time: '', title: 'Dekalog\nGebote Gottes', content: 'Religiöse Gebote und Werte und deren tiefere, esoterische Bedeutung. Praktische Übung: Praxis der 3 Faktoren.', image: '/assets/moses.jpg', height: 600, position: 'top' },

    { day: undefined, month: '', time: '', title: 'Fundamentale\nErziehung', content: 'Einführung in die Astrologie. Unsere Berufung und die verschiedenen Phasen in unserem Leben. Praktische Übung: Runen.', image: '/assets/urania.jpg', height: 300 },

    { day: undefined, month: '', time: '', title: 'Stammmbaum der\nReligionen', content: 'Zusammenhänge und Manifestationen der Weltreligionen. Praktische Übung: Vertiefung in das Thema Runen.', image: '/assets/hands.jpg', height: 300, position: 'left' },

    { day: undefined, month: '', time: '', title: 'Evolution\nInvolution\n& Revolution', content: 'Die Entwicklung der Menschheit. Essenzen und ihre Reise. Das auf und ab des Rades Samsara', image: '/assets/dante.jpg', height: 600 },

    { day: undefined, month: '', time: '', title: 'Tod und Geburt', content: 'Die Geburt, die Einfuhr der Seele, das Verlassen des Körpes.', image: '/assets/death.jpg', height: 600, position: 'left' },

    { day: undefined, month: '', time: '', title: "Reinkarnation\nRückkehr\n& Periodizität", content: 'Der Zyklus von Geburt, Tod und Wiedergeburt.', image: '/assets/angels.jpg', height: 600 },

    { day: undefined, month: '', time: '', title: 'Karma', content: 'Das Gesetz der Kausalität oder Ursache und Wirkung ist nicht rein mechanisch. Karma erlaubt auch Weiterentwicklung.', image: '/assets/justitia.jpg', height: 600 },

    { day: undefined, month: '', time: '', title: 'Vier Wege', content: 'Verstand, Demut und Kontrolle über den Körper sind grundlegende Themen in den Religionen. Darüber hinaus der vierte Weg des ausgeglichenen Menschen. Praktische Übung: Konzentration, Asana, Meditation.', image: '/assets/mountains.jpg', height: 300, position: 'top' },

    { day: undefined, month: '', time: '', title: 'Diagram des\nMenschen', content: 'Die verschiedenen Körper und Dimensionen. Praktische Übung: Astralreisen.', image: '/assets/diagram.jpg', height: 600, position: 'top' },

    { day: undefined, month: '', time: '', title: 'Transformation\nder Energien', content: 'Einführung in die Alchemie. Der Körper, das Labor des Alchemisten. Metabolismus oder die Fähigkeit des Korpers Masse in Energie zu wandeln und umgedreht. Praktische Übung:  Pranayama.', image: '/assets/well.jpg', height: 300 },

    { day: undefined, month: '', time: '', title: 'Alchemie', content: 'Das Arkanum AZF, eines der geheimsten Aspekte der Religion. Die Schöpfung der Seele, Geheimnisse der Ehe zwischen Mann und Frau.', image: '/assets/alchemy.jpg', height: 600 },

    { day: undefined, month: '', time: '', title: 'Elementale', content: 'Geschöpfe in der Natur, Geschichten, Fabeln und Realitäten intelligenter Prinzipen. Praktische Übung: Medizin, Pflanzen, Kontakt mit der Natur.', image: '/assets/elementals.jpg', height: 600, position: "top" },

    { day: undefined, month: '', time: '', title: 'Initiation', content: 'Die Geschichte der allgemeinen Geheimschule, ihrer Kammern, von Meistern, Schülern und Einweihungen.', image: '/assets/initiation.jpg', height: 600, position: 'top' }
]

export default () => (
    <Content>
        <Nav>
            <NavLink name="Home" to="Header" />
            <NavLink name="Einleitung" to="intro" />
            <NavLink name="Über uns" to="topic" />
            <NavLink name="Kurse" to="summary" />
            <NavLink name="Kontakt" to="Footer" />
        </Nav>

        <Header style={header}>
            <h1 style={title}>
                GNOSISTISCHE<br />
                KULTUR IN<br />
                DEUTSCHLAND
            </h1>
            <img style={{ position: 'absolute', left: '1.5em', bottom: '1.5em', height: 20 }} src="/assets/logo.png" />
        </Header>

        <Section title="Paz Inverencial!" anchor="intro">
            <p>
                Man sagt alle Weisheit auf der Welt sei einer Quelle entsprungen. Die Menscheit gab ihr viele Namen und
                Formen, wir nennen sie Gnosis.
            </p>

            <p>
                Das griechische Wort Gnosis bezieht sich auf ein Wissen, dass auf der eigenen Erfahrung beruht. Die
                Wahrheit in Konzepten zu suchen ist vergeblich, denn ein Konzept ist nur eine Idee und die Erfahrung ist
                so viel mehr als eine Idee.
            </p>

            <p>
                Gnosis ist ein inniges Erlebnis das jeglicher Konzeption oder Vermittlung trotzt, denn es ist lebendiger
                Teil des Lebens geworden. Aus diesem Grund ist Spiritualität die Frucht unserer Anstrengungen die
                Wahrheit zu kennen, und die Methodik um dies zu erreichen ist in erster Hinsicht praktischer Natur.
            </p>
        </Section>

        <Figure position="center" url="/assets/saw_plane.jpg" style={{ minHeight: '60vh' }}>
            Samael Aun Weor, Begründer der gnostischen Bewegung, widmette sein Leben dem Dienst und der Hilfe anderer, jedem und überall.
        </Figure>

        <Section title="Über uns" anchor="topic">
            <p>
                Das gnostische Prinzip, die gewonnene Erkenntnis einer Lehre, oder die Möglichkeit diese zu erlangen, wurde von Hand zu Hand getragen, von Meister zu Schüler, von Schule zu Schule, reiste durch Persien, Mesopotanien, Syrien, Indien, Palestina, Ägypten und hielt auch Einzug in pre-Kolumbianische Religionen der Nahuas, Tolteken, Zapoteken, Mayas, Chibchas, Inkas, Quechuas und vielen weiteren. Natürlich fand es den Weg auch zu uns, in unsere Zeit.
            </p>

            <p>
                Die Gnosis, mit der wir es heute zu tun haben, gehört zu keiner bestimmten Kultur und Strömung, sie ist eine spirituelle Synthese und sucht über alles die Praxis, so wie es schon die Gnosis der ersten Stunde, von der im Öffentlichkeitsbild die Rede ist, getan hatte.
            </p>

            <p>
                Wie schon im alten Buddhismus drei Aspekte galten: Buddha, der Übringer einer Lehre, Dharma, die Lehre selbst, Sangha, die spiritiuelle Gemeinde die sich gegenseitig unterstützen kann, so finden diese Ideale auch in der Gnosis Anklang, ohne Zwang und unter Berücksichtigung des privaten Lebens jeder Person.
            </p>
        </Section>

        <Quote author="Samael Aun Weor">
            Initiation ist dein Leben. Sie wird weder ver- noch gekauft. Sie ist ein leben intensiv gelebt, mit Liebe und Rechtschaffenheit.
        </Quote>

        <Section title="Kurse" anchor="summary">
            <p>
                Wir lehren öffentlich Kurse die einen Großteil der praktischen Esoterik abdecken sollten und eine Fülle von Informationen bieten die ein Leben gut und gerne positiv verändern wenn man sie in die Tat umsetzt. Wir werfen einen tiefen Blick in die menschliche Psychologie und nähern uns dem geistlichen Potenzial das in uns steckt. Jeder Kurs wird untermalt mit praktischen Übungen, darunter viele Meditations- und Entspannungstechniken. Auf Nachfrage halten wir sie auch auf Englisch und/oder Spanisch.
            </p>

            <p>
                Alle Kurse werden kostenlos gegeben, über Spenden für eventuell gemietete Räumlichkeiten freuen wir uns natürlich sehr. Bei Interesse findet Ihr unten unsere Kontakdaten.
            </p>

            <p>
                <b>Mögen alle Wesen in Frieden sein!</b>
            </p>
        </Section>



        <Figure position="top center" url="/assets/test.jpg">
            Blind folgt der Weise den Schritten der Mutter Natur. Michael Maiers Atalanta Fugiens.
        </Figure>

        <Footer day="" month="" title={'Infos und\nKontaktdaten'}>
            <p>Für weitere Informationen oder Fragen</p>
            <p>könnt ihr uns hier erreichen:</p>
            <br />
            <p>Generell: gnosis.kultur@gmail.com</p>
            <p>Berlin: emilio.vapi@libero.it</p>
            <p>Freiburg: gnosissur@gmail.com</p>
            <p>Dortmund: gnosisNRW@gmail.com</p>
        </Footer>
    </Content>
)
