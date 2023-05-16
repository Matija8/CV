/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';

const Page: NextPage = () => {
  const head = (
    <Head>
      <title>Matija Miličević CV</title>
    </Head>
  );

  const content = (
    <main
      style={{
        backgroundColor: 'white',
        width: '210mm',
        minHeight: '100vh',
        margin: '0 auto',
        padding: '1rem 4rem',
      }}
    >
      {/* Full stack? Frontend? */}
      <h1>Matija Miličević - Software Engineer</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <Li>
          📍<B1>Location:</B1> Belgrade, Serbia
        </Li>
        <Li>
          📪<B1>Mail:</B1>
          <a href="mailto: matijanme@gmail.com">matijanme@gmail.com</a>
        </Li>
        <Li>
          <img src="./github.svg" alt="github icon" />
          <B1>GitHub:</B1>
          <a href="https://github.com/Matija8">github.com/Matija8</a>
        </Li>
        <Li>
          <img src="./linkedin.svg" alt="github icon" />
          <B1>LinkedIn:</B1>
          <a href="https://www.linkedin.com/in/matija-milicevic/">
            linkedin.com/in/matija-milicevic
          </a>
        </Li>
      </ul>

      <section>
        <h3>Summary</h3>
        <p>
          Diligent software engineer that mainly specializes in TypeScript,
          React & Node.js.
        </p>
      </section>

      <section>
        <h3>Experience</h3>

        <WorkExpItem {...workItems[0]} />
        <WorkExpItem {...workItems[1]} />
        <WorkExpItem {...workItems[2]} />
      </section>

      <section>
        <h3>Skills & Technologies</h3>

        <div className="flex" style={{ gap: '4rem' }}>
          <ul className="flex-col skill-ul">
            <li>TypeScript, JavaScript (ES3-ES2022)</li>
            <li>MVC Frameworks - React, Next.Js</li>
            <li>State Managment - TanStack Query, Redux</li>
            <li>Back End - Node.js, Deno.js, Express.js</li>
            <li>NoSQL - MongoDB, Elasticsearch</li>
            <li>RDBMS - PostgreSQL</li>
            <li>Unit Testing - Vitest, Jest</li>
          </ul>

          <ul className="flex-col skill-ul">
            <li>Scripting - Python, Bash, Node.js</li>
            <li>VCS - Git, GitHub/GitLab</li>
            <li>C++</li>
            <li>Java 11</li>
            <li>Design Patterns</li>
            <li>Agile Development</li>
            <li>Communication</li>
          </ul>
        </div>
      </section>

      <section>
        <h3>Education</h3>
        <a href="https://www.bg.ac.rs/en/">University of Belgrade</a> -{' '}
        <a href="http://www.matf.bg.ac.rs/eng/">Faculty of Mathematics</a>
        <p>Bachelor of Informatics: Graduated in February 2023</p>
      </section>
    </main>
  );

  return (
    <div style={{ backgroundColor: 'grey', height: '100%' }}>
      {head}
      {content}
    </div>
  );
};

function Li(
  props: React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  >,
) {
  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        margin: '8px 0',
        ...props.style,
      }}
      {...props}
    />
  );
}

function B1(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >,
) {
  return (
    <b
      style={{
        marginRight: '4px',
        ...props.style,
      }}
      {...props}
    />
  );
}

function WorkExpItem({ Companies, title }: { Companies: any; title: string }) {
  return (
    <div style={{}}>
      <h3 style={{ marginBottom: '4px' }}>{title}</h3>
      <div style={{ marginTop: '4px' }}>
        at <Companies />
      </div>
    </div>
  );
}

const workItems = [
  {
    Companies: () => (
      <>
        <a href="https://www.unleash.so/">Unleash</a> (
        <a href="https://team-sava.com/">via Team Sava</a>)
        {/* <span>
          <img
            src="./companies/unleash.jpg"
            alt="company-unleash"
            className="icon-1"
          />
        </span> */}
      </>
    ),
    title: 'Full Stack Developer',
    bodyRight: `
  Helping build the <a href="https://www.unleash.so/features">Unleash app</a> 🚀. </br>
  Working on Node.js microservices that integrate <a href="https://www.unleash.so/integrations">3rd party APIs</a>
  with the rest of the application infrastructure.`,
    duration: 'Feb 2022 - May 2022',
    companyLogo: 'unleash.jpg',
    companyLogoStyle: { height: '33px' },
  },
  {
    Companies: () => <a href="https://www.insidemaps.com/">InsideMaps Inc</a>,
    title: 'Junior Software Engineer',
    bodyRight: `
  Full stack web development, working on a React, AngularJS
  (yes, the old one), Node.js, AWS, Typescript and MongoDB based
  infrastructure. Developing and maintaining features for
  internal tools. Responsible for maintaining logging and
  profiling logic inside these tools. Working in an agile team
  with 2 week sprints.`,
    duration: 'Apr 2021 - Feb 2022',
    companyLogo: 'inside-maps.jpg',
  },
  {
    Companies: () => (
      <a href="https://www.microsoft.com/en-rs/mdcs">Microsoft</a>
    ),
    title: 'Software Engineer Intern',
    bodyRight: `
  With the help of a mentor, added new functionality to C++/C#
  based microservices used in production by Microsoft PowerPoint.
  Communicated and adapted design decisions with colleagues from
  Sunnyvale, CA.`,
    duration: 'Oct 2020 - Apr 2021',
    companyLogo: 'microsoft.png',
    companyLogoStyle: { height: '30px' },
  },
];

export default Page;
