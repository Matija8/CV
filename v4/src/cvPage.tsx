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
      <header id="section-header">
        <h1>Matija Miličević - Software Engineer</h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li className="li-1">
            <div>📍</div> <B1>Location:</B1> Belgrade, Serbia
          </li>
          <li className="li-1">
            <div>📪</div>
            <B1>Mail:</B1>
            <a href="mailto: matijanme@gmail.com">matijanme@gmail.com</a>
          </li>
          <li className="li-1">
            <div>
              <img src="/github.svg" alt="github" />
            </div>
            <B1>GitHub:</B1>
            <a href="https://github.com/Matija8">github.com/Matija8</a>
          </li>
          <li className="li-1">
            <div>
              <img src="/linkedin.png" alt="linkedin" />
            </div>
            <B1>LinkedIn:</B1>
            <a href="https://www.linkedin.com/in/matija-milicevic/">
              linkedin.com/in/matija-milicevic
            </a>
          </li>
          <li className="li-1">
            <div>🤳</div>
            <B1>Phone:</B1>
            <a href="tel:+381 64 992 5146">+381 64 992 5146</a>
          </li>
        </ul>
      </header>

      <section id="section-work-experience">
        <h2>Experience</h2>
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

const B1 = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >,
) => <b {...props} />;
