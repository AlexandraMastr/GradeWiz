// Create scroller.js file with this code
function initMyScroller(e, t) {
    let r = document.querySelectorAll(e);

    // Exit if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    // Main initialization function
    function initialize(t, r) {
        t.forEach(e => {
            // Set animated state
            e.setAttribute("data-animated", true);

            // Set animation speed
            if (r && r.speed) {
                let t = r.speed;
                e.style.setProperty("--_animation-duration", t + "ms");
            }

            // Set scroll direction
            if (r && r.direction) {
                let l = r.direction;
                e.style.setProperty("--_animation-direction",
                    l === "right" ? "reverse" : "forwards"
                );
            }

            // Set column gap
            if (r && r.columnGap) {
                let i = r.columnGap;
                e.querySelector(".scroller-wrapper").style.gridColumnGap = i + "rem";
                let a = `calc(-50% - ${i / 2}rem)`;
                e.style.setProperty("--_translation-value", a);
            }

            // Handle duplicates
            let o = 1;
            if (r && r.duplicates && r.duplicates > 0) {
                o = r.duplicates;
            }

            let c = e.querySelector(".scroller-wrapper"),
                n = Array.from(c.children),
                d = n.slice();

            // Clone elements
            for (let s = 0; s < o; s++) {
                d.forEach(e => {
                    let t = e.cloneNode(true);
                    t.setAttribute("aria-hidden", true);
                    c.appendChild(t);
                });
            }
        });
    }

    // Initialize with options
    initialize(r, t);
}