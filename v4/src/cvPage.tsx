import { ComponentProps, ReactNode } from 'react';

export function CvPage() {
  const content: JSX.Element = (
    <main
      style={{
        // A4 paper style
        backgroundColor: 'white',
        width: '210mm',
        minHeight: '100vh',
        margin: '0 auto',
        padding: '1px 4rem 1rem',
      }}
    >
      <header
        id="section-header"
        style={{ display: 'flex', marginTop: '2rem' }}
      >
        <div>
          <h1 style={{ margin: '0 0 8px' }}>Matija Miličević</h1>
          <span
            style={{ fontWeight: 600, color: 'gray', margin: 0, fontSize: 18 }}
          >
            {/* Full stack? Frontend? */}
            Software Engineer
          </span>
        </div>
        <div /* Spacer */ style={{ flex: '1 0 auto' }} />
        <LinksList />
      </header>

      <section id="section-work-experience">
        <SectionTitle>Experience</SectionTitle>

        <WorkExpItem
          logo={
            <img
              src="./companies/compstak.jpg"
              alt="company-compstak"
              height="38px"
            />
          }
          title="Front End Engineer"
          at={<a href="https://compstak.com/">CompStak</a>}
          duration="May 2022 - Current Employee"
          stack="React, TypeScript, styled-components💅, React Query, Scala, PostgreSQL"
          descr={
            <>
              Working on software solutions for the commercial real estate
              industry 🏗🏢. Maintaining and adding new features to internal
              tools used for parsing commercial real estate comparables. Adding
              features to the company{' '}
              <a href="https://compstak.com/exchange">real estate platform🏠</a>
              . Adding and maintaing ui widgets inside of the company storybook
              component library. Collaborating with product, designers, and
              other engineers on a daily basis, to ensure high quality. Working
              on minor Scala backend features. Mentoring junior colleagues.
            </>
          }
        />

        <WorkExpItem
          logo={
            <img
              src="./companies/unleash.jpg"
              alt="company-unleash"
              height="32px"
            />
          }
          title="Full Stack Developer"
          at={
            <>
              <a href="https://www.unleash.so/">Unleash</a> {'/ '}
              <a href="https://team-sava.com/">Team Sava</a>
            </>
          }
          duration="Feb 2022 - May 2022"
          stack="Node.js, TypeScript"
          descr={
            <>
              Working on the <a href="https://www.unleash.so">Unleash app 🚀</a>
              . Working on Node.js microservices that integrate{' '}
              <a href="https://www.unleash.so/integrations">3rd party APIs</a>{' '}
              with the rest of the application infrastructure.
            </>
          }
        />

        <WorkExpItem
          logo={
            <img
              src="./companies/insidemaps.jpg"
              alt="company-insidemaps"
              height="40px"
            />
          }
          title="Junior Software Engineer"
          at={<a href="https://www.insidemaps.com/">InsideMaps Inc</a>}
          duration="Apr 2021 - Feb 2022"
          stack="React, TypeScript, Node.js, MongoDB, Elasticsearch"
          descr={
            <>
              Working on software solutions for the real estate industry🏘️,
              mostly related to 3D modeling of enteriors. Full stack web
              development, working on a React, AngularJS (
              <a href="https://angularjs.org/">the old one 🥲</a>
              ), Node.js, AWS, TypeScript and MongoDB based infrastructure.
              Developing and maintaining features for internal tools.
              Responsible for developing logging systems📊 used to track
              operator activity. Working in an agile team with 2 week sprints.
            </>
          }
        />

        <WorkExpItem
          logo={
            <img
              src="./companies/microsoft.png"
              alt="company-microsoft"
              height="30px"
            />
          }
          title="Software Engineer Intern"
          at={<a href="https://www.microsoft.com/en-rs/mdcs">Microsoft</a>}
          duration="Oct 2020 - Apr 2021"
          stack="C++, Source Depot"
          descr={
            <>
              With the help of a mentor, added new functionality to C++/C# based
              microservices used in production by Microsoft PowerPoint.
              Communicated and adapted design decisions with colleagues from
              Sunnyvale, CA.
            </>
          }
        />
      </section>

      <section id="section-education">
        <SectionTitle>Education</SectionTitle>

        <article style={{ margin: 0, marginBottom: '2rem' }}>
          <ItemHeader
            logo={<img src="./companies/matf.gif" alt="" height="38px" />}
            title="Bachelor of informatics"
          />
          <ItemBody>
            <ItemAt>
              <span>
                <b>At: </b>
                <a href="https://www.bg.ac.rs">University of Belgrade</a> ({' '}
                <a href="http://www.matf.bg.ac.rs/eng/">
                  Faculty of Mathematics
                </a>{' '}
                )
              </span>
            </ItemAt>
            <div>Graduated in 2023</div>
          </ItemBody>
        </article>
      </section>
    </main>
  );
  return (
    <div style={{ backgroundColor: 'grey', height: '100%' }}>{content}</div>
  );
}

const SectionTitle = (props: ComponentProps<'h2'>) => (
  <h2 style={{ margin: '2.5rem 0 1rem' }} {...props} />
);

function LinksList() {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      <li className="li-1">
        <div>📍</div> <b>Location:</b> Belgrade, Serbia
      </li>
      <li className="li-1">
        <div>📪</div>
        <b>Mail:</b>
        <a href="mailto:matijanme@gmail.com">matijanme@gmail.com</a>
      </li>
      <li className="li-1">
        <div>🤳</div>
        <b>Phone:</b>
        <a href="tel:+381 64 992 5146">+381 64 992 5146</a>
      </li>
      <li className="li-1">
        <div>
          <img src="/github.svg" alt="github" />
        </div>
        <b>GitHub:</b>
        <a href="https://github.com/Matija8">github.com/Matija8</a>
      </li>
      <li className="li-1">
        <div>
          <img src="/linkedin.png" alt="linkedin" />
        </div>
        <b>LinkedIn:</b>
        <a href="https://www.linkedin.com/in/matija-milicevic/">
          linkedin.com/in/matija-milicevic
        </a>
      </li>
    </ul>
  );
}

function WorkExpItem({
  logo,
  title,
  at,
  duration,
  stack,
  descr,
}: {
  logo: ReactNode;
  title: string;
  at: ReactNode;
  duration: string;
  stack: string;
  descr: ReactNode;
}) {
  return (
    <article style={{ margin: 0, marginBottom: '2rem' }}>
      <ItemHeader {...{ logo, title }} />
      <ItemBody>
        <ItemAt>
          <span>
            <b>At: </b> {at}
          </span>
          <span style={{ color: 'gray' }}>({duration})</span>
        </ItemAt>
        <div>
          <b>Stack: </b> {stack}
        </div>
        <div>
          <b>Responsibilities: </b>
          {descr}
        </div>
      </ItemBody>
    </article>
  );
}

function ItemHeader({ logo, title }: { logo: ReactNode; title: string }) {
  return (
    <div className="flex" style={{ alignItems: 'center', gap: '8px' }}>
      {/* Logo */}
      <div
        className="flex"
        style={{
          width: '40px',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        {logo}
      </div>
      {/* Title */}
      <h3 style={{ margin: 0 }}>{title}</h3>
    </div>
  );
}

const ItemBody = (props: ComponentProps<'div'>) => (
  <div className="flex-col" style={{ gap: 4 }} {...props} />
);
const ItemAt = (props: ComponentProps<'div'>) => (
  <div style={{ display: 'flex', gap: '1rem', marginTop: '4px' }} {...props} />
);
