import './scss/app.scss';
import App from './App';

const app = async () => {
    document.getElementById('app').appendChild(await App());

    let chain = Promise.resolve();
    function show(e) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                e.classList.add('appear');
                res();
            }, 75);
        });
    }

    const faders = document.querySelectorAll('.fade-in');
    const fadersUp = document.querySelectorAll('.fade-in-up');
    const fadersDown = document.querySelectorAll('.fade-in-down');
    const fadersLeft = document.querySelectorAll('.fade-in-left');
    const fadersRight = document.querySelectorAll('.fade-in-right');
    const fadersLeftReveal = document.querySelectorAll('.fade-in-left-reveal');
    const fadersRightReveal = document.querySelectorAll(
        '.fade-in-right-reveal'
    );

    const appearOptions = {
        threshold: 0,
        rootMargin: '0px 0px 0px 0px',
    };
    const appearOnScroll = new IntersectionObserver(function (
        entries,
        appearOnScroll
    ) {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            } else {
                chain = chain.then(() => show(entry.target));
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions);

    faders.forEach((fader) => {
        appearOnScroll.observe(fader);
    });

    fadersUp.forEach((fader) => {
        appearOnScroll.observe(fader);
    });

    fadersDown.forEach((fader) => {
        appearOnScroll.observe(fader);
    });

    fadersLeft.forEach((fader) => {
        appearOnScroll.observe(fader);
    });

    fadersRight.forEach((fader) => {
        appearOnScroll.observe(fader);
    });

    fadersLeftReveal.forEach((fader) => {
        appearOnScroll.observe(fader);
    });

    fadersRightReveal.forEach((fader) => {
        appearOnScroll.observe(fader);
    });
};
// Load app
app();
