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
      <ul style={{ listStyle: 'none' }}>
        <li>
          📍<b>Location:</b> Belgrade, Serbia
        </li>
        <li>
          📪<b>Mail</b>: matijanme@gmail.com
        </li>
      </ul>
      <section>
        <h3>Summary</h3>
        <p>
          Diligent frontend engineer with 4+ years of experience in commercial
          application development. Always follows a metrics-driven approach.
          Loves to see green-colored results in google page speed.
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

export default Page;
