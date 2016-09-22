import React from 'react';
import { Page, Nav, NavLink, Header, Section, Figure, Quote, Footer } from '../components';

export default () => (
    <Page>

        <Nav>
            <NavLink name="Home" to="Header" />
            <NavLink to="Einleitung" />
            <NavLink to="Vertiefung" />
            <NavLink to="Resumen" />
            <NavLink name="Wann/Wo" to="Footer" />
        </Nav>

        <Header title={"Wunder\nder Nacht"}>
            Wie der Traum zum Mittel der <br/>
            eigenen Kenntnis wird <br/>
            und Türen öffnet zu unvermuteten Welten
        </Header>

        <Section title="Einleitung">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Section>

        <Figure
            url="http://67.media.tumblr.com/7c43f14dd42f730cbdbb1ef17b85d484/tumblr_o9no1rhqnj1r3fkjno1_1280.jpg" />

        <Section title="Vertiefung">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Section>

        <Quote author="Padmasambhava">
            During the daytime, you should train in regarding your perceptions as being dreams.
        </Quote>

        <Section title="Resumen">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Section>

        <Figure
            url="https://upload.wikimedia.org/wikipedia/commons/4/4a/Michael_Lukas_Leopold_Willmann_001.jpg"
            position="bottom" />

        <Footer day="15" month="okt" title={"Vortrag im\nHaus am\nSchöneberg,\nFreiburg"}>
            <p>Um 19 Uhr, Raum 13</p>
            <p>Anmeldung: gnosissur@gmail.com</p>
            <p>Eintritt kostenlos</p>
        </Footer>

    </Page>
)
