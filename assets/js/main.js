const images = [
	"./assets/images/Scientist.webp",
	"./assets/images/Boxer.png",
	"./assets/images/Businesswoman 1.png",
	"./assets/images/lion-trainer-kid.webp",
	"./assets/images/mechanic-kid.webp",
	"./assets/images/Presenter.webp",
	"./assets/images/Scientist.webp",
	"./assets/images/Skater-kid.webp",
	"./assets/images/Supporter.webp",
];
const preloader = document.querySelector(".preloader");
const preloadImg = document.querySelector(".preloader .preload-image img");
const root = document.querySelector(".root");
const slideImage = root.querySelector(".slide-image");

const setRandomImages = (imageSrc) => {
	preloadImg.src = imageSrc;
};

slideImage.innerHTML = images
	.sort(() => Math.floor(Math.random() - 0.5))
	.map((img) => {
		return `<div class="woman-image">
                <img src="${img}" alt="Woman image" />
            </div>`;
	})
	.join("");

let getRandomImages = setInterval(() => {
	const shuffleImages = images.sort(() => Math.floor(Math.random() - 0.5));
	let randomIndex = Math.floor(Math.random() * shuffleImages.length);
	setRandomImages(shuffleImages[randomIndex]);
}, 100);

window.addEventListener("load", () => {
	preloader.style.opacity = 0;
	setTimeout(() => {
		preloader.remove();
		root.classList.remove("hide");
	}, 200);
	setInterval(() => {
		const slideItems = slideImage.querySelectorAll(".woman-image");
		slideImage.appendChild(slideItems[0]);
	}, 3000);
});
