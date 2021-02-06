window.addEventListener("load", function () {
  _toogleNightMode();
  _handleToggleDropdown();
  _toggleModal();
  _hiddenTopAnnoucement();
  // _newGlideCarousel();
  // _toogleWilModal();
  _setBgColorForAvatar();
  //
});

const avatarColors = [
  "#ffdd00",
  "#fbb034",
  "#ff4c4c",
  "#c1d82f",
  "#f48924",
  "#7ac143",
  "#30c39e",
  "#06BCAE",
  "#0695BC",
  "#037ef3",
  "#146eb4",
  "#8e43e7",
  "#ea1d5d",
  "#fc636b",
  "#ff6319",
  "#e01f3d",
  "#a0ac48",
  "#00d1b2",
  "#472f92",
  "#388ed1",
  "#a6192e",
  "#4a8594",
  "#7B9FAB",
  "#1393BD",
  "#5E13BD",
  "#E208A7",
];

function _toogleNightMode() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  const switchs = [...document.querySelectorAll("[data-switch-night-mode]")];
  const toDark = () => {
    document.querySelector("#root").classList.add("dark");
    localStorage.theme = "dark";
  };
  const toLight = () => {
    document.querySelector("#root").classList.remove("dark");
    localStorage.theme = "light";
  };

  //   Check nightMode from localStore
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    toDark();
  } else {
    toLight();
  }

  //   toogle nightMode from swicthNightMode
  switchs.forEach((element) => {
    element.addEventListener("click", function () {
      if (!document.querySelector("#root").classList.contains("dark")) {
        toDark();
      } else {
        toLight();
      }
    });
  });
}

function _toggleModal() {
  const btnToggle = [...document.querySelectorAll(`[data-ttnc-modal-toggle]`)];
  if (!btnToggle || !btnToggle.length) return;
  btnToggle.forEach((element) => {
    element.addEventListener("click", function () {
      const modalID = element.getAttribute("data-ttnc-modal-toggle");
      if (!modalID) return;
      document.getElementById(modalID).classList.toggle("hidden");
      document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
      document.getElementById(modalID).classList.toggle("flex");
      document.getElementById(modalID + "-backdrop").classList.toggle("flex");
    });
  });
}

function _handleToggleDropdown() {
  const btns = [...document.querySelectorAll(".ttnc-dropdown__btn")];
  const dropdowns = [...document.querySelectorAll(".ttnc-dropdown__panel")];
  if (!btns || !btns.length) return;
  btns.forEach((element, key, parent) => {
    const panel = element.nextElementSibling;
    const panelClass = panel.classList;
    if (!panel) return;
    element.addEventListener("click", () => {
      var popper = new Popper(element, panel, {
        placement: "bottom-start",
      });
      panelClass.toggle("hidden");
      panelClass.toggle("block");
    });
  });
}

function _newGlideCarousel() {
  const _toggleDisabledArrow = (
    glide,
    nextArrow,
    prevArrow,
    totalSlides,
    controls
  ) => () => {
    if (nextArrow && prevArrow) {
      if (glide._i && glide._i !== totalSlides - 1) {
        nextArrow.removeAttribute("disabled");
        prevArrow.removeAttribute("disabled");
      }
      if (!glide._i) {
        prevArrow.setAttribute("disabled", true);
      }
      if (glide._i === totalSlides - 1) {
        nextArrow.setAttribute("disabled", true);
      }
    }

    if (!controls) {
      controls = glide._c.Controls;
      totalSlides = glide._c.Html.slides.length;
      nextArrow = [...controls._c[0].children].filter(
        (el) => el.getAttribute("data-glide-dir") === ">"
      )[0];
      prevArrow = [...controls._c[0].children].filter(
        (el) => el.getAttribute("data-glide-dir") === "<"
      )[0];
    }
  };

  const _intantSlide = (element) => {
    const glide = new Glide(element, {
      rewind: false,
    });
    let controls = null;
    let totalSlides = null;
    let nextArrow = null;
    let prevArrow = null;
    glide.on(
      ["mount.after", "run"],
      _toggleDisabledArrow(glide, nextArrow, prevArrow, totalSlides, controls)
    );
    glide.mount();
  };
  const _intantSlideFade = (element) => {
    const glide = new Glide(element, {
      animationDuration: 1,
      rewindDuration: 1,
      throttle: 1,
      rewind: true,
    });
    let controls = null;
    let totalSlides = null;
    let nextArrow = null;
    let prevArrow = null;

    glide.on(
      ["mount.after", "run"],
      _toggleDisabledArrow(glide, nextArrow, prevArrow, totalSlides, controls)
    );
    glide.mount();
  };
  setTimeout(() => {
    const sliders = document.querySelectorAll(".glide");
    const sliderFades = document.querySelectorAll(".glide-fade");
    if (sliders) {
      sliders.forEach(_intantSlide);
    }
    if (sliderFades) {
      sliderFades.forEach(_intantSlideFade);
    }
  }, 10);
}

function _setBgColorForAvatar() {
  const avatars = document.querySelectorAll(".wil-avatar-no-img");
  if (!avatars || !avatars.length) return;
  avatars.forEach((element, key, parent) => {
    const text = element.innerText;
    const backgroundIndex = Math.floor(
      text.charCodeAt(0) % avatarColors.length
    );
    const backgroundColor = avatarColors[backgroundIndex];
    //
    element.style.backgroundColor = backgroundColor;
  });
}

function _hiddenTopAnnoucement() {
  const node = document.querySelector("#top-annoucement");
  const closeBtn = document.querySelector("#top-annoucement-close");
  if (!node || !closeBtn) return;
  closeBtn.addEventListener("click", function () {
    node.classList.add("hidden");
  });
}
