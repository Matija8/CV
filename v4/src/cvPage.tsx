import { ComponentProps, ReactNode } from 'react';

export function CvPage() {
  const page1 = (
    <A4Page>
      <header
        id="section-header"
        style={{ display: 'flex', marginTop: '2rem' }}
      >
        <div>
          <h1 style={{ margin: '0 0 8px' }}>Matija Miličević</h1>
          <span
            style={{
              fontWeight: 600,
              color: 'gray',
              margin: 0,
              fontSize: 18,
            }}
          >
            Senior Frontend Engineer
          </span>
        </div>
        <div /* Spacer */ style={{ flex: '1 0 auto' }} />
        <LinksList />
      </header>

      <section id="section-work-experience">
        <SectionTitle>Experience</SectionTitle>

        <WorkExpItem
          logo={<CsLogo />}
          title="Senior Frontend Engineer"
          at={<a href="https://compstak.com/">CompStak</a>}
          duration="Jan 2024 – Present"
          stack="React, TypeScript, Meteor, PostgreSQL, MongoDB"
          descr={
            <>
              Build and maintain internal tools for the{' '}
              <a href="https://compstak.com">CompStak</a> platform. The main
              codebase is a React, Meteor, MongoDB, and PostgreSQL application.
              Use <a href="https://claude.ai">Claude.ai</a> and{' '}
              <a href="https://cursor.com">Cursor</a> to ship that work faster.
            </>
          }
        />

        <WorkExpItem
          logo={<CsLogo />}
          title="Frontend Engineer"
          at={<a href="https://compstak.com/">CompStak</a>}
          duration="May 2022 – Jan 2024"
          stack="React, TypeScript, styled-components, TanStack Query, Scala, PostgreSQL"
          descr={
            <>
              Built software for the commercial real estate industry. Maintained
              internal tools used to parse commercial real estate data, and
              added features to the{' '}
              <a href="https://compstak.com/exchange">CompStak exchange</a>.
              Added and maintained UI widgets in the company Storybook.
              Collaborated daily with product managers, designers, and other
              engineers. Worked on Scala backend features and mentored junior
              colleagues.
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
              <a href="https://www.unleash.so/">Unleash</a>
              {' (via '}
              <a href="https://team-sava.com/">Team Sava</a>
              {'), later acquired by '}
              <a href="https://www.zendesk.com/">Zendesk</a>
            </>
          }
          duration="Feb 2022 – May 2022"
          stack="Node.js, TypeScript"
          descr="Built Node.js microservices for the Unleash app that integrate third-party APIs with the rest of the application."
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
          duration="Apr 2021 – Feb 2022"
          stack="React, TypeScript, Node.js, MongoDB, Elasticsearch"
          descr={
            <>
              Built software for the real estate industry, mostly for 3D
              modeling of interiors. Developed full stack features on a React,
              Node.js, AWS, TypeScript, and MongoDB stack, including logging
              systems that track operator activity.
            </>
          }
        />
      </section>
    </A4Page>
  );

  const page2 = (
    <A4Page>
      <section
        id="section-work-experience-continued"
        style={{ marginTop: '3rem' }}
      >
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
          duration="Oct 2020 – Apr 2021"
          stack="C++, C#, Source Depot"
          descr={
            <>
              With a mentor, added functionality to C++ and C# microservices
              used in production by Microsoft PowerPoint. Aligned design
              decisions with colleagues in Sunnyvale, CA.
            </>
          }
          marginTop="0"
        />
      </section>

      <section id="section-skills" style={{ marginTop: '3rem' }}>
        <SectionTitle>Skills</SectionTitle>
        <ItemWrapper marginTop="1rem">
          <ItemBody>
            <div>
              <b>Languages: </b>{' '}
              <a href="https://www.typescriptlang.org/">TypeScript</a>,{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                JavaScript
              </a>
              {', '}
              <a href="https://www.python.org/">Python</a>,{' '}
              <a href="https://isocpp.org/">C++</a>
            </div>
            <div>
              <b>Frontend: </b> <a href="https://react.dev/">React</a>,{' '}
              <a href="https://www.meteor.com/">Meteor</a>,{' '}
              <a href="https://tanstack.com/query">TanStack Query</a>,{' '}
              <a href="https://storybook.js.org/">Storybook</a>
            </div>
            <div>
              <b>Backend and data: </b>{' '}
              <a href="https://nodejs.org/">Node.js</a>,{' '}
              <a href="https://www.postgresql.org/">PostgreSQL</a>,{' '}
              <a href="https://www.mongodb.com/">MongoDB</a>
            </div>
            <div>
              <b>AI tools: </b> <a href="https://claude.ai">Claude.ai</a>,{' '}
              <a href="https://cursor.com">Cursor</a>
            </div>
          </ItemBody>
        </ItemWrapper>
      </section>

      <section id="section-education" style={{ marginTop: '3rem' }}>
        <SectionTitle>Education</SectionTitle>

        <ItemWrapper marginTop="1rem">
          <ItemHeader
            logo={<img src="./companies/matf.gif" alt="" height="38px" />}
            title={
              <>
                Bachelor of Informatics,{' '}
                <a href="http://www.matf.bg.ac.rs/eng/">
                  Faculty of Mathematics
                </a>
                {', '}
                <a href="https://www.bg.ac.rs">University of Belgrade</a>
              </>
            }
          />
          <ItemBody>
            <Duration>Graduated in February 2023</Duration>
          </ItemBody>
        </ItemWrapper>
      </section>
    </A4Page>
  );

  return (
    <>
      {page1}
      {page2}
    </>
  );
}

function A4Page(props: ComponentProps<'div'>) {
  return (
    <div className="A4-page-outer">
      <div
        {...props}
        className="flex-col"
        style={{
          backgroundColor: 'white',
          height: '100%',
          width: '210mm',
          margin: '0 auto',
          padding: '0px 2rem 2rem',
        }}
      />
    </div>
  );
}

function CsLogo() {
  return (
    <img src="./companies/compstak.jpg" alt="company-compstak" height="38px" />
  );
}

function SectionTitle(props: ComponentProps<'h2'>) {
  return <h2 style={{ margin: '2rem 0 2rem' }} {...props} />;
}

function LinksList() {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      <li className="li-1">
        <div>📍</div> <b>Location:</b> Belgrade, Serbia
      </li>
      <li className="li-1">
        <div>📪</div>
        <b>Email:</b>
        <a href="mailto:matijanme@gmail.com">matijanme@gmail.com</a>
      </li>
      {false && (
        <li className="li-1">
          <div>🤳</div>
          <b>Phone:</b>
          <a href="tel:+381 64 992 5146">+381 64 992 5146</a>
        </li>
      )}
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
  marginTop,
}: {
  logo: ReactNode;
  title: string;
  at: ReactNode;
  duration: string;
  stack: string;
  descr: ReactNode | null;
  marginTop?: string;
}) {
  return (
    <ItemWrapper {...{ marginTop }}>
      <div style={{ display: 'flex', marginBottom: 4 }}>
        <ItemHeader
          {...{
            logo,
            title: (
              <>
                {title} at {at}
              </>
            ),
          }}
        />
      </div>
      <ItemBody>
        <Duration>{duration}</Duration>
        {!!stack && (
          <div>
            <b>Stack: </b> {stack}
          </div>
        )}
        {!!descr && (
          <div>
            <b>Responsibilities: </b>
            {descr}
          </div>
        )}
      </ItemBody>
    </ItemWrapper>
  );
}

function ItemHeader({ logo, title }: { logo: ReactNode; title: ReactNode }) {
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
      <div className="flex" style={{ alignItems: 'baseline', gap: 8 }}>
        {/* Title */}
        <h3 style={{ margin: 0 }}>{title}</h3>
      </div>
    </div>
  );
}

function ItemWrapper(
  props: ComponentProps<'article'> & { marginTop?: string },
) {
  return (
    <article style={{ marginTop: props.marginTop ?? '3rem' }} {...props} />
  );
}

function ItemBody(props: ComponentProps<'div'>) {
  return <div className="flex-col" style={{ gap: 4 }} {...props} />;
}

function Duration(props: ComponentProps<'div'>) {
  return <div style={{ color: 'gray' }} {...props} />;
}
