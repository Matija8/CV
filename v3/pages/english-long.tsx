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
        width: '210mm',
        margin: '0 auto',
        padding: '2rem',
        border: 0 ? '1px solid black' : '',
      }}
    >
      {/* Full stack? */}
      <h1>Frontend Developer</h1>
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
          Diligent frontend engineer with 3+ years of experience in commercial
          application development. Mainly specilazies in TypeScript, React &
          Node.js.
        </p>
      </section>

      <section>
        <h3>Experience</h3>
      </section>

      <section>
        <h3>Skills/Technologies</h3>
      </section>
    </main>
  );

  return (
    <>
      {head}
      {content}
    </>
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
        justifyItems: 'flex-end',
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

export default Page;
