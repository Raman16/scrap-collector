/**
 * Template Name: Green - v4.7.0
 * Template URL: https://bootstrapmade.com/green-free-one-page-bootstrap-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim();
        if (all) {
            return [...document.querySelectorAll(el)];
        } else {
            // return document.querySelector(el)
        }
    };

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all);
        if (selectEl) {
            if (all) {
                selectEl.forEach((e) => e.addEventListener(type, listener));
            } else {
                selectEl.addEventListener(type, listener);
            }
        }
    };

    /**
     * Easy on scroll event listener
     */
    const onscroll = (el, listener) => {
        el.addEventListener("scroll", listener);
    };

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select("#navbar .scrollto", true);
    const navbarlinksActive = () => {
        let position = window.scrollY + 200;
        navbarlinks.forEach((navbarlink) => {
            if (!navbarlink.hash) return;
            let section = select(navbarlink.hash);
            if (!section) return;
            if (
                position >= section.offsetTop &&
                position <= section.offsetTop + section.offsetHeight
            ) {
                navbarlink.classList.add("active");
            } else {
                navbarlink.classList.remove("active");
            }
        });
    };
    window.addEventListener("load", navbarlinksActive);
    onscroll(document, navbarlinksActive);

    /**
     * Scrolls to an element with header offset
     */

    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener("load", () => {
        if (window.location.hash) {
            if (select(window.location.hash)) {
                scrollto(window.location.hash);
            }
        }
    });

    /**
     * Hero carousel indicators
     */
    let heroCarouselIndicators = select("#hero-carousel-indicators");
    let heroCarouselItems = select("#heroCarousel .carousel-item", true);

    heroCarouselItems.forEach((item, index) => {
        index === 0
            ? (heroCarouselIndicators.innerHTML +=
                  "<li data-bs-target='#heroCarousel' data-bs-slide-to='" +
                  index +
                  "' class='active'></li>")
            : (heroCarouselIndicators.innerHTML +=
                  "<li data-bs-target='#heroCarousel' data-bs-slide-to='" +
                  index +
                  "'></li>");
    });

    /**
     * Clients Slider
     */

    // Navbar on mobile
    let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", () => {
            document
                .querySelector(".offcanvas-collapse")
                .classList.toggle("open");
        });
    }

    document.querySelector(".navbar-toggler").addEventListener("click", () => {
        document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
})();
