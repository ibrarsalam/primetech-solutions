if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 1000,
        once: true
    });
}


const words = [
    "PKI Solutions",
    "Secure Printing",
    "Cybersecurity",
    "Enterprise IT Services"
];

let wordIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeEffect() {
    if (!typingElement) return;

    if (charIndex < words[wordIndex].length) {
        typingElement.innerHTML += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (!typingElement) return;

    if (charIndex > 0) {
        typingElement.innerHTML =
            words[wordIndex].substring(0, charIndex - 1);

        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        setTimeout(typeEffect, 500);
    }
}

typeEffect();

const counters = document.querySelectorAll(".counter");

if (counters.length > 0) {
    counters.forEach(counter => {
        counter.innerText = "0";

        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText;
            const increment = target / 100;

            if (current < target) {
                counter.innerText = `${Math.ceil(current + increment)}`;
                setTimeout(updateCounter, 30);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
}


if (
    typeof particlesJS !== "undefined" &&
    document.getElementById("particles-js")
) {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 80
            },

            color: {
                value: "#00b4d8"
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: 0.5
            },

            size: {
                value: 3
            },

            move: {
                enable: true,
                speed: 2
            }
        }
    });
}

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    if (navLinks) {
        navLinks.classList.toggle("show");
    }
}

const navMenuLinks = document.querySelectorAll("#navLinks a");

navMenuLinks.forEach(link => {
    link.addEventListener("click", () => {
        const navLinks = document.getElementById("navLinks");

        if (navLinks) {
            navLinks.classList.remove("show");
        }
    });
});


document.addEventListener("click", function(event) {
    const navLinks = document.getElementById("navLinks");
    const menuToggle = document.querySelector(".menu-toggle");

    if (!navLinks || !menuToggle) return;

    if (
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {
        navLinks.classList.remove("show");
    }
});


const solutionsMega = document.getElementById("solutionsMega");

if (solutionsMega) {
    let closeTimer;

    solutionsMega.addEventListener("mouseenter", () => {
        clearTimeout(closeTimer);
        solutionsMega.classList.add("open");
    });

    solutionsMega.addEventListener("mouseleave", () => {
        closeTimer = setTimeout(() => {
            solutionsMega.classList.remove("open");
        }, 300);
    });
}