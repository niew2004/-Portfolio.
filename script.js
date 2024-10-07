const images = [
    'pic_game/valorant.png',
    'pic_game/deadlockgame.png',
    'pic_game/teamfight-tactics-logo.png'
];

let currentImageIndex = 0;

const sliderImage = document.getElementById('slider-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function updateImage(index) {
    sliderImage.src = images[index];
}

prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    updateImage(currentImageIndex);
});

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    updateImage(currentImageIndex);
});
