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
        padding: '1rem 4rem 4rem',
      }}
    >
      {/* Full stack? Frontend? */}
      <section className="section-1">
        <h1>Matija Miličević - Software Engineer</h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li className="li-1">
            📍<B1>Location:</B1> Belgrade, Serbia
          </li>
          <li className="li-1">
            📪<B1>Mail:</B1>
            <a href="mailto: matijanme@gmail.com">matijanme@gmail.com</a>
          </li>
          <li className="li-1">
            <img src="./github.svg" alt="github icon" />
            <B1>GitHub:</B1>
            <a href="https://github.com/Matija8">github.com/Matija8</a>
          </li>
          <li className="li-1">
            <img src="./linkedin.svg" alt="github icon" />
            <B1>LinkedIn:</B1>
            <a href="https://www.linkedin.com/in/matija-milicevic/">
              linkedin.com/in/matija-milicevic
            </a>
          </li>
        </ul>
      </section>

      <section className="section-1">
        <h2 className="section-title">Summary</h2>
        <p>
          Diligent software engineer that mainly specializes in TypeScript,
          React & Node.js.
        </p>
      </section>

      <section className="section-1">
        <h2 className="section-title">Experience</h2>

        {workItems.map((item, idx) => (
          <WorkExpItem key={idx} {...item} />
        ))}
      </section>

      <section className="section-1">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="flex" style={{ gap: '4rem' }}>
          <ul className="flex-col skill-ul">
            <li className="li-2">TypeScript, JavaScript (ES3-ESNext)</li>
            <li className="li-2">Ui Frameworks - React, Next.js, Meteor.js</li>
            <li className="li-2">State Managment - TanStack Query, Redux</li>
            <li className="li-2">Back End - Node.js, Deno.js, Express.js</li>
            <li className="li-2">
              Testing - Vitest, Jest, React Testing Library, Storybook
            </li>
            <li className="li-2">NoSQL - MongoDB, Elasticsearch</li>
            <li className="li-2">RDBMS - PostgreSQL</li>
          </ul>

          <ul className="flex-col skill-ul">
            <li className="li-2">Scripting - Python, Bash</li>
            <li className="li-2">VCS - Git, GitHub/GitLab</li>
            <li className="li-2">Docker</li>
            <li className="li-2">C++, Java, Go</li>
            <li className="li-2">Design Patterns</li>
            <li className="li-2">Agile Development</li>
            <li className="li-2">Communication, ChatGpt prompting</li>
          </ul>
        </div>
      </section>

      <section className="section-1">
        <h2 className="section-title">Education</h2>
        <div className="flex" style={{ gap: '6px' }}>
          <div className="flex-col">
            <span>
              Bachelor of Informatics -{' '}
              <a href="http://www.matf.bg.ac.rs/eng/">Faculty of Mathematics</a>{' '}
              (<a href="https://www.bg.ac.rs/en/">University of Belgrade</a>)
            </span>
            <span>Graduated in February 2023</span>
          </div>
        </div>
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

function WorkExpItem({
  Companies,
  Logo,
  title,
}: {
  Companies: any;
  Logo: any;
  title: string;
}) {
  const logoDiv = (
    <div
      className="flex"
      style={{
        width: '2rem',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {Logo && <Logo />}
    </div>
  );
  return (
    <div style={{ margin: 0, marginBottom: '2rem' }}>
      <div className="flex" style={{ alignItems: 'center', gap: '8px' }}>
        {logoDiv}
        <h3 style={{ margin: 0 }}>{title}</h3>
      </div>
      <div style={{ marginTop: '4px' }}>
        at <Companies />
      </div>
    </div>
  );
}

const workItems = [
  {
    title: 'Front End Engineer',
    Companies: () => (
      <>
        <a href="https://compstak.com/">CompStak</a>
      </>
    ),
    Logo: () => (
      <img
        src="./companies/compstak.jpg"
        alt="company-compstak"
        height="32px"
      />
    ),
  },
  {
    Companies: () => (
      <>
        <a href="https://www.unleash.so/">Unleash</a> (via{' '}
        <a href="https://team-sava.com/">Team Sava</a>)
      </>
    ),
    Logo: () => (
      <img src="./companies/unleash.jpg" alt="company-unleash" height="24px" />
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
    Logo: () => (
      <img
        src="./companies/insidemaps.jpg"
        alt="company-inside-maps"
        height="32px"
      />
    ),
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
    Logo: () => (
      <img
        src="./companies/microsoft.png"
        alt="company-microsoft"
        height="24px"
      />
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
