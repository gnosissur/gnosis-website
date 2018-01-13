import React from 'react'
import { hot } from 'react-hot-loader'
import data from '../store'
import { Content, Lightbox, Grid, GridItem, Nav, NavLink, Header, Section, Figure, Quote, Footer } from './index'

const header = {
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `url(${require('../assets/stars.jpg')})`,
}

const title = {
    fontFamily: '"Gotham-Medium", sans-serif',
    textTransform: 'uppercase',
    textAlign: 'left',
    fontSize: '2em',
    fontWeight: 200,
    color: 'white',
    padding: 30,
}

const link = {
    paddingLeft: 10,
    height: 26,
    verticalAlign: 'middle',
}

class App extends React.Component {
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
                        src={require('../assets/logo.png')}
                    />
                </Header>

                <Section title="Paz Inverencial!" anchor="intro">
                    <p>
                        Jedes Studium der Weltphilosophien und Religionen zeigt auf ähnliche Prinzipien, Themen und
                        Symbole. Dies ist kein Zufall: Die allgegenwärtige Symbolik und Absicht der Welttraditionen
                        stammt aus einer Quelle deren wahre Gestalt und Bedeutung durch das schlafende Bewusstsein nur
                        schemenhaft wahrgenommen wird. Darum kommen Boten um die eine wahre Quelle zu klären: Boten wie
                        Buddha, Jesus, Quetzalcoatl, Krishna, Moses, Fu Xi und viele mehr: sie alle lehrten Gnosis,
                        angepasst an die Bedürfnisse der Zeit und des Ortes.
                    </p>

                    <p>
                        Das griechische Wort Gnosis bezieht sich auf Wissen das durch die Erfahrung erwachten
                        Bewusstseins erworben wurde, im Gegensatz zu der Erkenntnis die uns gesagt oder and die geglaubt
                        wird. Gnosis ist universell und kann den Menschen von seinen Leiden befreien. Es ist eine
                        bewusste, experimentelle Erfahrung. Ein gnostischer Student versucht die eigene direkte
                        Erfahrung der Wahrheit zu erwerben indem das Bewusstsein geweckt wird und die Schleier der
                        Wahrnehmung beseitigt werden.
                    </p>
                </Section>

                <Figure position="center" url={require('../assets/saw_plane.jpg')} style={{ minHeight: '60vh' }}>
                    Samael Aun Weor, Begründer der gnostischen Bewegung, widmette sein Leben dem Dienst und der Hilfe
                    anderer, jedem und überall.
                </Figure>

                <Section title="Über uns" anchor="about">
                    <p>
                        Das gnostische Prinzip, die gewonnene Erkenntnis einer Lehre, oder die Möglichkeit diese zu
                        erlangen, wurde von Hand zu Hand getragen, von Meister zu Schüler, von Schule zu Schule, reiste
                        durch Persien, Mesopotanien, Syrien, Indien, Palestina, Ägypten und hielt auch Einzug in
                        pre-Kolumbianische Religionen der Nahuas, Tolteken, Zapoteken, Mayas, Chibchas, Inkas, Quechuas
                        und vielen weiteren. Natürlich fand es den Weg auch in unsere Zeit.
                    </p>

                    <p>
                        Die Gnosis, mit der wir es heute zu tun haben, gehört zu keiner bestimmten Kultur, sie ist eine
                        spirituelle Synthese und sucht über alles die Praxis, so wie es schon die Gnosis der ersten
                        Stunde, von der im Öffentlichkeitsbild die Rede ist, getan hatte.
                    </p>

                    <p>
                        Wie schon im alten Buddhismus drei Aspekte galten: Buddha, der Übringer einer Lehre, Dharma, die
                        Lehre selbst, Sangha, die spiritiuelle Gemeinde die sich gegenseitig unterstützen kann, so
                        finden diese Ideale auch heute Anklang, ohne Zwang und unter Berücksichtigung des privaten
                        Lebens jeder Person.
                    </p>
                </Section>

                <Quote author="Samael Aun Weor">
                    Initiation ist dein Leben. Sie wird weder ver- noch gekauft. Sie ist ein leben intensiv gelebt, mit
                    Liebe und Rechtschaffenheit.
                </Quote>

                <Section title="Kurse" anchor="courses">
                    <p>
                        Wir lehren öffentlich Kurse die einen Großteil der praktischen Esoterik abdecken sollten und
                        eine Fülle von Informationen bieten die ein Leben gut und gerne positiv verändern, wenn man sie
                        in die Tat umsetzt. Wir werfen einen tiefen Blick in die menschliche Psychologie und nähern uns
                        dem geistlichen Potenzial das in uns steckt. Jeder Kurs wird untermalt mit praktischen Übungen,
                        darunter viele Meditations- und Entspannungstechniken. Auf Nachfrage halten wir sie auch auf
                        Englisch und/oder Spanisch. Diese Kurse bilden das Fundament für die <i>Möglichkeit</i> der
                        Initiation.
                    </p>

                    <p>
                        Alle Kurse werden kostenlos gegeben, über Spenden für eventuell gemietete Räumlichkeiten freuen
                        wir uns natürlich sehr. Bei Interesse findet Ihr unten unsere Kontaktdaten.
                    </p>

                    <p>Es werden unter anderem folgende Themen behandelt:</p>
                </Section>

                <Grid data={data} component={GridItem} onItemClicked={this.onItemClicked} />

                <Footer day="+" title={'Infos und\nKontaktdaten'}>
                    <p>Für weitere Informationen oder Fragen</p>
                    <p>könnt ihr uns hier erreichen:</p>
                    <br />
                    <p>
                        Deutschland: <a href="mailto:gnosis.kultur@gmail.com">gnosis.kultur@gmail.com</a>
                    </p>
                    <p>
                        Berlin: <a href="mailto:gnosisber@gmail.com">gnosisber@gmail.com</a>
                    </p>
                    <p>
                        Freiburg: <a href="mailto:gnosissur@gmail.com">gnosissur@gmail.com</a>&nbsp;
                        <a href="http://www.facebook.com/gnosissur">
                            <img style={link} src={require('../assets/fb.png')} />
                        </a>
                    </p>
                    <p>
                        Wuppertal: <a href="mailto:gnosisNRW@gmail.com">gnosisNRW@gmail.com</a>&nbsp;
                        <a href="http://www.facebook.com/gnosisNRW">
                            <img style={link} src={require('../assets/fb.png')} />
                        </a>
                    </p>
                    <p>
                        Leipzig: <a href="mailto:gnosisleipzig@gmail.com">gnosisleipzig@gmail.com</a>
                    </p>
                </Footer>
            </Content>
        )
    }
}

export default hot(module)(App)
