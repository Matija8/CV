import type { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <div className="A4">
      <header className="flex" style={{ justifyContent: 'space-between' }}>
        <div className="flex-col" style={{ alignItems: 'center' }}>
          <h1 className="margin-0">Matija Miličević</h1>
          <h3
            style={{
              fontWeight: 600,
              color: 'gray',
              fontStyle: 'italic',
              margin: 0,
            }}
          >
            Software Engineer
          </h3>
        </div>
        <div
          className="flex-item-float-right flex"
          style={{ alignItems: 'flex-end', gap: '0.5rem' }}
        >
          <address className="flex-col">
            <span className="flex-center-align">
              <img
                src="./assets/map-marker.svg"
                alt="location"
                className="icon-1"
              />
              Belgrade, Serbia
            </span>
            <span className="flex-center-align">
              <img src="./assets/github.svg" alt="github" className="icon-1" />
              <a href="https://github.com/Matija8">github.com/Matija8</a>
            </span>
            <span className="flex-center-align">
              <img
                src="./assets/linkedin.svg"
                alt="linkedin"
                className="icon-1"
              />
              <a href="https://www.linkedin.com/in/matija-milicevic/">
                linkedin.com/in/matija-milicevic
              </a>
            </span>
            <span className="flex-center-align">
              <img
                src="./assets/cellphone.svg"
                alt="phone"
                className="icon-1"
              />
              <a href="tel:+381 64 992 5146">+381 64 992 5146</a>
            </span>
            <span className="flex-center-align">
              <img src="./assets/email.svg" alt="email" className="icon-1" />
              <a href="mailto: matijanme@gmail.com">matijanme@gmail.com</a>
            </span>
          </address>
        </div>
      </header>
      <main>
        <section id="section-work-experience">
          <h2 className="section-heading">Work Experience</h2>
          <template data-work-exp-item />
        </section>
        <section id="section-education">
          <h2 className="section-heading">Education</h2>
          <article className="work-exp-whole-item">
            <div className="work-exp-header" style={{ margin: 0 }}>
              <div className="work-exp-company-logo-container">
                <div
                  className="work-exp-company-logo"
                  style={{
                    backgroundImage: 'url("./assets/matf.gif")',
                    height: '39px',
                  }}
                />
              </div>
              <h3>Bachelor of informatics</h3>
            </div>
            <div className="work-exp-body">
              <div className="work-exp-body-left">
                <a href="https://www.bg.ac.rs/en/">University of Belgrade</a>
                <a href="http://www.matf.bg.ac.rs/eng/">
                  Faculty of Mathematics
                </a>
              </div>
              <div>
                <p className="margin-0">2015 - TBC</p>
                <p className="margin-0">Belgrade, Serbia</p>
              </div>
            </div>
          </article>
        </section>
        <section id="section-skills">
          <h2 className="section-heading">Skills &amp; Technologies</h2>
          <div className="flex">
            <ul className="flex-col skill-ul">
              <li>ES3-ES6 JavaScript, TypeScript</li>
              <li>MVC Frameworks - React, Angular</li>
              <li>State Managment - RxJS, Redux</li>
              <li>Back End - Node.js, Express.js</li>
              <li>NoSQL - MongoDB, Elasticsearch</li>
              <li>RDBMS - Postgres, SQL</li>
              <li>Unit Testing - Jest</li>
            </ul>
            <ul className="flex-col skill-ul">
              <li>C++ - STL, Qt5</li>
              <li>Scripting - Python, Bash</li>
              <li>Java 11</li>
              <li>VCS - Git, Github/lab, SourceDepot</li>
              <li>Design Patterns</li>
              <li>Agile Development</li>
              <li>Communication</li>
            </ul>
          </div>
        </section>
        <section id="section-projects">
          <h2 className="section-heading">Projects</h2>
          <p className="margin-left-1">
            <b>Mail client and server (Jun 2020)</b> - Implemented a gmail clone
            in a team with 4 colleagues. Team role was to lead the front end
            part of the team, synchronize message streams and do general client
            side programming. Technologies used on the client were Angular 9,
            RxJS and Angular Material. Node.js and postgres with TypeORM were
            used on the server (
            <a href="https://github.com/Matija8/Post.ar">repo</a>).
          </p>
          <p className="margin-left-1">
            <b>Minesweeper (Jan 2020)</b> - Project for a JavaScript course held
            by the Levi9 company. Project consists of 3 parts: 1) Vanilla JS
            video game (minesweeper); 2) Node.js + MongoDB server for storing
            high scores; 3) React SPA leaderboard for displaying the high scores
            (<a href="https://github.com/Matija8/Js-Minesweeper">repo</a>).
          </p>
          <p className="margin-left-1">
            <b>Side-scroller video game (Jan 2018)</b> - Computer graphics
            course project. Written in C++, using OpenGL for graphics rendering.
            The goal of the game is to reach the last platform (
            <a href="https://github.com/Matija8/Sidescrolling-platform-video-game">
              repo
            </a>
            ).
          </p>
        </section>
      </main>
    </div>
  );
};

export default Page;
