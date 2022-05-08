import { NextPage } from 'next';
import BioCard from 'components/BioCard';
import Layout from 'components/Layout';
import SectionTitle from 'components/SectionTitle';
import feBio from 'data/fe_bio.json';
import seriesInfo from 'data/series_info.json';

const HomePage: NextPage = () => {
  return (
    <Layout
      heroTitle='Fire Emblem History'
      heroSubtitle='Learn Everything About Fire Emblem'
      heroImage='https://images4.alphacoders.com/860/860234.jpg'
    >
      <section className='intro'>
        <div className='intro_text'>
          <SectionTitle text='Intro' />
          <div className='intro_table'>
            {feBio &&
              feBio.map((item, index) => (
                <div className='intro_table_row' key={index}>
                  <div className='title'>{item.title}:</div>
                  <div className='body'>{item.body}</div>
                </div>
              ))}
          </div>
          <p>
            <strong>Fire Emblem</strong> is a fantasy tactical role-playing game
            franchise developed by Intelligent Systems and published by
            Nintendo. First produced and published for the Famicom in 1990, the
            series currently consists of sixteen core entries and four spinoffs.
            Gameplay revolves around the tactical movement of characters across
            grid-based environments, while incorporating a story and characters
            similar to traditional role-playing video games.
          </p>
          <p>
            A notable aspect of gameplay is the permanent death of characters in
            battle, removing them from the rest of the game when they are
            defeated. In newer games, from Fire Emblem: New Mystery of the
            Emblem onwards, players get to choose between Classic Mode, in which
            fallen characters remain dead, or Casual Mode, in which fallen
            characters are revived for the next battle. The series title refers
            to the Fire Emblem, a recurring element in the series that is
            usually portrayed as a royal weapon or shield representing the power
            of war and dragons. The development of the first game began as a
            dōjin project by Shouzou Kaga and three other developers. Its
            success prompted the development of further games in the series.
            Kaga headed the development of each entry until the release of
            Thracia 776, when he left Intelligent Systems and founded his game
            studio to develop{' '}
            <a
              href='https://en.wikipedia.org/wiki/Tear_Ring_Saga'
              target={'_blank'}
              rel='noreferrer'
            >
              Tear Ring Saga
            </a>{' '}
            .
          </p>
          <p>
            No games in the series were released outside of Japan until two
            characters, Marth and Roy, were included as playable characters in
            the 2001 fighting game Super Smash Bros. Melee. Their popularity, as
            well as the international success of the turn-based Advance Wars,
            eventually convinced Nintendo to release future games in Western
            territories, starting with the seventh game The Blazing Blade under
            the title Fire Emblem in 2003. Many games in the series have sold
            well despite a decline during the 2000s, which resulted in the
            series near-cancellation, a fate that was reversed with the
            unprecedented commercial success of Fire Emblem Awakening.
            Individual entries have generally been praised, the series as a
            whole has been lauded for its gameplay, and it is frequently cited
            as the seminal series in the tactical role-playing genre, codifying
            various gameplay elements that would come to define the genre.
            Characters from multiple games have also been included in crossovers
            with other video game franchises, including the aforementioned Super
            Smash Bros. series.
          </p>
        </div>
      </section>
      <section>
        <SectionTitle text='Games' />
        <p>
          There are currently sixteen games in the core Fire Emblem series, of
          which thirteen have been original games and three have been remakes.
        </p>
        <p>
          The first entry in the series,{' '}
          <a
            href='https://en.wikipedia.org/wiki/Fire_Emblem:_Shadow_Dragon_and_the_Blade_of_Light'
            target={'_blank'}
            rel='noreferrer'
          >
            Shadow Dragon and the Blade of Light
          </a>{' '}
          , was released in 1990 for the Japanese Famicom. A second game for the
          Famicom, Fire Emblem Gaiden, was released in 1992. It is known for
          having unusual mechanics compared to the rest of the series, such as
          dungeon exploration. It takes place in a similar timeframe as Shadow
          Dragon and the Blade of Light, but on a different continent. In 1994,
          Mystery of the Emblem was released for the Super Famicom, containing
          both a remake of Shadow Dragon and the Blade of Light and a sequel of
          the first game. Two more games were released for the Super Famicom in
          1996 and 1999 respectively: Genealogy of the Holy War{' '}
          <a
            href='https://en.wikipedia.org/wiki/Fire_Emblem:_Genealogy_of_the_Holy_War'
            target={'_blank'}
            rel='noreferrer'
          >
            Genealogy of the Holy War
          </a>{' '}
          and{' '}
          <a
            href='https://en.wikipedia.org/wiki/Fire_Emblem:_Thracia_776'
            target={'_blank'}
            rel='noreferrer'
          >
            Thracia 776
          </a>{' '}
          .
        </p>
        <p>
          The next entry released was The Binding Blade in 2002 for the Game Boy
          Advance. A prequel to The Binding Blade, The Blazing Blade, was
          released for the Game Boy Advance the following year. It was released
          overseas under the title Fire Emblem in 2003 in North America and 2004
          in Europe, becoming the first official release of the Fire Emblem
          series in these regions. The final entry for the Game Boy Advance, The
          Sacred Stones, was released in 2004 in Japan, and in 2005 in North
          America and Europe.
        </p>
      </section>
      <section className='game_year_list'>
        <SectionTitle text='Release List' />
        <div className='grid'>
          {seriesInfo &&
            seriesInfo.map((item, index) => (
              <BioCard
                key={index}
                title={item.title}
                releasedAt={item.releasedAt}
                image={item.image}
              />
            ))}
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
