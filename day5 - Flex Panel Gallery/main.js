"use strict";

const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(ev) {
  if (ev.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));