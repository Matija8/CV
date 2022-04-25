console.log('Cv js works!');

const workExpTemplate = document.querySelector('[data-work-exp-item]');
const workExpItemsList = document.querySelector('#work-experience');

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
  title,
  bodyRight,
  duration,
  location,
  companyTitle,
  companyHref,
  companyLogo,
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
  qget(
    'company-logo',
  ).style.backgroundImage = `url('assets/companies/${companyLogo}')`;
  workExpItemsList.append(card);
}

makeWorkExpItem({
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
  location: 'Belgrade, Serbia',
  companyTitle: 'InsideMaps Inc',
  companyHref: 'https://www.insidemaps.com/',
  companyLogo: 'inside-maps.jpg',
});
