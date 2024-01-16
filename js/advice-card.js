const itemsAdvice = [
  {
    name: "Le pouvoir des huiles essentielles",
    img: "img/AdvicePhoto.png",
    desc: "Rejoignez-nous sur les réseaux sociaux pour partager, apprendre et grandir ensemble dans notre quête de recettes écologiques et économiques. Votre voix compte, et nous sommes impatients de vous accueillir dans notre communauté engagée !",
    mark: 4,
  },
  {
    name: "Le pouvoir des huiles essentielles",
    img: "img/AdvicePhoto.png",
    desc: "Rejoignez-nous sur les réseaux sociaux pour partager, apprendre et grandir ensemble dans notre quête de recettes écologiques et économiques. Votre voix compte, et nous sommes impatients de vous accueillir dans notre communauté engagée !",
    mark: 5,
  },
  {
    name: "Le pouvoir des huiles essentielles",
    img: "img/AdvicePhoto.png",
    desc: "Rejoignez-nous sur les réseaux sociaux pour partager, apprendre et grandir ensemble dans notre quête de recettes écologiques et économiques. Votre voix compte, et nous sommes impatients de vous accueillir dans notre communauté engagée !",
    mark: 2,
  },
  {
    name: "Le pouvoir des huiles essentielles",
    img: "img/AdvicePhoto.png",
    desc: "Rejoignez-nous sur les réseaux sociaux pour partager, apprendre et grandir ensemble dans notre quête de recettes écologiques et économiques. Votre voix compte, et nous sommes impatients de vous accueillir dans notre communauté engagée !",
    mark: 3,
  },
];

const cardsAdviceSection = document.querySelector(".advice-cards");

window.addEventListener("DOMContentLoaded", function () {
  let cardAdviceItem = itemsAdvice.map(function (item) {
    return `<button class="advice-card btn">
    <img
      src="${item.img}"
      alt=""
      class="advice-card-photo"
    />
    <div class="advice-card-text">
      <h3 class="advice-card-heading">
        ${item.name}
      </h3>
      <p class="advice-card-description">
        ${item.desc}
      </p>
      <div class="advice-card-autor">
        <img
          src="img/AutorPhoto.svg"
          alt=""
          class="advice-card-autor-photo"
        />
        <div class="advice-card-autor-text">
          <p class="advice-card-autor-heading">Totor</p>
          <p class="advice-card-autor-data">
            Publié le : <span>06 Septembre 2022</span>
          </p>
        </div>
      </div>
    </div>
  </button>`;
  });
  cardAdviceItem = cardAdviceItem.join("");
  cardsAdviceSection.innerHTML = cardAdviceItem;
});
