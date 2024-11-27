import { data } from "./js/data.js";
const points = [
  {
    id: 1,
    x: 428,
    y: 496,
    style: "start",
  },
  {
    id: 2,
    x: 341,
    y: 470,
    style: "regular",
  },
  {
    id: 3,
    x: 267,
    y: 512,
    style: "regular",
  },
  {
    id: 4,
    x: 190,
    y: 532,
    style: "regular",
  },
  {
    id: 5,
    x: 111,
    y: 509,
    style: "regular",
  },
  {
    id: 6,
    x: 115,
    y: 440,
    style: "checkpoint",
  },
  // blue line
  {
    id: 7,
    x: 138,
    y: 382,
    style: "regular",
  },
  {
    id: 8,
    x: 216,
    y: 341,
    style: "regular",
  },
  {
    id: 9,
    x: 178,
    y: 281,
    style: "regular",
  },
  {
    id: 10,
    x: 193,
    y: 192,
    style: "checkpoint",
  },
  {
    id: 12,
    x: 255,
    y: 239,
    style: "regular",
  },
  {
    id: 14,
    x: 290,
    y: 207,
    style: "regular",
  },
  {
    id: 15,
    x: 328,
    y: 150,
    style: "regular",
  },
  {
    id: 16,
    x: 366,
    y: 105,
    style: "regular",
  },
  {
    id: 17,
    x: 412,
    y: 36,
    style: "checkpoint",
  },
  // red section
  {
    id: 18,
    x: 497,
    y: 69,
    style: "regular",
  },
  {
    id: 19,
    x: 452,
    y: 152,
    style: "regular",
  },
  {
    id: 20,
    x: 472,
    y: 222,
    style: "regular",
  },
  {
    id: 21,
    x: 447,
    y: 299,
    style: "checkpoint",
  },
  //yellow ssection
  {
    id: 22,
    x: 387,
    y: 337,
    style: "regular",
  },
  {
    id: 23,
    x: 378,
    y: 411,
    style: "regular",
  },
  {
    id: 24,
    x: 454,
    y: 427,
    style: "regular",
  },
  {
    id: 25,
    x: 509,
    y: 458,
    style: "regular",
  },
  {
    id: 26,
    x: 616,
    y: 495,
    style: "checkpoint",
  },
  // orange section
  {
    id: 27,
    x: 710,
    y: 517,
    style: "regular",
  },
  {
    id: 28,
    x: 804,
    y: 464,
    style: "regular",
  },
  {
    id: 29,
    x: 880,
    y: 415,
    style: "regular",
  },
  {
    id: 30,
    x: 944,
    y: 378,
    style: "regular",
  },
  {
    id: 32,
    x: 951,
    y: 308,
    style: "checkpoint",
  },
  // grass line
  {
    id: 33,
    x: 903,
    y: 280,
    style: "regular",
  },
  {
    id: 34,
    x: 838,
    y: 319,
    style: "regular",
  },
  {
    id: 35,
    x: 775,
    y: 356,
    style: "regular",
  },
  {
    id: 36,
    x: 720,
    y: 351,
    style: "regular",
  },
  {
    id: 37,
    x: 720,
    y: 290,
    style: "regular",
  },
  {
    id: 38,
    x: 790,
    y: 252,
    style: "checkpoint",
  },
  // green section
  {
    id: 39,
    x: 800,
    y: 188,
    style: "regular",
  },
  {
    id: 40,
    x: 750,
    y: 172,
    style: "regular",
  },
  {
    id: 41,
    x: 670,
    y: 213,
    style: "regular",
  },
  {
    id: 42,
    x: 617,
    y: 250,
    style: "regular",
  },
  {
    id: 43,
    x: 581,
    y: 296,
    style: "regular",
  },
  {
    id: 45,
    x: 515,
    y: 282,
    style: "checkpoint",
  },
  //purple section
  {
    id: 46,
    x: 499,
    y: 226,
    style: "regular",
  },
  {
    id: 47,
    x: 536,
    y: 169,
    style: "regular",
  },
  {
    id: 48,
    x: 586,
    y: 135,
    style: "regular",
  },
  {
    id: 49,
    x: 608,
    y: 84,
    style: "regular",
  },
  {
    id: 50,
    x: 640,
    y: 25,
    style: "regular",
  },
  {
    id: 51,
    x: 692,
    y: 58,
    style: "checkpoint",
  },
  //purple section
  {
    id: 52,
    x: 666,
    y: 133,
    style: "regular",
  },
  {
    id: 53,
    x: 741,
    y: 79,
    style: "regular",
  },
  {
    id: 54,
    x: 810,
    y: 134,
    style: "regular",
  },
  {
    id: 55,
    x: 855,
    y: 103,
    style: "regular",
  },
  {
    id: 56,
    x: 874,
    y: 163,
    style: "finish",
  },
];

// генерация пути с точками/ По ним можно в идеале построить траекторию и прявязать к ней героя, 
// но, не знаю как сделать эту траекторию.
function generateWay() {
  const way = document.querySelector(".way");

  way.querySelectorAll('.point').forEach(point =>  point.remove())

  points.forEach((point) => {
    way.insertAdjacentHTML(
      "beforeend",
      `
            <div class="point point--${point.style}" style="
            top: ${point.y}px;
            left: ${point.x}px;
            "
            ></div>`
    );
  });
}

function game() {
  
  const HERO_HEIGHT = 60;

  const hero = document.getElementById("hero");
  const univer = document.getElementById("univer");

  let currentPoint = 0;

  //стартовая точка
  hero.style = `top: ${points[currentPoint].y - HERO_HEIGHT}px; left: ${
    points[currentPoint].x
  }px;`;
  generateWay();

  const nextStep = () => {
    currentPoint = currentPoint + 1;

    hero.style = `top: ${points[currentPoint].y - HERO_HEIGHT}px; left: ${
      points[currentPoint].x
    }px;`;
    points[currentPoint].style = "active";
    generateWay();
  };

  univer.addEventListener("click", nextStep);
}

game();

// ---------------------------- МОДАЛЬНОЕ ОКНО ----------------------------

const modalButton = document.getElementById("stats");
const closeModalButton = document.getElementById("closeModal")
const modal = document.querySelector(".modal");
const tabs = document.querySelector(".tabs");


function showModal() {
    getWinners()
  modal.showModal();
  modal.classList.add("open");
  closeModalButton.addEventListener('click', closeModal)
}
function closeModal() {
    modal.classList.remove('open')
    modal.close()
    closeModalButton.removeEventListener('click', closeModal)
}
// обработка массива победителей
function getWinners() {
  const winners__list = document.querySelector(".rating__list");
  winners__list.textContent = "";

  const sorted__rating = data.rating
    .sort((a, b) => Number(b.points) - Number(a.points))
    

  sorted__rating.forEach((winner) => {
    const isFriend = data.friends.some((friend) => friend.id === winner.id);
    
    // в зависимости от кодичества опбедителей добавляем или убираем стили для полосы скролла
    if (winners__list.children.length > 7) {
        winners__list.classList.add('rating__list--scroll')
    } else {
        winners__list.classList.remove('rating__list--scroll')
    }
    winners__list.insertAdjacentHTML(
      "beforeend",
      `
                <li class="rating__item rating__grid">
                <span class="rating__number">${winner.id}</span>
                <span class="rating__friend ${
                  isFriend ? "isFriend" : ""
                }"></span>
                <span class="rating__name">${winner.name} ${
        winner.lastName
      }</span>
                <span class="rating__points">${winner.points}</span>
                </li>
                `
    );
  });
}
function changeTab (evt) {
    document
    .querySelectorAll(".tab")
    .forEach((tab) => tab.classList.remove("active"));
  evt.target.classList.add("active");

  if (evt.target.classList.contains("tabs__week")) {
    // должно быть условие времени
    getWinners();
  } else if (evt.target.classList.contains("tabs__general")) {
    // должно быть условие времени
    getWinners();
  }
}

tabs.addEventListener("click",  changeTab);
modalButton.addEventListener("click", showModal);


// слайдер игроков

const friends = document.querySelector('.friends')
const friendsList = friends.querySelector('.friends__list')
const friendsData = [...data.friends]

const nextFriendButton = friends.querySelector('.slider--next')
const prevFriendButton = friends.querySelector('.slider-prev')

function renderFriends () {
    
    while(friendsData.length < 8) {
        friendsData.push({})
    }

    friendsData.forEach( friend => {

        if (friend.id) {
            
            friendsList.insertAdjacentHTML('beforeend', `
                <li class="friends__item" title="${friend.name} ${friend.lastName}">
                    <img src="${friend.img}" />
                </li>
                `)

        } else {
            
            friendsList.insertAdjacentHTML('beforeend', `<li class="friends__item"></li>`)

        }
    })
}
function nextFriend () {

}


renderFriends()
