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
          logo={<CsLogo />}
          title="Senior Front-End Engineer"
          at={<a href="https://compstak.com/">CompStak</a>}
          duration="Jan 2024 - Current Employee"
          stack=""
          descr={null}
          marginTop="0"
        />

        <WorkExpItem
          logo={<CsLogo />}
          title="Front-End Engineer"
          at={<a href="https://compstak.com/">CompStak</a>}
          duration="May 2022 - Jan 2024"
          stack="React, TypeScript, styled-components💅, React Query, Scala, PostgreSQL"
          descr={
            <>
              Working on software solutions for the commercial real estate
              industry 🏗🏢. Maintaining and adding new features to internal
              tools used for parsing commercial real estate data. Adding
              features to the company{' '}
              <a href="https://compstak.com/exchange">real estate platform🏠</a>
              . Adding and maintaining ui widgets inside of the company
              storybook component library. Collaborating with product,
              designers, and other engineers on a daily basis, to ensure high
              quality. Working on minor Scala backend features. Mentoring junior
              colleagues.
            </>
          }
          marginTop="4px"
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
              mostly related to 3D modeling of interiors. Full stack web
              development, working on a React,{' '}
              {/* AngularJS (
              <a href="https://angularjs.org/">the old one</a>
              ),  */}
              Node.js, AWS, TypeScript and MongoDB based infrastructure.
              Developing and maintaining features for internal tools.
              Responsible for developing logging systems used to track operator
              activity 📊.
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
    </A4Page>
  );

  const page2 = (
    <A4Page>
      <section id="section-education" style={{ marginTop: '2rem' }}>
        <SectionTitle>Education</SectionTitle>

        <ItemWrapper marginTop="1rem">
          <ItemHeader
            logo={<img src="./companies/matf.gif" alt="" height="38px" />}
            title={
              <>
                Bachelor of informatics at{' '}
                <a href="https://www.bg.ac.rs">University of Belgrade</a> ({' '}
                <a href="http://www.matf.bg.ac.rs/eng/">
                  Faculty of Mathematics
                </a>{' '}
                )
              </>
            }
          />
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
  return <h2 style={{ margin: '1rem 0 2rem' }} {...props} />;
}

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
  marginTop: marginTop,
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
