console.log('Cv js works!');

const workExpTemplate = document.querySelector('[data-work-exp-item]');
const workExpItemsList = document.querySelector('#section-work-experience');

const locations = {
  belgrade: 'Belgrade, Serbia',
};

function cardQueryGet(card, query) {
  return card.querySelector(query);
}

function makeWorkExpItem({
  companies,
  title,
  bodyRight,
  duration,
  location,
  stack,
  companyLogo,
  companyLogoStyle,
}) {
  const card = workExpTemplate.content.cloneNode(true).children[0];
  const prefixQuery = (query) => `.work-exp-${query}`;
  const qget = (query) => cardQueryGet(card, prefixQuery(query));
  const stackHtml = stack
    ? `<div style="margin-bottom: 4px"><b>Stack</b>: ${stack}</div>`
    : '';
  qget('worker-title').textContent = title;
  qget('duration').textContent = duration;
  qget('location').textContent = location || locations.belgrade;
  qget('body-right').innerHTML = stackHtml + bodyRight;
  qget('company-title').innerHTML = companies
    .map(({ title, href }) => `<a href="${href}">${title}</a>`)
    .join(' / ');
  const logo = qget('company-logo');
  logo.style.backgroundImage = `url('assets/companies/${companyLogo}')`;
  if (companyLogoStyle) {
    Object.entries(companyLogoStyle).forEach(([k, v]) => (logo.style[k] = v));
  }
  workExpItemsList.append(card);
}

makeWorkExpItem({
  companies: [
    { title: 'CompStak', href: 'https://www.microsoft.com/en-rs/mdcs' },
  ],
  title: 'Front End Engineer',
  bodyRight: `
  Maintaining and adding new features to internal tools used for parsing real estate comparables.
  Adding features to the company <a href="https://compstak.com/exchange">real estate platform🏠</a>.
  Adding and maintaing ui widgets inside of the company storybook component library.
  Collaborating with colleagues to find the best solutions for complex problems.
  Mentoring junior colleagues.
  `,
  duration: 'May 2022 - Current Employee',
  companyLogo: 'compstak.jpg',
  companyLogoStyle: { height: '38px' },
  stack: 'React, TypeScript, styled-components, TanStack Query, TanStack Table',
});

makeWorkExpItem({
  companies: [
    { title: 'Unleash', href: 'https://www.unleash.so/' },
    { title: 'Team Sava', href: 'https://team-sava.com/' },
  ],
  title: 'Full Stack Developer',
  bodyRight: `
  Helping build the <a href="https://www.unleash.so/features">Unleash app</a> 🚀. </br>
  Working on Node.js microservices that integrate <a href="https://www.unleash.so/integrations">3rd party APIs</a>
  with the rest of the application infrastructure.`,
  duration: 'Feb 2022 - May 2022',
  companyLogo: 'unleash.jpg',
  companyLogoStyle: { height: '33px' },
  stack: 'Node.js, TypeScript',
});

makeWorkExpItem({
  companies: [{ title: 'InsideMaps Inc', href: 'https://www.insidemaps.com/' }],
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
  stack: 'React, TypeScript, Node.js, MongoDB, Elasticsearch',
});

makeWorkExpItem({
  companies: [
    { title: 'Microsoft', href: 'https://www.microsoft.com/en-rs/mdcs' },
  ],
  title: 'Software Engineer Intern',
  bodyRight: `
  With the help of a mentor, added new functionality to C++/C#
  based microservices used in production by Microsoft PowerPoint.
  Communicated and adapted design decisions with colleagues from
  Sunnyvale, CA.`,
  duration: 'Oct 2020 - Apr 2021',
  companyLogo: 'microsoft.png',
  companyLogoStyle: { height: '30px' },
  stack: 'C++',
});
