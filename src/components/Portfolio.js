import portfolioImg1 from '../images/portfolio-marene.png';
import portfolioImg2 from '../images/portfolio-movies.png';
import portfolioImg3 from '../images/portfolio-auth.png';
import portfolioImg4 from '../images/portfolio-portfolio.png';
import portfolioImg5 from '../images/portfolio-webtrello.png';

import { language } from '../constants_example';

const projects = {
    header: {
        swedish: {
            subTitle: 'Portfolio',
            title:
                'Publicerade <span class="text__highlight">webbplatser</span>.',
        },
        english: {
            subTitle: 'Portfolio',
            title: 'Published <span class="text__highlight">websites</span>.',
        },
    },
    items: {
        marene: {
            img: portfolioImg1,
            swedish: {
                subTitle: 'Projekt',
                title: 'B & B - Villa Marene',
                textContent:
                    'Webbplats under uppbyggnad för uthyrning av rum till deras bed & breakfast villa. Uppbyggd för att underhållas genom Contentful headless CMS. Webbutveckling, UX/design och drift.',
            },
            english: {
                subTitle: 'Project',
                title: 'B & B - Villa Marene',

                textContent:
                    'Website under construction for rental of rooms to their bed & breakfast villa. Built to be maintained by Contentful headless CMS. Web development, UX / design and operation. ',
            },
            websiteLink: 'https://vigorous-wright-19f5cd.netlify.app/',
            githubLink: 'https://github.com/jespernyhlen/villamarene-v1',
            badges: `<span>Gatsby</span><span>Contentful</span><span>GraphQL</span><span>JavaScript</span><span>CSS</span>`,
        },
        webtrello: {
            img: portfolioImg5,
            swedish: {
                subTitle: 'Projekt',
                title: 'Webtrello',
                textContent:
                    'En plattform under utbyggnad. Registrerade användare kan skapa kankan-boards för att enkelt lägga in och överblicka aktiviteter med hjälp av drag and drop teknik. Det är även möjligt att skapa teams för att tilldela medlemmar till specifika aktiviteter. Byggd med React, Node.js, Express och MongoDB. Webbutveckling, UX / design och drift. <br><br> För att testa, Användare: jespernyhlen@mail.com, Lösenord: hejhej',
            },
            english: {
                subTitle: 'Project',
                title: 'Webtrello',
                textContent:
                    'A platform under development. Registered users can create kankan boards to easily add and view activities using drag and drop technology. It is also possible to create teams to assign members to specific activities. Built with React, Node.js, Express and MongoDB. Web development, UX / design and operation. <br> <br> To test, User: jespernyhlen@mail.com, Password: hejhej',
            },
            websiteLink: 'https://jespernyhlenjs.me/',
            githubLink: 'https://github.com/jespernyhlen/management',
            badges: `<span>React</span><span>NodeJS</span><span>Express</span><span>MongoDB</span><span>Nginx</span><span>JavaScript</span><span>CSS</span>`,
        },
        moviesnow: {
            img: portfolioImg2,
            swedish: {
                subTitle: 'Projekt',
                title: 'Movies Now',
                textContent:
                    'Webbplats för att enkelt finna information om existerande och kommande filmer. Byggd med React och kommunicerar genom Axios med The Movie Database API (TMDb). Webbutveckling, UX/design och drift.',
            },
            english: {
                subTitle: 'Project',
                title: 'Movies Now',
                textContent:
                    'Website to easily find information about existing and upcoming movies. Built with React and communicates through Axios with The Movie Database API (TMDb). Web development, UX / design and operation. ',
            },

            websiteLink: 'https://movies-now.jespernyhlenjs.me/',
            githubLink: 'https://github.com/jespernyhlen/MoviesNow',
            badges: `<span>React</span><span>Redux</span><span>Axios</span><span>API</span><span>JavaScript</span><span>CSS</span>`,
        },
        authmern: {
            img: portfolioImg3,
            swedish: {
                subTitle: 'Projekt',
                title: 'Autentisering',
                textContent:
                    'En designad autentiseringsgrund med stöd för Facebook / Google-inloggning och användarhantering i ett backend-API. Byggd med React, Node.js, Express och MongoDB. Webbutveckling, UX / design och drift.',
            },
            english: {
                subTitle: 'Project',
                title: 'Authentication',
                textContent:
                    'A designed authentication boilerplate with support for Facebook / Google sign in and user management in the backend server. Built with React, Node.js, Express and MongoDB. Hosted with Nginx. Web development, UX / design and operation.',
            },
            websiteLink: 'https://project-frontend.jespernyhlenjs.me/login',
            githubLink: 'https://github.com/jespernyhlen/auth-mern',
            badges: `<span>React</span><span>NodeJS</span><span>Express</span><span>MongoDB</span><span>Nginx</span><span>JavaScript</span><span>CSS</span>`,
        },
        personal: {
            img: portfolioImg4,
            swedish: {
                subTitle: 'Projekt',
                title: 'Portfolio',
                textContent:
                    'Min personliga webbplats för att förmedla vem jag är och vad jag har gjort. Byggd med HTML, JavaScript, CSS / SASS. Webbutveckling, UX / design och drift.',
            },
            english: {
                subTitle: 'Project',
                title: 'Portfolio',
                textContent:
                    'My personal website to convey who I am and what I have done. Built with HTML, JavaScript, CSS / SASS. Web development, UX / design and operation.',
            },
            websiteLink: null,
            githubLink: 'https://github.com/jespernyhlen/portfolio',
            badges: `<span>HTML</span><span>JavaScript</span><span>CSS</span><span>Sass</span>`,
        },
    },
};

const inEnglish = language === 'english';
const headerSubtitle = `${projects.header[language].subTitle}`;
const headerTitle = `${projects.header[language].title}`;
const websiteLabel = `${inEnglish ? 'Show Website' : 'Visa Webbplats'}`;
const githubLabel = `${inEnglish ? 'Show Github' : 'Visa Github'}`;
const btnArrow = `${"<svg width='20' height='7.5' viewBox='0 0 35 13' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0.728616 6.5H32.8754' stroke-width='2' stroke='#da933f' stroke-linecap='square'></path><path d='M28 1L33.674 6.67397L28 12.0214' stroke-width='2' stroke='#da933f'></path></svg>"}`;

const portfolioItems = () => {
    let allProjects = [];

    for (var key in projects.items) {
        if (projects.items.hasOwnProperty(key)) {
            let projectRef = projects.items[key];

            allProjects.push(`
            <div class="portfolio__item col__12 fade-in-up">
                <div class="image__container">
                    <div class="image__container__inner">
                        <img class="portfolio__image" src="${
                            projectRef.img
                        }" alt="${projectRef[language].title} image">
                    </div>
                    <div class="portfolio__content">
                        <span class="section__subtitle">${
                            projectRef[language].subTitle
                        }</span>
                        <h3>${projectRef[language].title}</h3>
                        <div class="category__tag__wrapper">
                            ${projectRef.badges}
                        </div>
                        <p>${projectRef[language].textContent}</p>
                        <div class="portfolio__btn__container">
                            <a href="${
                                projectRef.websiteLink
                            }" aria-label="github ${
                projectRef.title
            }" rel="noopener noreferrer" target="_blank" class="portfolio__btn ${
                projectRef.websiteLink ? '' : 'hide'
            }">${websiteLabel} <span>${btnArrow}</span></a>
                            <a href="${
                                projectRef.githubLink
                            }" aria-label="github ${
                projectRef.title
            }" rel="noopener noreferrer" target="_blank" class="portfolio__btn">${githubLabel} <span>${btnArrow}</span></a>
                        </div>
                    </div>
                </div>
            </div>`);
        }
    }
    return allProjects;
};

const Portfolio = () => {
    const template = `
    <section id="portfolio" class="container__wrapper">
        <div class="container">
            <div class="row center__text">
                <div class="content__col center__margin fade-in">
                    <span class="section__subtitle">${headerSubtitle}</span>
                    <h2 class="no__border">${headerTitle}</h2>
                </div>
            </div>
            <div class="row center__text">
                ${portfolioItems().join('')}
            </div>
        </div>
    </section>
  `;

    return template;
};

export default Portfolio;
