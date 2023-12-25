import { ReactNode } from 'react';

export function CvPage() {
  const content: JSX.Element = (
    <main
      style={{
        // A4 paper style
        backgroundColor: 'white',
        width: '210mm',
        minHeight: '100vh',
        margin: '0 auto',
        padding: '1px 4rem 4rem',
      }}
    >
      {/* Full stack? Frontend? */}
      <header id="section-header" style={{ display: 'flex' }}>
        <div>
          <h1 style={{ marginBottom: 8 }}>Matija Miličević</h1>
          <span
            style={{ fontWeight: 600, color: 'gray', margin: 0, fontSize: 18 }}
          >
            Software Engineer
          </span>
        </div>
        <div style={{ flex: '1 0 auto' }} />
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li className="li-1">
            <div>📍</div> <b>Location:</b> Belgrade, Serbia
          </li>
          <li className="li-1">
            <div>📪</div>
            <b>Mail:</b>
            <a href="mailto: matijanme@gmail.com">matijanme@gmail.com</a>
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
      </header>

      <section id="section-work-experience">
        <h2>Experience</h2>

        <WorkExpItem
          title="Front End Engineer"
          at={<a href="https://compstak.com/">CompStak</a>}
          logo={
            <img
              src="./companies/compstak.jpg"
              alt="company-compstak"
              height="32px"
            />
          }
        />
      </section>

      <section id="section-education">
        <h2>Education</h2>
      </section>
    </main>
  );
  return (
    <div style={{ backgroundColor: 'grey', height: '100%' }}>{content}</div>
  );
}

function WorkExpItem({
  title,
  at,
  logo,
}: {
  title: string;
  at: ReactNode;
  logo: ReactNode;
  stack: string;
  descr: ReactNode;
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
      {logo}
    </div>
  );
  return (
    <div style={{ margin: 0, marginBottom: '2rem' }}>
      <div className="flex" style={{ alignItems: 'center', gap: '8px' }}>
        {logoDiv}
        <h3 style={{ margin: 0 }}>{title}</h3>
      </div>
      <div style={{ marginTop: '4px' }}>
        <b>At</b> {at}
      </div>
    </div>
  );
}
