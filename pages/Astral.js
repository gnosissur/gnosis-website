import React from 'react';
import { Page, Nav, NavLink, Header, Section, Figure, Quote, Footer } from '../components';

export default () => (
    <Page>

        <Nav>
            <NavLink name="Home" to="Header" />
            <NavLink name="Einleitung" to="intro" />
            <NavLink name="Klartraum" to="topic" />
            <NavLink name="Vortrag" to="summary" />
            <NavLink name="Wann/Wo" to="Footer" />
        </Nav>

        <Header title={"Wunder\nder Nacht"}>
            Oder, wie der Traum<br/>
            Kenntnisse von höheren Welten vermittelt
        </Header>

        <Section title="Einleitung" anchor="intro">

            <p>Müde fallen die Augenlider zu, die letzten Gedanken des Tages schwirren durch den Kopf, langsam aber sicher schwindet die Anteilnahme und die Nacht nimmt ihren Lauf. Am Morgen bleiben nur ein paar wirre Fragmente. Wir nennen sie Träume und schenken ihnen in der Regel eher wenig Beachtung. Ohne es zu merken verschenken wir so nahezu die Hälfte unseres Lebens.</p>

            <p>Hin und wieder träumen wir <i>anders</i>. In solchen Nächten scheinen wir <i>bewusster</i> zu sein, alles ist <i>realer</i>. In seltenen Fällen gibt sich ein Traum so echt, dass es fast unmöglich ist ihn von der gewohnten Realität zu trennen. Und auch wer eine solche Erfahrung nie gemacht hat kennt zumindest den "Falltraum," der wahr genug ist um dem Körper einen gehörigen Schreck einzuflößen.</p>

            <p>Vielleicht schwant uns dann, dass der Traum Geheimnisse birgt. Geheimnisse die von Menschen und Kulturen lange vor unserer Zeit studiert wurden. Man sprach von einem Yoga des Traumes, ausserkörperlichen Erfahrungen, und bis heute sind uns Mythen und Geschichten geläufig in denen Menschen schier unglaubliches erfuhren.</p>

        </Section>

        <Figure
            position="center"
            url="/assets/flyingmonks2.jpg">
            Den Körper mit dem die Seele des Nachts auf Reisen geht nennen die Buddhisten <i>kama rupa</i> (sanskrit) oder <i>rmi-lam-gyi-lus</i> (tibetisch für "Traumkörper")
        </Figure>

        <Section title="Was ist ein Klartraum" anchor="topic">

            <p>Den Zustand in dem der Träumer <i>versteht</i> sich innerhalb eines Traumes zu befinden nennt man im Westen <i>Klartraum</i>. Trotz dieser Einsicht ist der Träumer mit einer Welt konfrontiert die objektiv <i>wirklich</i> ist, oder scheint. Er bewegt sich in ihr, fühlt, sieht, riecht, schmeckt und hört, wie im wirklichen Leben. Der Träumer beginnt auf Reisen zu gehen, erforscht und erkundet, fliegt, geht durch Wände, stößt auf Wesen oder andere Personen, erhält Botschaften. Über allem aber gewinnt er Einblick in eine bisher unbekannte, neue Welt.</p>

            <p>In Wirklichkeit ist Astralprojektion, wie es in den Mysterienschulen des Westens genannt wird, ein natürliches und einfaches Phänomen. Im Grunde tut es jeder. Den Körper mit dem die Seele des Nachts auf Reisen geht nennen die Buddhisten <i>kama rupa</i> (sanskrit) oder <i>rmi-lam-gyi-lus</i> (tibetisch für "Traumkörper"). Den Unterschied zwischen einer bewusst gelebten Astralprojektion und einem herkömmlichen Traum macht das Bewusstsein.</p>

        </Section>

        <Quote author="Padmasambhava">
            Trainiere noch wärend des Tages, betrachte deine Wahrnehmungen als wären sie Träume.
        </Quote>

        <Section title="Ziele des Vortrages" anchor="summary">
            <p>Viele Menschen des Westens gehen von psychologischen Vorstellungen über das Traumgeschehen aus. Später, wenn es ihnen mehr um den Gebrauch der Träume für ihr spirituelles Leben geht, richten sie ihr Augenmerk meist mehr auf Inhalt und Bedeutung der Träume. Selten wird nach der Natur des Träumens selbst gefragt. Tut man es aber, so stößt man auf geheimnisvolle Prozesse, die nicht nur unserem Traumleben, sondern unserer gesamten Existenz zugrunde liegen.</p>

            <p>Der Vortrag zum Thema will die Ursachen erforschen, Mittel und Wege näherbringen mit denen die Nacht erschlossen werden kann. Es werden grundlegende Praktiken und Hinweise gelehrt die jedem behilflich sein können.</p>
        </Section>

        <Figure
            position="bottom left"
            url="/assets/Michael_Lukas_Leopold_Willmann_001.jpg">
            In einer Traumvision erblickt Jakob laut der biblischen Erzählung eine Leiter. Auf ihr sieht er Engel, die auf- und niedersteigen. Nach dem Erwachen nennt Jakob den Platz Bet-El (Haus Gottes), bzw. Pforte des Himmels.
        </Figure>

        <Footer day=".5" month="nov" title={"Vortrag im\nHaus am\nSchöneberg,\nFreiburg"}>
            <p>Klarträume, Astralreisen, Traumyoga</p>
            <p>Was ist es, <i>wie</i> kann man es erfahren</p>
            <hr />
            <p>14:40 - 17:00 Uhr, Waldraum</p>
            <p>Kontakt: gnosissur@gmail.com</p>
            <p>Eintritt kostenlos</p>
        </Footer>

    </Page>
)
