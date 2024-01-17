const items = [
  {
    id: 1,
    title: "Spaghetti",
    price: 20.0,
    img: "img/dishes/macaron.png",
    mark: 5,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus ac turpis blandit ipsum, diam, nisl feugiat ipsum. Et aliquam tempor suspendisse morbi quis. Nascetur etiam donec tellus purus amet, amet dis posuere orci. Quam fermentum integer enim arcu gravida feugiat. Orci, neque, purus dolor risus leo. Ut vel, velit morbi mollis. Amet, leo, vitae bibendum sed pellentesque.",
    big_img: "img/dishes/macaron-big.png",
  },

  {
    id: 2,
    title: "Lasagne",
    price: 35.4,
    img: "img/dishes/lazana.png",
    mark: 5,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus ac turpis blandit ipsum, diam, nisl feugiat ipsum. Et aliquam tempor suspendisse morbi quis. Nascetur etiam donec tellus purus amet, amet dis posuere orci. Quam fermentum integer enim arcu gravida feugiat. Orci, neque, purus dolor risus leo. Ut vel, velit morbi mollis. Amet, leo, vitae bibendum sed pellentesque.",
    big_img: "img/dishes/laz-big.png",
  },

  {
    id: 3,
    title: "Pâtes aux aubergines et tranches de chorizo",
    price: 15.0,
    img: "img/dishes/tartaleku.png",
    mark: 4,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus ac turpis blandit ipsum, diam, nisl feugiat ipsum. Et aliquam tempor suspendisse morbi quis. Nascetur etiam donec tellus purus amet, amet dis posuere orci. Quam fermentum integer enim arcu gravida feugiat. Orci, neque, purus dolor risus leo. Ut vel, velit morbi mollis. Amet, leo, vitae bibendum sed pellentesque.",
    big_img: "img/dishes/tar-big.png",
  },

  {
    id: 4,
    title: "Riz",
    price: 24.0,
    img: "img/dishes/rus.png",
    mark: 5,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus ac turpis blandit ipsum, diam, nisl feugiat ipsum. Et aliquam tempor suspendisse morbi quis. Nascetur etiam donec tellus purus amet, amet dis posuere orci. Quam fermentum integer enim arcu gravida feugiat. Orci, neque, purus dolor risus leo. Ut vel, velit morbi mollis. Amet, leo, vitae bibendum sed pellentesque.",
    big_img: "img/dishes/rus-big.png",
  },
];

const mainDishBig = {
  id: 1,
  title: "Pâtes aux aubergines et tranches de chorizo",
  price: 24.0,
  img: "img/dishes/rus.png",
  mark: 5,
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus ac turpis blandit ipsum, diam, nisl feugiat ipsum. Et aliquam tempor suspendisse morbi quis. Nascetur etiam donec tellus purus amet, amet dis posuere orci. Quam fermentum integer enim arcu gravida feugiat. Orci, neque, purus dolor risus leo. Ut vel, velit morbi mollis. Amet, leo, vitae bibendum sed pellentesque.",
  big_img: "img/dishes/rus-big.png",
};

const secondDishBig = {
  id: 1,
  title: "Cake",
  price: 20.0,
  img: "img/dishes/cake.png",
  mark: 3,
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus ac turpis blandit ipsum, diam, nisl feugiat ipsum. Et aliquam tempor suspendisse morbi quis. Nascetur etiam donec tellus purus amet, amet dis posuere orci. Quam fermentum integer enim arcu gravida feugiat. Orci, neque, purus dolor risus leo. Ut vel, velit morbi mollis. Amet, leo, vitae bibendum sed pellentesque.",
  big_img: "img/dishes/cake-big.png",
};

const dishesSection = document.querySelector(".dishes-cards");
const mainDish = document.querySelector(".offer-right-main-dish");
const secondDish = document.querySelector(".offer-right-second-dish");

window.addEventListener("DOMContentLoaded", function () {
  mainDish.innerHTML = `<button class="btn card-vertical" onclick = "openModalMainDish()">
  <div class="card-img">
    <img src="img/shadow (1).svg" alt="" class="card-img-shadow" />
    <img src="${mainDishBig.img}" alt="" class="card-img-big" />
  </div>
  <div class="card-description">
    <h3 class="card-heading">
      ${mainDishBig.title}
    </h3>
    <div class="card-marks">
      <div class="card-marks__stars_${mainDishBig.mark}">
        <svg
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.19309 8.48066L2.71048 10.5574L3.65727 6.6816L0.558594 4.09003L4.62598 3.77187L6.19309 0.0927734L7.7602 3.77187L11.8282 4.09003L8.72891 6.6816L9.67569 10.5574L6.19309 8.48066Z"
            fill="#A2A8BA"
          />
        </svg>
        <svg
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.19309 8.48066L2.71048 10.5574L3.65727 6.6816L0.558594 4.09003L4.62598 3.77187L6.19309 0.0927734L7.7602 3.77187L11.8282 4.09003L8.72891 6.6816L9.67569 10.5574L6.19309 8.48066Z"
            fill="#A2A8BA"
          />
        </svg>
        <svg
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.19309 8.48066L2.71048 10.5574L3.65727 6.6816L0.558594 4.09003L4.62598 3.77187L6.19309 0.0927734L7.7602 3.77187L11.8282 4.09003L8.72891 6.6816L9.67569 10.5574L6.19309 8.48066Z"
            fill="#A2A8BA"
          />
        </svg>
        <svg
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.19309 8.48066L2.71048 10.5574L3.65727 6.6816L0.558594 4.09003L4.62598 3.77187L6.19309 0.0927734L7.7602 3.77187L11.8282 4.09003L8.72891 6.6816L9.67569 10.5574L6.19309 8.48066Z"
            fill="#A2A8BA"
          />
        </svg>
        <svg
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.19309 8.48066L2.71048 10.5574L3.65727 6.6816L0.558594 4.09003L4.62598 3.77187L6.19309 0.0927734L7.7602 3.77187L11.8282 4.09003L8.72891 6.6816L9.67569 10.5574L6.19309 8.48066Z"
            fill="#A2A8BA"
          />
        </svg>
      </div>
      <p class="card-mark">${mainDishBig.mark} sur 5</p>
    </div>
  </div>
</button> `;

  secondDish.innerHTML = `<button class="btn card-horizontal" onclick="openModalSecondDish()">
  <div class="card-img">
    <img
      src="img/shadow (1).svg"
      alt=""
      class="card-img-shadow"
    />
    <img
      src="${secondDishBig.img}"
      alt=""
      class="card-img-small"
    />
  </div>
  <div class="card-description">
    <h3 class="card-heading">
      ${secondDishBig.title}
    </h3>
    <div class="card-marks">
      <div class="card-marks__stars_${secondDishBig.mark}">
        <svg
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.19309 8.48066L2.71048 10.5574L3.65727 6.6816L0.558594 4.09003L4.62598 3.77187L6.19309 0.0927734L7.7602 3.77187L11.8282 4.09003L8.72891 6.6816L9.67569 10.5574L6.19309 8.48066Z"
            fill="#A2A8BA"
          />
        </svg>
        <svg
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.19309 8.48066L2.71048 10.5574L3.65727 6.6816L0.558594 4.09003L4.62598 3.77187L6.19309 0.0927734L7.7602 3.77187L11.8282 4.09003L8.72891 6.6816L9.67569 10.5574L6.19309 8.48066Z"
            fill="#A2A8BA"
          />
        </svg>
        <svg
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.19309 8.48066L2.71048 10.5574L3.65727 6.6816L0.558594 4.09003L4.62598 3.77187L6.19309 0.0927734L7.7602 3.77187L11.8282 4.09003L8.72891 6.6816L9.67569 10.5574L6.19309 8.48066Z"
            fill="#A2A8BA"
          />
        </svg>
        <svg
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.19309 8.48066L2.71048 10.5574L3.65727 6.6816L0.558594 4.09003L4.62598 3.77187L6.19309 0.0927734L7.7602 3.77187L11.8282 4.09003L8.72891 6.6816L9.67569 10.5574L6.19309 8.48066Z"
            fill="#A2A8BA"
          />
        </svg>
        <svg
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.19309 8.48066L2.71048 10.5574L3.65727 6.6816L0.558594 4.09003L4.62598 3.77187L6.19309 0.0927734L7.7602 3.77187L11.8282 4.09003L8.72891 6.6816L9.67569 10.5574L6.19309 8.48066Z"
            fill="#A2A8BA"
          />
        </svg>
      </div>
      <p class="card-mark">${secondDishBig.mark} sur 5</p>
    </div>
  </div>
</button>`;

  let cardItems = items.map(function (item) {
    return `
<button class="btn card-vertical "onclick = "openModalDish(${item.id})">
    <div class="card-img">
      <img src="img/shadow (1).svg" alt="" class="card-img-shadow" />
      <img src="${item.img}" alt="" class="card-img-big" />
    </div>
    <div class="card-description">
      <h3 class="card-heading">
        ${item.title}
      </h3>
      <div class="card-marks">
        <div class="card-marks__stars_${item.mark}">
          <svg
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.19309 8.48066L2.71048 10.5574L3.65727 6.6816L0.558594 4.09003L4.62598 3.77187L6.19309 0.0927734L7.7602 3.77187L11.8282 4.09003L8.72891 6.6816L9.67569 10.5574L6.19309 8.48066Z"
              fill="#A2A8BA"
            />
          </svg>
          <svg
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.19309 8.48066L2.71048 10.5574L3.65727 6.6816L0.558594 4.09003L4.62598 3.77187L6.19309 0.0927734L7.7602 3.77187L11.8282 4.09003L8.72891 6.6816L9.67569 10.5574L6.19309 8.48066Z"
              fill="#A2A8BA"
            />
          </svg>
          <svg
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.19309 8.48066L2.71048 10.5574L3.65727 6.6816L0.558594 4.09003L4.62598 3.77187L6.19309 0.0927734L7.7602 3.77187L11.8282 4.09003L8.72891 6.6816L9.67569 10.5574L6.19309 8.48066Z"
              fill="#A2A8BA"
            />
          </svg>
          <svg
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.19309 8.48066L2.71048 10.5574L3.65727 6.6816L0.558594 4.09003L4.62598 3.77187L6.19309 0.0927734L7.7602 3.77187L11.8282 4.09003L8.72891 6.6816L9.67569 10.5574L6.19309 8.48066Z"
              fill="#A2A8BA"
            />
          </svg>
          <svg
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.19309 8.48066L2.71048 10.5574L3.65727 6.6816L0.558594 4.09003L4.62598 3.77187L6.19309 0.0927734L7.7602 3.77187L11.8282 4.09003L8.72891 6.6816L9.67569 10.5574L6.19309 8.48066Z"
              fill="#A2A8BA"
            />
          </svg>
        </div>
        <p class="card-mark">${item.mark} sur 5</p>
      </div>
    </div>
  </button> 
    `;
  });
  cardItems = cardItems.join("");
  dishesSection.innerHTML = cardItems;
  /*Preload*/

  const media = document.querySelectorAll("img");
  const preloader = document.querySelector(".preloader");
  let i = 4;

  //console.log(media);
  media.forEach((file) => {
    file.onload = () => {
      i++;
      //console.log(media.length + " " + i);
      if (i === media.length) {
        this.setTimeout(preloader.classList.add("preloader-hide"), 300);
        document.body.style.cssText = "";
        //console.log(preloader);
      }
    };
  });
});

//Modal

function openModalDish(indexDish) {
  const modalSection = document.querySelector(".modal-container");
  let modalDish = items.find((item) => item.id === indexDish);
  if (modalDish) {
    modalSection.parentElement.classList.add("modal-active");
    modalSection.innerHTML = `        <header class="header">
    <div class="header__list">
      <button class="btn modal-close-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon close-btn-icon"
          height="35px"
          width="35px"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M368 368L144 144M368 144L144 368"
          />
        </svg>
      </button>
      <a href="#" class="header__list-logo"
        ><img src="img/Logo.png" alt="" class="list-logo__img"
      /></a>
      <div action="" class="search-form">
        <input
          type="text"
          class="search-input-modal"
          placeholder="Rechercher une recette"
        />
        <button class="header__list-find-btn-modal btn">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="find-btn__svg"
          >
            <path
              d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>

  <div class="dish-container">
    <div class="dish-left">
      <h4 class="dish-left-yellow-heading">PLAT PRINCIPAL</h4>
      <h1 class="dish-left-heading">
        ${modalDish.title}
      </h1>
      <div class="card-horizontal dish-card-horizontal">
        <div class="card-horizontal-heading-ing">
          <h2 class="dish-heading-ing">Ingrédients</h2>
          <div class="counter">
            <p class="counter-heading">Personnes</p>
            <button class="btn counter-btn minus">-</button>
            <span class="counter-value">0</span>
            <button class="btn counter-btn plus">+</button>
          </div>
        </div>
        <div class="ing-container">
          <form action="" class="ing-content">
            <div class="ing-btn">
              <input
                class="btn ing-radio-btn"
                type="radio"
                name="answer"
              />
              <p class="ing-btn-description">200 grammes de pâtes</p>
            </div>
            <div class="ing-btn">
              <input
                class="btn ing-radio-btn"
                type="radio"
                name="answer"
              />
              <p class="ing-btn-description">2 petites aubergines</p>
            </div>
            <div class="ing-btn">
              <input
                class="btn ing-radio-btn"
                type="radio"
                name="answer"
              />
              <p class="ing-btn-description">Des feuilles de basilic</p>
            </div>
          </form>
          <form action="" class="ing-content">
            <div class="ing-btn">
              <input
                class="btn ing-radio-btn"
                type="radio"
                name="answer"
              />
              <p class="ing-btn-description">
                1 pot de sauce tomate concentrée
              </p>
            </div>
            <div class="ing-btn">
              <input
                class="btn ing-radio-btn"
                type="radio"
                name="answer"
              />
              <p class="ing-btn-description">
                Quelques tranches de chorizo
              </p>
            </div>
            <div class="ing-btn">
              <input
                class="btn ing-radio-btn"
                type="radio"
                name="answer"
              />
              <p class="ing-btn-description">Sel et poivre</p>
            </div>
          </form>
        </div>
      </div>
      <h2 class="dish-heading-ing">Description</h2>
      <p class="dish-description">
        ${modalDish.desc}
      </p>
    </div>
    <div class="dish-right">
      <div class="card-img">
        <img
          src="img/shadow (1).svg"
          alt=""
          class="card-img-shadow card-img-shadow-modal"
        />
        <img
          src="${modalDish.big_img}"
          alt=""
          class="card-img-big dish-img"
        />
      </div>
    </div>
  </div>`;

    const counter = document.querySelector(".counter-value");
    let count = 0;

    const plusbtn = document.querySelector(".plus");
    plusbtn.addEventListener("click", function () {
      count++;
      counter.innerHTML = count;
    });

    const minusbtn = document.querySelector(".minus");
    minusbtn.addEventListener("click", function () {
      if (count !== 0) {
        count--;
        counter.innerHTML = count;
      }
    });

    document.body.style.cssText = `overflow-y: hidden; padding-right: ${
      window.innerWidth - document.body.offsetWidth
    }px`;

    const closebtn = document.querySelector(".modal-close-btn");
    closebtn.addEventListener("click", function () {
      modalSection.parentElement.classList.remove("show");
      setTimeout(function () {
        modalSection.parentElement.classList.remove("modal-active");
        document.body.style.cssText = "";
      }, 250);
    });

    const findbtn = document.querySelector(".header__list-find-btn-modal");
    const findinput = document.querySelector(".search-input-modal");
    findbtn.addEventListener("click", function () {
      findinput.classList.add("search-input-active");
    });
  }
}

function openModalMainDish() {
  const modalSection = document.querySelector(".modal-container");
  modalSection.parentElement.classList.add("modal-active");
  modalSection.innerHTML = `        <header class="header">
  <div class="header__list">
    <button class="btn modal-close-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon close-btn-icon"
        height="35px"
        width="35px"
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="M368 368L144 144M368 144L144 368"
        />
      </svg>
    </button>
    <a href="#" class="header__list-logo"
      ><img src="img/Logo.png" alt="" class="list-logo__img"
    /></a>
    <div action="" class="search-form">
      <input
        type="text"
        class="search-input-modal"
        placeholder="Rechercher une recette"
      />
      <button class="header__list-find-btn-modal btn">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="find-btn__svg"
        >
          <path
            d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  </div>
</header>

<div class="dish-container">
  <div class="dish-left">
    <h4 class="dish-left-yellow-heading">PLAT PRINCIPAL</h4>
    <h1 class="dish-left-heading">
      ${mainDishBig.title}
    </h1>
    <div class="card-horizontal dish-card-horizontal">
      <div class="card-horizontal-heading-ing">
        <h2 class="dish-heading-ing">Ingrédients</h2>
        <div class="counter">
          <p class="counter-heading">Personnes</p>
          <button class="btn counter-btn minus">-</button>
          <span class="counter-value">0</span>
          <button class="btn counter-btn plus">+</button>
        </div>
      </div>
      <div class="ing-container">
        <form action="" class="ing-content">
          <div class="ing-btn">
            <input
              class="btn ing-radio-btn"
              type="radio"
              name="answer"
            />
            <p class="ing-btn-description">200 grammes de pâtes</p>
          </div>
          <div class="ing-btn">
            <input
              class="btn ing-radio-btn"
              type="radio"
              name="answer"
            />
            <p class="ing-btn-description">2 petites aubergines</p>
          </div>
          <div class="ing-btn">
            <input
              class="btn ing-radio-btn"
              type="radio"
              name="answer"
            />
            <p class="ing-btn-description">Des feuilles de basilic</p>
          </div>
        </form>
        <form action="" class="ing-content">
          <div class="ing-btn">
            <input
              class="btn ing-radio-btn"
              type="radio"
              name="answer"
            />
            <p class="ing-btn-description">
              1 pot de sauce tomate concentrée
            </p>
          </div>
          <div class="ing-btn">
            <input
              class="btn ing-radio-btn"
              type="radio"
              name="answer"
            />
            <p class="ing-btn-description">
              Quelques tranches de chorizo
            </p>
          </div>
          <div class="ing-btn">
            <input
              class="btn ing-radio-btn"
              type="radio"
              name="answer"
            />
            <p class="ing-btn-description">Sel et poivre</p>
          </div>
        </form>
      </div>
    </div>
    <h2 class="dish-heading-ing">Description</h2>
    <p class="dish-description">
      ${mainDishBig.desc}
    </p>
  </div>
  <div class="dish-right">
    <div class="card-img">
      <img
        src="img/shadow (1).svg"
        alt=""
        class="card-img-shadow card-img-shadow-modal"
      />
      <img
        src="${mainDishBig.big_img}"
        alt=""
        class="card-img-big dish-img"
      />
    </div>
  </div>
</div>`;
  const counter = document.querySelector(".counter-value");
  let count = 0;

  const plusbtn = document.querySelector(".plus");
  plusbtn.addEventListener("click", function () {
    count++;
    counter.innerHTML = count;
  });

  const minusbtn = document.querySelector(".minus");
  minusbtn.addEventListener("click", function () {
    if (count !== 0) {
      count--;
      counter.innerHTML = count;
    }
  });

  document.body.style.cssText = `overflow-y: hidden; padding-right: ${
    window.innerWidth - document.body.offsetWidth
  }px`;

  const closebtn = document.querySelector(".modal-close-btn");
  closebtn.addEventListener("click", function () {
    modalSection.parentElement.classList.remove("show");
    setTimeout(function () {
      modalSection.parentElement.classList.remove("modal-active");
      document.body.style.cssText = "";
    }, 250);
  });

  const findbtn = document.querySelector(".header__list-find-btn-modal");
  const findinput = document.querySelector(".search-input-modal");
  findbtn.addEventListener("click", function () {
    findinput.classList.add("search-input-active");
  });
}

function openModalSecondDish() {
  const modalSection = document.querySelector(".modal-container");
  modalSection.parentElement.classList.add("modal-active");
  modalSection.innerHTML = `        <header class="header">
  <div class="header__list">
    <button class="btn modal-close-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon close-btn-icon"
        height="35px"
        width="35px"
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="M368 368L144 144M368 144L144 368"
        />
      </svg>
    </button>
    <a href="#" class="header__list-logo"
      ><img src="img/Logo.png" alt="" class="list-logo__img"
    /></a>
    <div action="" class="search-form">
      <input
        type="text"
        class="search-input-modal"
        placeholder="Rechercher une recette"
      />
      <button class="header__list-find-btn-modal btn">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="find-btn__svg"
        >
          <path
            d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  </div>
</header>

<div class="dish-container">
  <div class="dish-left">
    <h4 class="dish-left-yellow-heading">PLAT PRINCIPAL</h4>
    <h1 class="dish-left-heading">
      ${secondDishBig.title}
    </h1>
    <div class="card-horizontal dish-card-horizontal">
      <div class="card-horizontal-heading-ing">
        <h2 class="dish-heading-ing">Ingrédients</h2>
        <div class="counter">
          <p class="counter-heading">Personnes</p>
          <button class="btn counter-btn minus">-</button>
          <span class="counter-value">0</span>
          <button class="btn counter-btn plus">+</button>
        </div>
      </div>
      <div class="ing-container">
        <form action="" class="ing-content">
          <div class="ing-btn">
            <input
              class="btn ing-radio-btn"
              type="radio"
              name="answer"
            />
            <p class="ing-btn-description">200 grammes de pâtes</p>
          </div>
          <div class="ing-btn">
            <input
              class="btn ing-radio-btn"
              type="radio"
              name="answer"
            />
            <p class="ing-btn-description">2 petites aubergines</p>
          </div>
          <div class="ing-btn">
            <input
              class="btn ing-radio-btn"
              type="radio"
              name="answer"
            />
            <p class="ing-btn-description">Des feuilles de basilic</p>
          </div>
        </form>
        <form action="" class="ing-content">
          <div class="ing-btn">
            <input
              class="btn ing-radio-btn"
              type="radio"
              name="answer"
            />
            <p class="ing-btn-description">
              1 pot de sauce tomate concentrée
            </p>
          </div>
          <div class="ing-btn">
            <input
              class="btn ing-radio-btn"
              type="radio"
              name="answer"
            />
            <p class="ing-btn-description">
              Quelques tranches de chorizo
            </p>
          </div>
          <div class="ing-btn">
            <input
              class="btn ing-radio-btn"
              type="radio"
              name="answer"
            />
            <p class="ing-btn-description">Sel et poivre</p>
          </div>
        </form>
      </div>
    </div>
    <h2 class="dish-heading-ing">Description</h2>
    <p class="dish-description">
      ${secondDishBig.desc}
    </p>
  </div>
  <div class="dish-right">
    <div class="card-img">
      <img
        src="img/shadow (1).svg"
        alt=""
        class="card-img-shadow card-img-shadow-modal"
      />
      <img
        src="${secondDishBig.big_img}"
        alt=""
        class="card-img-big dish-img"
      />
    </div>
  </div>
</div>`;
  const counter = document.querySelector(".counter-value");
  let count = 0;

  const plusbtn = document.querySelector(".plus");
  plusbtn.addEventListener("click", function () {
    count++;
    counter.innerHTML = count;
  });

  const minusbtn = document.querySelector(".minus");
  minusbtn.addEventListener("click", function () {
    if (count !== 0) {
      count--;
      counter.innerHTML = count;
    }
  });

  document.body.style.cssText = `overflow-y: hidden; padding-right: ${
    window.innerWidth - document.body.offsetWidth
  }px`;

  const closebtn = document.querySelector(".modal-close-btn");
  closebtn.addEventListener("click", function () {
    modalSection.parentElement.classList.remove("show");
    setTimeout(function () {
      modalSection.parentElement.classList.remove("modal-active");
      document.body.style.cssText = "";
    }, 250);
  });

  const findbtn = document.querySelector(".header__list-find-btn-modal");
  const findinput = document.querySelector(".search-input-modal");
  findbtn.addEventListener("click", function () {
    findinput.classList.add("search-input-active");
  });
}
