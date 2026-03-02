const modal = document.getElementById("gameModal");
const frame = document.getElementById("gameFrame");

function openGame(link) {
    frame.src = link;
    modal.style.display = "flex";
}

function closeGame() {
    modal.style.display = "none";
    frame.src = "";
}

document.addEventListener("DOMContentLoaded", () => {

    const featuredRow = document.getElementById("featuredRow");

    window.moveShelfLeft = function () {
        featuredRow.scrollBy(-300, 0);
    };

    window.moveShelfRight = function () {
        featuredRow.scrollBy(300, 0);
    };

});

const autoRow = document.getElementById("autoScrollRow");

let scrollAmount = 0;

setInterval(() => {
    scrollAmount += 1;
    autoRow.scrollLeft = scrollAmount;

    if (scrollAmount >= autoRow.scrollWidth / 2) {
        scrollAmount = 0;
    }
}, 30);


const topPicksRow = document.getElementById("topPicksRow");
const topPicksWrapper = document.querySelector(".top-picks-wrapper");
const scrollBtns = document.querySelectorAll(".tp-scroll-btn");

// Manual scroll
function scrollTopPicks(amount) {
    topPicksRow.scrollBy({
        left: amount,
        behavior: "smooth"
    });
}

// Show arrows only when section is visible
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            scrollBtns.forEach(btn => btn.classList.add("active"));
        } else {
            scrollBtns.forEach(btn => btn.classList.remove("active"));
        }
    });
}, { threshold: 0.4 });

observer.observe(topPicksWrapper);