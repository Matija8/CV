console.log('Cv js works!');

const workExpTemplate = document.querySelector('[data-work-exp-item]');
const workExpItemsList = document.querySelector('#work-experience');

const locations = {
  belgrade: 'Belgrade, Serbia',
};

function cardQueryGet(card, query) {
  return card.querySelector(query);
}

function setCardQueryText(card, query, text) {
  cardQueryGet(card, query).textContent = text;
}

// function setCardQueryTextFst(card, query, text) {
//   card.querySelector(query)[0].textContent = text;
// }

console.log(workExpTemplate);
function makeWorkExpItem({
  companyTitle,
  title,
  bodyRight,
  duration,
  location,
  companyHref,
  companyLogo,
  companyLogoStyle,
}) {
  const card = workExpTemplate.content.cloneNode(true).children[0];
  const prefixQuery = (query) => `.work-exp-${query}`;
  const qget = (query) => cardQueryGet(card, prefixQuery(query));
  const qtext = (query, text) =>
    setCardQueryText(card, prefixQuery(query), text);
  qtext('worker-title', title);
  qtext('duration', duration);
  qtext('location', location);
  qtext('company-title', companyTitle);
  qtext('body-right', bodyRight);
  qget('company-title').href = companyHref;
  const logo = qget('company-logo');
  logo.style.backgroundImage = `url('assets/companies/${companyLogo}')`;
  if (companyLogoStyle) {
    Object.entries(companyLogoStyle).forEach(([k, v]) => (logo.style[k] = v));
  }
  workExpItemsList.append(card);
}

makeWorkExpItem({
  companyTitle: 'InsideMaps Inc',
  title: 'Junior Software Engineer',
  bodyRight: `
Full stack web development, working on a React, AngularJS
(yes, the old one), Node.js, AWS, Typescript and MongoDB based
infrastructure. Developing and maintaining features for
internal tools. Responsible for maintaining logging and
profiling logic inside these tools. Working in an agile team
with 2 week sprints.
  `,
  duration: 'Apr 2021 - Feb 2022',
  location: locations.belgrade,
  companyHref: 'https://www.insidemaps.com/',
  companyLogo: 'inside-maps.jpg',
});

makeWorkExpItem({
  companyTitle: 'Microsoft',
  title: 'Software Engineer Intern',
  bodyRight: `
With the help of a mentor, added new functionality to C++/C#
based microservices used in production by Microsoft PowerPoint.
Communicated and adapted design decisions with colleagues from
Sunnyvale, CA.
  `,
  duration: 'Oct 2020 - Apr 2021',
  location: locations.belgrade,
  companyHref: 'https://www.microsoft.com/en-rs/mdcs',
  companyLogo: 'microsoft.png',
  companyLogoStyle: { height: '30px' },
});
