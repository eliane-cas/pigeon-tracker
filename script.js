const form = document.querySelector(".form");
const containerPigeons = document.querySelector(".pigeons");
const formInputs = document.querySelectorAll(".form__input");
const inputFeet = document.querySelector(".form__input--feet");
const inputHealth = document.querySelector(".form__input--health");
const inputStatus = document.querySelector(".form__input--status");
const inputType = document.querySelector(".form__input--type");
const closeBtn = document.querySelector(".pigeon__close");

// svgs
const calendar = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path " d="M11.23 14.154v-1.538h1.54v1.538zm-4 0v-1.538h1.54v1.538zm8 0v-1.538h1.54v1.538zm-4 3.846v-1.538h1.54V18zm-4 0v-1.538h1.54V18zm8 0v-1.538h1.54V18zM4 21V5h3.385V2.77h1.077V5h7.154V2.77h1V5H20v16zm1-1h14v-9.384H5zM5 9.615h14V6H5zm0 0V6z"/></svg>`;
const claw = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M16.313 14.53v69.5c56.5 26.487 139.512 124.756 121.718 153.626c-19.937 9.72-41.66 17.936-66.28 26c-2.74.592-5.4 1.456-7.938 2.563c-.2.063-.393.122-.593.186l.06.063c-16.915 7.643-28.78 25.936-29.53 44.436a35 35 0 0 0-3.22 4.656c-12.052 20.84-19.215 46.52-11.31 70.313c7.903 23.793 31.383 43.1 73.28 50.344l30.438 5.28l-22.407-21.25c-20.598-19.52-23.79-44.37-15.655-63.563c18.564-2.293 33.263-17.314 38.72-34.906c.024-.082.036-.166.06-.25c8.305-21.175 21.293-40.217 41.876-46.686c22.197-6.978 89.432 19.79 122.907 75.75c3.1 9.693 9.968 18.606 21.594 25.03c6.867 3.795 13.592 5.702 19.97 6.126c8.03 7.63 16.105 17.703 22 28.75c8.26 15.478 12.246 32.53 8.22 48.22l-7.69 29.936L375.5 468c31.637-28.45 41.573-57.794 37.438-83.563c-3.873-24.125-18.826-44.065-34.813-59.562c-1.898-12.118-8.972-23.538-22.813-31.188c-8.148-4.503-16.148-6.32-23.656-6.062a40 40 0 0 0-3.22.25c-15.68.117-33.815-2.788-50.155-8.656c-22.188-15.804-20.717-30.904-2.405-40.72c27.434-2.626 54.565 6.108 76 17.22a54 54 0 0 0 6.47 4.186c22.067 12.198 42.575 5.148 55.31-9.344c7.79 1.084 15.55 4.598 23.126 10.188c11.023 8.13 21.213 20.634 28.75 34.78l10.314 19.376l6.812-20.875c13.164-40.43 7.03-70.206-10.312-88.31c-15.176-15.843-37.005-22.188-58.344-22.907c-1.065-.036-2.126-.026-3.188-.032a52 52 0 0 0-7.218-4.81c-8.15-4.505-16.15-6.32-23.656-6.064c-5.92.203-11.534 1.71-16.657 4.188v-.063c-31.524 15.287-62.228 22.54-93.155 28.032c-8.008-3.035-10.557-9.02-5.03-19.437c18.92-18.164 41.107-32.81 63.53-40.375c14.174-1.885 26.066-11.202 33.25-23.375c8.486-2.544 18.056-4.173 27.375-4.094c15.366.133 29.59 4.525 39.406 15.19l21.25 23.093l-5.156-30.938C437.927 83.1 420.128 60.11 397.812 51.22c-8.368-3.336-17.006-4.73-25.625-4.782c-12.06-.075-24.05 2.494-35.125 6.093c-4.27-1.392-8.473-2.1-12.53-2.186c-19.13-.41-35.312 12.694-42.876 29.437c-.007.023-.023.042-.03.064a53 53 0 0 0-2.595 7.094c-5.9 15.37-13 29.872-21.217 43.5c-34.96 31.232-68.095 19.003-93.688-15.5c-19.793-28.38-37.218-65.49-47.156-100.41H16.312zm355.562 50.72c6.738 0 13.2 1.02 19.03 3.344c11.852 4.722 22.592 14.762 29.783 35.687c-9.974-4.213-20.77-6.096-31.282-6.186c-13.213-.113-26.044 2.423-37.344 6.375c-7.2 2.276-11.68 4.717-13.687 5.78c-1.934 1.022-1.256 1.004-3.313-.97c-2.056-1.972-4.744-6.765-5.968-12.28s-1.122-11.635.344-16.094c1.465-4.458 3.59-7.103 7.812-8.656h.03v-.03c11.348-4.18 23.366-6.97 34.595-6.97m37.594 136.22c19.194-.013 38.09 5.407 49.374 17.186c9.58 10.002 15.108 25.212 11.03 49.344c-6.486-8.54-13.78-16.22-22-22.28c-13.878-10.24-30.478-16.22-47.687-13.595c-3.116.475-4.042-.14-5.78-2.375c-1.74-2.234-3.21-6.56-3.22-11.094c-.01-4.532 1.365-9.054 3.657-12.03c2.292-2.978 5.123-4.878 10.78-5.095c1.28-.048 2.565-.06 3.845-.06zM59.22 317.624c3.08.093 6.475 1.018 9.5 2.625c4.03 2.143 7.17 5.456 8.31 8c1.142 2.544 1.28 3.574-.624 6.063c-16 20.908-19.083 50.772-5.78 76.843c-20.013-7.685-29.596-18.962-33.657-31.187c-5.486-16.512-.514-37.32 9.75-55.064c2.824-4.885 5.83-6.467 9.56-7.094a15 15 0 0 1 2.94-.187zm294.56 14.28c2.927-.057 5.47.902 8.376 3.595c15.526 14.38 29.208 32.532 32.313 51.875c2.357 14.692-.622 30.766-14.658 48.875c-1.51-12.203-5.664-23.978-11.312-34.563c-9.762-18.294-23.688-33.48-37.156-43.062c-2.18-1.55-2.332-2.312-1.656-5.78c.675-3.47 3.433-8.554 7.468-12.626c4.035-4.074 9.182-7.07 13.53-7.94c1.09-.216 2.12-.354 3.095-.374"/></svg>`;
const nest = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path  d="m316.8 35.56l-47.6 44.09c11 2.51 21.2 8.69 29.5 16.59c6.4 6.16 11.9 13.46 15.6 21.46l32.1-35.43l-47.3 14.29zm-58.2 60.86c-8 0-17 3.78-25 9.98c-8.6 6.6-15.6 16-19 24.8c-4.8 12.4-.8 38.3 6 60c5 16.3 9.9 27.6 12.5 33.5l31.9-4.6l11.6 1.4l-5.4-35.1l3-3.2s7.8-8.3 15.1-19c7.4-10.6 12.8-24 11.9-28.9c-1.4-8.7-7.1-18.5-15-26c-7.8-7.5-17.6-12.35-26-12.84h-1.6zm127.6 23.38c-10.4.4-21.6 5-31.7 12.5c-11.6 8.7-21.3 21-26.3 32.6v.1c-3.8 8.6-2 28.8 2.3 45.8c1.8 7.2 3.5 12.9 5.1 17.6l40.8 4.8l-61.9 10.9l-49.3-5.8l-168.44 24l83.54 30l109.2-18.6l-106 54.1l-115.68-61.3l-28.93 4.1L47.3 302l-29.27-11.9l37.91 44.2l4.73 17.7l43.83 20.9l63.1-16.5l-56.8 41.9l-42.17-16.5l10.86 40.6l24.01 7l-41.99 17.2l97.39.4l-52.8 21.9l107.1-7.6c73.4 25.8 90.3 22.4 173.3 30.1l-68.2-25.5l24.3-12.6l-57.9-39.6c77.9 24.1 107.9 16.5 183.6 2.3l-42.2-6.2l51.8-27l.4-12.7l27.5-57.6l-26.3 18.6l1-29.4l-63.2 51.5l-113-34.4l116.2 7.9l60.1-28.9l.5-14.1l16.1-40.9l-30.6 19.1l-37.1-4.3l-77.4 8.7s22.1-6.9 42.9-13.2l44-30.9l-51.8 9.1l-2.8-28.6l7.6-1.8s13.2-3.1 26.5-8.8c6.7-2.8 13.2-6.4 17.8-10s6.7-7 7-9.1c1.3-10.5-4.8-23.3-15.5-33.8s-25.6-18.1-37.3-19.2c-1.4-.2-2.8-.2-4.3-.2M249 121.4c8.1 0 14.7 5.9 14.7 13.1s-6.6 13.1-14.7 13.1s-14.7-5.9-14.7-13.1s6.6-13.1 14.7-13.1m137.6 16.8c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16m-259.2 1.5c-1.4 0-2.9 0-4.3.2c-11.7 1.1-26.59 8.7-37.29 19.2c-10.71 10.5-16.82 23.3-15.48 33.8c.28 2.1 2.35 5.5 6.94 9.1s11.17 7.2 17.82 10c13.31 5.7 26.51 8.8 26.51 8.8l7.6 1.8l-1.6 17.1l55.2-7.9c.1-.4.2-.7.3-1.1c4.3-17 6.1-37.2 2.3-45.8v-.1c-5-11.6-14.8-24-26.3-32.6c-10.1-7.6-21.3-12.2-31.7-12.5m332 16.4c1.9 6.1 2.6 12.6 1.7 19.1q-.3 2.25-.9 4.2l34.9-10.9zm-317.6.4c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16m-79.07 2.1l-40.13 6.8l30.37 15.5c1.53-7.9 5.05-15.4 9.76-22.3M207.8 365.4l73.2 13.8l78-9l-79.6 30.8z"/></svg>`;
const health = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M12 7.194c-1.73-3.92-5.76-4.23-7.64-2.56c-1.53 1.33-2.26 4.66-.87 7.69c2.41 5.21 8.51 8 8.51 8s6.1-2.74 8.51-7.95c1.39-3 .66-6.32-.87-7.69c-1.88-1.72-5.91-1.41-7.64 2.51"/><path d="M3.34 11.964H8l3 3l3-6l2 3h4.66"/></g></svg>`;

const search = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" class="search_icon"><path  d="M20.94 11A8.994 8.994 0 0 0 13 3.06V2c0-.55-.45-1-1-1s-1 .45-1 1v1.06A8.994 8.994 0 0 0 3.06 11H2c-.55 0-1 .45-1 1s.45 1 1 1h1.06A8.994 8.994 0 0 0 11 20.94V22c0 .55.45 1 1 1s1-.45 1-1v-1.06A8.994 8.994 0 0 0 20.94 13H22c.55 0 1-.45 1-1s-.45-1-1-1zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7"/></svg>`;

const bird = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="#2B3B47" d="M120.965 227.598c-22.179 1.905-39.631 20.262-39.631 42.885c0 22.686 17.452 41.043 39.631 42.976v.522h60.887v-.185h.17c23.911 0 43.312-19.401 43.312-43.312s-19.401-43.312-43.312-43.312c-.047 0-.079.091-.17.091v-.091h-60.887z"/><path fill="#ADBCBB" d="M342.806 88.829C341.459 80.115 355 69.147 355 69.147A2.147 2.147 0 0 0 352.853 67h-39.38c-1.596 0-2.634-1.679-1.92-3.107l5.48-10.96c.802-1.605-.593-3.43-2.35-3.063c-12.299 2.565-51.739 14.027-89.985 30.758c-17.707 5.925-34.344 14.895-49.476 26.226c-11.825 7.924-21.587 16.366-27.716 25.13l.009-.002c-35.468 38.585-57.606 91.326-57.606 143.974c0 101.526 82.303 183.829 183.829 183.829s183.829-82.303 183.829-183.829c-.001-77.094-47.465-154.386-114.761-187.127"/><path fill="#E5E4DF" d="M309.365 247c-2.832-32.971-30.121-58.914-63.751-58.914c-33.723 0-61.013 25.943-63.886 58.914l-.776 41.426h.276v.252c0 35.546 28.84 64.386 64.386 64.386S310 324.224 310 288.679c0-.07-.135-.117-.135-.252H310V247z"/><path fill="#2B3B47" d="M269.263 256.567c-1.054-12.276-11.215-21.935-23.736-21.935c-12.556 0-22.717 9.659-23.787 21.935h-.289v33.7h.103v.094c0 13.235 10.738 23.973 23.973 23.973s23.973-10.738 23.973-23.973c0-.026-.05-.043-.05-.094h.05v-33.7z"/><path fill="#D1CFC3" d="M112.6 286.502c31.605 0 62.185 75.77 50.569 87.386s-96.428 9.162-124.523 0c-28.561-9.314 57.539-87.386 73.954-87.386"/></svg>`;

// const switchType = document.querySelector(".switch input");
// const mainContent = document.querySelector(".main_content");
// const secondaryContent = document.querySelector(".secondary_content");

// switchType.addEventListener("change", (e) => {
//   mainContent.style.display = e.target.checked ? "block" : "none";
//   secondaryContent.style.display = e.target.checked ? "none" : "block";
//   if (type.classList.contains("main_content")) legs = "one";
//   if (type.classList.contains("secondary_content")) legs = "one";

//   console.log(legs);
// });

navigator.geolocation.getCurrentPosition(
  function (position) {
    console.log(position);
  },
  function () {
    console.log("could not get your position");
  }
);

class Pigeon {
  date = new Date();
  id = (Date.now() + "").slice(-10);

  constructor(coords, health, feet, status) {
    this.coords = coords; // [lat, lng]
    this.health = health;
    this.feet = feet;
    this.status = status;
    this._setDay();
  }

  _setDay() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.day = `${this.date.getDate()} ${months[this.date.getMonth()]}`;
  }
}

class OneLeg extends Pigeon {
  type = "one-leg";
  constructor(coords, health, feet, status) {
    super(coords, health, feet, status);
  }
}
class TwoLeg extends Pigeon {
  type = "two-legs";
  constructor(coords, health, feet, status) {
    super(coords, health, feet, status);
  }
}

class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #pigeons = [];
  constructor() {
    // get user's position
    this._getPosition();

    // get data from local storage
    this._getLocalStorage();

    // attach event listeners
    form.addEventListener("submit", this._newPigeon.bind(this));
    containerPigeons.addEventListener("click", this._moveToPopup.bind(this));
    containerPigeons.addEventListener("click", this._removePigeon.bind(this));
  }

  _getPosition() {
    navigator.geolocation.getCurrentPosition(
      this._loadMap.bind(this),
      function (err) {
        console.log(err);
      }
    );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];

    this.#map = L.map("map").setView(coords, this.#mapZoomLevel);

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // handling clicks on map
    this.#map.on("click", this._showForm.bind(this));

    // render the markers after the map is loaded
    this.#pigeons.forEach((pigeon) => {
      this._renderPigeonMarker(pigeon);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove("hidden");
  }

  _hideForm() {
    inputFeet.value =
      inputHealth.value =
      inputType.value =
      inputStatus.value =
        "";

    form.classList.add("hidden");
  }

  _newPigeon(e) {
    e.preventDefault();

    // get data from form
    const type = inputType.value;
    const status = inputStatus.value;
    const health = inputHealth.value;
    const feet = +inputFeet.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let pigeon;

    if (!status && !type && health) alert("Please fill in all the fields:)");

    // check if data is valid

    // if pigeon one leg make one-leg object
    if (type === "one-leg") {
      pigeon = new OneLeg([lat, lng], health, feet, status);
    }

    // if pigeon two-legs make two-leg object
    if (type === "two-legs") {
      pigeon = new TwoLeg([lat, lng], health, feet, status);
    }

    // add new object to pigeon array
    this.#pigeons.push(pigeon);

    // render pigeon on map as marker
    this._renderPigeonMarker(pigeon);

    // render pigeon on list
    this._renderPigeon(pigeon);

    // hide form and clear input fields
    this._hideForm();

    // set local storage
    this._setLocalStorage();
  }

  _renderPigeonMarker(pigeon) {
    L.marker(pigeon.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 150,
          minWidth: 60,
          autoClose: false,
          closeOnClick: false,
          className: `${pigeon.type}-popup`,
        })
      )
      .setPopupContent(
        `${bird} ${
          pigeon.type === "one-leg" ? "One-legged" : "Two-legged"
        } Pigeon`
      )
      .openPopup();
  }
  _renderPigeon(pigeon) {
    const html = `
        <li class="pigeon pigeon__${pigeon.type}" data-id="${pigeon.id}">
        <h2 class="pigeon__title">${search} ${
      pigeon.type === "one-leg" ? "One-legged" : "Two-legged"
    } Pigeon</h2> <a href="#" class="pigeon__close">&times;</a>
            <div class="pigeon__detail">
                <span class="detail__icon detail__date">${calendar}</span>
                <span class="detail__value">${pigeon.day}</span>
            </div>
            <div class="pigeon__detail">
                <span class="detail__icon detail__health">${health}</span>
                <span class="detail__value">${pigeon.health}</span>
            </div>
            <div class="pigeon__detail">
                <span class="detail__icon detail__feet">${claw}</span>
                <span class="detail__value">${pigeon.feet}</span>
            </div>
            <div class="pigeon__detail">
                <span class="detail__icon detail__status">${nest}</span>
                <span class="detail__value">${pigeon.status}</span>
            </div>
    </li>
  `;
    form.insertAdjacentHTML("afterend", html);
  }

  _moveToPopup(e) {
    const pigeonEl = e.target.closest(".pigeon");

    if (!pigeonEl) return;

    const pigeon = this.#pigeons.find(
      (pigeon) => pigeon.id === pigeonEl.dataset.id
    );

    this.#map.setView(pigeon.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }

  _setLocalStorage() {
    localStorage.setItem("pigeons", JSON.stringify(this.#pigeons));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("pigeons"));

    if (!data) return;
    this.#pigeons = data;

    this.#pigeons.forEach((pigeon) => {
      this._renderPigeon(pigeon);
    });
  }

  _removePigeon(e) {
    const pigeonClose = e.target.closest(".pigeon__close");

    if (!pigeonClose) return;

    const pigeon = pigeonClose.closest(".pigeon");
    const pigeonID = pigeon.dataset.id;
    const index = this.#pigeons.findIndex((pigeon) => pigeonID === pigeon.id);

    this.#pigeons.splice(index, 1);

    this._setLocalStorage();
    // this._getLocalStorage();
    location.reload();
  }

  // function to remove
  reset() {
    localStorage.removeItem("pigeons");
    location.reload();
  }
}

const app = new App();

// modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const logo = document.querySelector(".logo");
const close = document.querySelector(".modal__close");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

logo.addEventListener("click", openModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

close.addEventListener("click", closeModal);
