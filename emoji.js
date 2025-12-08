function setupFeatureCycler(featureName) {
    const disp = document.getElementById(`${featureName}-display`);
    if (!disp) return;

    const images = Array.from(disp.getElementsByTagName('img'));
    if (!images.length) return;

    let index = 0;

    // Update the preview layer
    function updatePreview(src) {
        const layer = document.getElementById(`emoji-${featureName}`);
        if (!layer) return;
        layer.innerHTML = `<img src="${src}" alt="${featureName}">`;
    }

    // Toggle images left/right
    function toggle(dir) {
        index = dir === 'next' ? index + 1 : index - 1;
        if (index < 0) index = images.length - 1;
        if (index >= images.length) index = 0;

        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
        updatePreview(images[index].src);
    }

    // event listeners
    const prevBtn = document.querySelector(`.control-group[data-feature="${featureName}"] [data-direction="prev"]`);
    const nextBtn = document.querySelector(`.control-group[data-feature="${featureName}"] [data-direction="next"]`);
    if (prevBtn) prevBtn.onclick = () => toggle('prev');
    if (nextBtn) nextBtn.onclick = () => toggle('next');

    // apply .active to the first image on page load
    images[0].classList.add('active');
    updatePreview(images[0].src);
}


// Eyes
const eyesDisp = document.getElementById('eyes-display');
if (eyesDisp) {
    const eyesImages = Array.from(eyesDisp.getElementsByTagName('img'));
    let eyesIndex = 0;

    function toggleEyes(dir) {
        eyesIndex = dir === 'next' ? eyesIndex + 1 : eyesIndex - 1;
        if (eyesIndex < 0) eyesIndex = eyesImages.length - 1;
        if (eyesIndex >= eyesImages.length) eyesIndex = 0;

        eyesImages.forEach(img => img.classList.remove('active'));
        eyesImages[eyesIndex].classList.add('active');

        // update preview
        const layer = document.getElementById('emoji-eyes');
        layer.innerHTML = `<img src="${eyesImages[eyesIndex].src}" alt="eyes">`;
    }

    document.querySelector('.control-group[data-feature="eyes"] [data-direction="prev"]')
        .onclick = () => toggleEyes('prev');
    document.querySelector('.control-group[data-feature="eyes"] [data-direction="next"]')
        .onclick = () => toggleEyes('next');

    // show first on load
    eyesImages[0].classList.add('active');
    document.getElementById('emoji-eyes').innerHTML = `<img src="${eyesImages[0].src}" alt="eyes">`;
}

// Nose
const noseDisp = document.getElementById('nose-display');
if (noseDisp) {
    const noseImages = Array.from(noseDisp.getElementsByTagName('img'));
    let noseIndex = 0;

    function toggleNose(dir) {
        noseIndex = dir === 'next' ? noseIndex + 1 : noseIndex - 1;
        if (noseIndex < 0) noseIndex = noseImages.length - 1;
        if (noseIndex >= noseImages.length) noseIndex = 0;

        noseImages.forEach(img => img.classList.remove('active'));
        noseImages[noseIndex].classList.add('active');

        const layer = document.getElementById('emoji-nose');
        layer.innerHTML = `<img src="${noseImages[noseIndex].src}" alt="nose">`;
    }

    document.querySelector('.control-group[data-feature="nose"] [data-direction="prev"]')
        .onclick = () => toggleNose('prev');
    document.querySelector('.control-group[data-feature="nose"] [data-direction="next"]')
        .onclick = () => toggleNose('next');

    // show first on load
    noseImages[0].classList.add('active');
    document.getElementById('emoji-nose').innerHTML = `<img src="${noseImages[0].src}" alt="nose">`;
}

// Mouth
const mouthDisp = document.getElementById('mouth-display');
if (mouthDisp) {
    const mouthImages = Array.from(mouthDisp.getElementsByTagName('img'));
    let mouthIndex = 0;

    function toggleMouth(dir) {
        mouthIndex = dir === 'next' ? mouthIndex + 1 : mouthIndex - 1;
        if (mouthIndex < 0) mouthIndex = mouthImages.length - 1;
        if (mouthIndex >= mouthImages.length) mouthIndex = 0;

        mouthImages.forEach(img => img.classList.remove('active'));
        mouthImages[mouthIndex].classList.add('active');

        const layer = document.getElementById('emoji-mouth');
        layer.innerHTML = `<img src="${mouthImages[mouthIndex].src}" alt="mouth">`;
    }

    document.querySelector('.control-group[data-feature="mouth"] [data-direction="prev"]')
        .onclick = () => toggleMouth('prev');
    document.querySelector('.control-group[data-feature="mouth"] [data-direction="next"]')
        .onclick = () => toggleMouth('next');

    // show first on load
    mouthImages[0].classList.add('active');
    document.getElementById('emoji-mouth').innerHTML = `<img src="${mouthImages[0].src}" alt="mouth">`;
}