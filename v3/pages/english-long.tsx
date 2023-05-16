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
        padding: '4rem',
      }}
    >
      {/* Full stack? Frontend? */}
      <h1>Software Engineer</h1>
      <h2>Matija Miličević</h2>
      <ul style={{ listStyle: 'none', padding: '4px' }}>
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
          Diligent software engineer with 3+ years of experience in commercial
          application development. Mainly specilazies in TypeScript, React &
          Node.js.
        </p>
      </section>

      <section>
        <h3>Experience</h3>

        <WorkExpItem {...workItems[0]} />
        <WorkExpItem {...workItems[1]} />
        <WorkExpItem {...workItems[2]} />
      </section>

      <section>
        <h3>Skills/Technologies</h3>
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
        margin: '8px',
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

function WorkExpItem({ companies, title }: { companies: any; title: string }) {
  return (
    <div style={{ margin: '16px' }}>
      <h3 style={{ marginBottom: '4px' }}>{title}</h3>
      <h5 style={{ margin: '4px' }}>
        at{' '}
        {typeof companies === 'function'
          ? companies()
          : companies.map((cmpn) => (
              <a href={cmpn.href} key={cmpn.href}>
                {cmpn.title}
              </a>
            ))}
      </h5>
    </div>
  );
}

const workItems = [
  {
    companies: () => (
      <>
        <a href="https://www.unleash.so/">Unleash</a> (
        <a href="https://team-sava.com/">via Team Sava</a>)
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
    companies: () => <a href="https://www.insidemaps.com/">InsideMaps Inc</a>,
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
    companies: () => (
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
