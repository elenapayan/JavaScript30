"use strict";

function playSound(ev) {
  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0; //el sonido empieza de nuevo cuando vuelves a presionar la tecla//
  audio.play();
  key.classList.add("playing");
};

function removeTransition(ev) {
  if (ev.propertyName !== "transform") return; //para que no seleccione las propiedades que no sean transform, ej. transition//
  this.classList.remove("playing");
};

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);