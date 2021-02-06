import { language, getformLink } from '../constants_example';

const inEnglish = language === 'english';

const icons = {
    linkedin:
        "<svg class='social__link__icon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z'/></svg>",
    facebook:
        "<svg class='social__link__icon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'/></svg>",
    github:
        "<svg class='social__link__icon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/></svg>",
};
const sectionInfo = {
    swedish: {
        subTitle: 'Tveka inte att höra av dig!',
        title: 'Kontakta mig för mer information.',
        errorMsg: {
            name: 'oninvalid="this.setCustomValidity(\'Ange ditt namn.\')" ',
            email:
                'oninvalid="this.setCustomValidity(\'Ange en giltig e-postadress.\')" ',
            message:
                'oninvalid="this.setCustomValidity(\'Skriv ditt meddelande.\')" ',
        },
    },
    english: {
        subTitle: 'Do not hesitate to get in touch with me!',
        title: 'Contact me for more information.',
        errorMsg: {
            name:
                'oninvalid="this.setCustomValidity(\'Your name is required.\')" ',
            email:
                'oninvalid="this.setCustomValidity(\'Enter a valid email address.\')" ',
            message:
                'oninvalid="this.setCustomValidity(\'Write your message.\')" ',
        },
    },
};

const Footer = () => {
    const template = `
    <footer id="footer" class="container__wrapper">
        <div class="container">
            <div class="row center__text">
                <div class="content__col center__margin">
                    <span class="section__subtitle">${
                        sectionInfo[language].subTitle
                    }</span>
                    <h2 class="no__border">${sectionInfo[language].title}</h2>
                </div>
                <div class="contact__form__wrapper">
                    <form id="form__id" class="form__class" method="POST" action="${getformLink}">
                
                        <div class="form__group">
                           
                                <input  type="text" id="Name" name="Name" ${
                                    sectionInfo[language].errorMsg.name
                                } oninput="this.setCustomValidity('')" maxlength="30"  placeholder="${
        inEnglish ? 'Name' : 'Namn'
    } " class="form__input" required>
                                <label for="Name" class="input__label">${
                                    inEnglish ? 'Name' : 'Namn'
                                }</label>
                        </div>
                
                        <div class="form__group">
                         
                                <input type="email" id="Email" name="Email" ${
                                    sectionInfo[language].errorMsg.email
                                } oninput="this.setCustomValidity('')" maxlength="40" placeholder="${
        inEnglish ? 'Email' : 'Epost'
    } " class="form__input" required>
                                <label for="Email" class="input__label">${
                                    inEnglish ? 'Email' : 'Epost'
                                }</label>
                        </div>
                
                        <div class="form__group">
                           
                                <textarea id="Message" name="Message" class="form__input" ${
                                    sectionInfo[language].errorMsg.message
                                } oninput="this.setCustomValidity('')" maxlength="2000" placeholder="${
        inEnglish ? 'Message' : 'Meddelande'
    } " rows="4" maxlength="500" required></textarea>
                                <label for="Message" class="input__label">${
                                    inEnglish
                                        ? 'Your message'
                                        : 'Ditt meddelande'
                                } </label>
                        </div>
                
                        <div class="form__group">
                            <div class="form__btn__container">
                                <button type="submit" id="form__button__id" class="form__btn__primary">${
                                    inEnglish
                                        ? 'Send Message '
                                        : 'Skicka Meddelande '
                                }</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="social__wrapper">
                <div class="social__links center__margin">
                    <a href="https://www.linkedin.com/in/jesper-nyhlen-478397192/" aria-label="linkedin footer" rel="noopener noreferrer" target="_blank" class="social__link">
                        ${icons.linkedin}
                    </a>
                    <a href="https://github.com/jespernyhlen" aria-label="github footer" rel="noopener noreferrer" target="_blank" class="social__link">
                        ${icons.github}
                    </a>
                    <a href="https://www.facebook.com/jesper.nyhlen" aria-label="facebook footer" rel="noopener noreferrer" target="_blank" class="social__link">
                        ${icons.facebook}
                    </a>
                </div>
               
                <div class="personal__info center__text">
                    <p>Jesper Nyhlén</p><span class="separator">|</span>
                    <p><a href="mailto:jespernyhlen@gmail.com">jespernyhlen@gmail.com</a></p><span class="separator">|</span>
                    <p> ${
                        inEnglish
                            ? '<a href="tel:+46734627595" aria-label="Phone">+46734627595</a>'
                            : '<a href="tel:+46734627595" aria-label="Phone">073 - 462 75 95</a>'
                    }</p>
                </div>
                <div class="personal__info center__text">
                ${
                    inEnglish
                        ? "<p><a href='https://jespernyhlen.se'>Switch to Swedish</a></p>"
                        : "<p><a href='https://jespernyhlen.com'>Switch to English</a></p>"
                }
                </div>
            </div>
        </div>
    </footer>
  `;

    return template;
};

export default Footer;
