import React from 'react'
import data from '../store'
import { Content, Lightbox, Grid, GridItem, Nav, NavLink, Header, Section, Figure, Quote, Footer } from '../components'

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

export default class extends React.Component {
    state = { item: undefined }
    onItemClicked = item => this.setState({ item })
    render() {
        return (
            <Content>
                <Lightbox item={this.state.item} />

                <Nav>
                    <NavLink name="Home" to="Header" />
                    <NavLink name="Einleitung" to="intro" />
                    <NavLink name="Über uns" to="about" />
                    <NavLink name="Kurse" to="courses" />
                    <NavLink name="Kontakt" to="Footer" />
                </Nav>

                <Header style={header}>
                    <h1 style={title}>
                        GNOSISTISCHE<br />
                        KULTUR IN<br />
                        DEUTSCHLAND
                    </h1>
                    <img
                        style={{ position: 'absolute', left: '1.5em', bottom: '1.5em', height: 20 }}
                        src="/assets/logo.png"
                    />
                </Header>

                <Section title="Paz Inverencial!" anchor="intro">
                    <p>
                        Man sagt alle Weisheit auf der Welt sei einer Quelle entsprungen. Die Menscheit gab ihr viele
                        Namen und Formen, wir nennen sie Gnosis.
                    </p>

                    <p>
                        Das griechische Wort Gnosis bezieht sich auf ein Wissen, dass auf der eigenen Erfahrung beruht.
                        Die Wahrheit in Konzepten zu suchen ist vergeblich, denn ein Konzept ist nur eine Idee und die
                        Erfahrung ist so viel mehr als eine Idee.
                    </p>

                    <p>
                        Gnosis ist ein inniges Erlebnis das jeglicher Konzeption oder Vermittlung trotzt, denn es ist
                        lebendiger Teil des Lebens geworden. Aus diesem Grund ist Spiritualität die Frucht unserer
                        Anstrengungen die Wahrheit zu kennen, und die Methodik um dies zu erreichen ist in erster
                        Hinsicht praktischer Natur.
                    </p>
                </Section>

                <Figure position="center" url="/assets/saw_plane.jpg" style={{ minHeight: '60vh' }}>
                    Samael Aun Weor, Begründer der gnostischen Bewegung, widmette sein Leben dem Dienst und der Hilfe
                    anderer, jedem und überall.
                </Figure>

                <Section title="Über uns" anchor="about">
                    <p>
                        Das gnostische Prinzip, die gewonnene Erkenntnis einer Lehre, oder die Möglichkeit diese zu
                        erlangen, wurde von Hand zu Hand getragen, von Meister zu Schüler, von Schule zu Schule, reiste
                        durch Persien, Mesopotanien, Syrien, Indien, Palestina, Ägypten und hielt auch Einzug in
                        pre-Kolumbianische Religionen der Nahuas, Tolteken, Zapoteken, Mayas, Chibchas, Inkas, Quechuas
                        und vielen weiteren. Natürlich fand es den Weg auch zu uns, in unsere Zeit.
                    </p>

                    <p>
                        Die Gnosis, mit der wir es heute zu tun haben, gehört zu keiner bestimmten Kultur und Strömung,
                        sie ist eine spirituelle Synthese und sucht über alles die Praxis, so wie es schon die Gnosis
                        der ersten Stunde, von der im Öffentlichkeitsbild die Rede ist, getan hatte.
                    </p>

                    <p>
                        Wie schon im alten Buddhismus drei Aspekte galten: Buddha, der Übringer einer Lehre, Dharma, die
                        Lehre selbst, Sangha, die spiritiuelle Gemeinde die sich gegenseitig unterstützen kann, so
                        finden diese Ideale auch in der Gnosis Anklang, ohne Zwang und unter Berücksichtigung des
                        privaten Lebens jeder Person.
                    </p>
                </Section>

                <Quote author="Samael Aun Weor">
                    Initiation ist dein Leben. Sie wird weder ver- noch gekauft. Sie ist ein leben intensiv gelebt, mit
                    Liebe und Rechtschaffenheit.
                </Quote>

                <Section title="Kurse" anchor="courses">
                    <p>
                        Wir lehren öffentlich Kurse die einen Großteil der praktischen Esoterik abdecken sollten und
                        eine Fülle von Informationen bieten die ein Leben gut und gerne positiv verändern wenn man sie
                        in die Tat umsetzt. Wir werfen einen tiefen Blick in die menschliche Psychologie und nähern uns
                        dem geistlichen Potenzial das in uns steckt. Jeder Kurs wird untermalt mit praktischen Übungen,
                        darunter viele Meditations- und Entspannungstechniken. Auf Nachfrage halten wir sie auch auf
                        Englisch und/oder Spanisch.
                    </p>

                    <p>
                        Alle Kurse werden kostenlos gegeben, über Spenden für eventuell gemietete Räumlichkeiten freuen
                        wir uns natürlich sehr. Bei Interesse findet Ihr unten unsere Kontakdaten.
                    </p>

                    <p>
                        <b>Mögen alle Wesen in Frieden sein!</b>
                    </p>
                </Section>

                <Grid data={data} control={GridItem} onItemClicked={this.onItemClicked} />

                <Footer title={'Infos und\nKontaktdaten'}>
                    <p>Für weitere Informationen oder Fragen</p>
                    <p>könnt ihr uns hier erreichen:</p>
                    <br />
                    <p>Generell: gnosis.kultur@gmail.com</p>
                    <p>Berlin: </p>
                    <p>Freiburg: gnosissur@gmail.com</p>
                    <p>Wuppertal: gnosisNRW@gmail.com</p>
                    <p>Leipzig: </p>
                </Footer>
            </Content>
        )
    }
}
