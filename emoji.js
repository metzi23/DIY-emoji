// ----------------------------------------------------
// Fade in
// ----------------------------------------------------
$('body').fadeIn(500);

// ----------------------------------------------------
// SAFEST POSSIBLE STOP-PROP UTILITY
// ----------------------------------------------------
function stop(e) {
    if (!e) return;
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
}

// ----------------------------------------------------
// GENERIC FEATURE CYCLER
// ----------------------------------------------------
function setupFeatureCycler(featureName) {
    const disp = document.getElementById(`${featureName}-display`);
    if (!disp) return;

    const images = Array.from(disp.querySelectorAll("img"));
    let index = 0;

    function update() {
        const layer = document.getElementById(`emoji-${featureName}`);
        layer.innerHTML = `<img src="${images[index].src}" alt="${featureName}">`;

        images.forEach(i => i.classList.remove("active"));
        images[index].classList.add("active");
    }

    function toggle(dir) {
        index = (index + (dir === "next" ? 1 : -1) + images.length) % images.length;
        update();
    }

    const group = document.querySelector(`.control-group[data-feature="${featureName}"]`);
    const prev = group.querySelector('[data-direction="prev"]');
    const next = group.querySelector('[data-direction="next"]');

    prev.addEventListener("click", e => { stop(e); toggle("prev"); });
    next.addEventListener("click", e => { stop(e); toggle("next"); });

    // Click on thumbnails to select directly
    images.forEach((img, idx) => {
        img.addEventListener('click', e => {
            stop(e);
            index = idx;
            update();
        });
    });

    update();
}

// ----------------------------------------------------
// BLOB CYCLER (FACE SHAPE) WITH SYNCHRONIZED COLOR
// ----------------------------------------------------
function setupBlobCycler() {
    const max = 10;
    let index = 2;

    const blobImg = document.getElementById("blob");
    const layer = document.getElementById("emoji-face-shape");

    let currentHue = 0;

    function update() {
        const src = `https://blobcdn.com/blob.svg?seed=myblob${index}`;
        blobImg.src = src;

        // Apply current hue to both previews
        blobImg.style.filter = `hue-rotate(${currentHue}deg)`;
        layer.innerHTML = `<img src="${src}" alt="face-shape" style="filter:hue-rotate(${currentHue}deg)">`;
    }

    const prev = document.getElementById("arrowPrev");
    const next = document.getElementById("arrowNext");

    prev.addEventListener("click", e => {
        stop(e);
        index = index <= 1 ? max : index - 1;
        update();
    });

    next.addEventListener("click", e => {
        stop(e);
        index = index >= max ? 1 : index + 1;
        update();
    });

    // Randomize color independently
    function randomizeColor() {
        currentHue = Math.floor(Math.random() * 360);
        update();
    }

    // Attach randomizeColor to the button
    const colorBtn = document.getElementById('saveit-link');
    colorBtn.addEventListener('click', e => {
        stop(e);
        randomizeColor();
    });

    update();
}

// ----------------------------------------------------
// Initialize all features
// ----------------------------------------------------
setupBlobCycler();
setupFeatureCycler("eyes");
setupFeatureCycler("nose");
setupFeatureCycler("mouth");