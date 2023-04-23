const maskNumber = {
  mask: "0000 0000 0000 0000",
};

const inputNumberForm = document.querySelector(".middle input");
const inputNumberCard = document.querySelector("#cc-number");

IMask(inputNumberCard, maskNumber);
IMask(inputNumberForm, maskNumber);

function cardNumberUpdate() {
  inputNumberForm.value = inputNumberCard.value;
}

const cvvCard = document.querySelector("#cvvCard");
const cvvForm = document.querySelector("#cc-cvv");

function updateCvv() {
  cvvCard.value = cvvForm.value;
}

const maskCvv = {
  mask: "000",
};

IMask(cvvCard, maskCvv);
IMask(cvvForm, maskCvv);

const maskDate = {
  mask: "MM{/}YY",
  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2),
    },
  },
};

const inputCard = document.getElementById("ccValidity");
const inputForm = document.getElementById("cc-validity");

IMask(inputCard, maskDate);
IMask(inputForm, maskDate);

const inputname = document.querySelector("#inputName");
const ccName = document.querySelector("#ccName");

function nameUpdate() {
  ccName.value = inputname.value.toUpperCase();
}

function dateUpdate() {
  inputCard.value = inputForm.value;
}

const cardFront = document.querySelector(".front");
const cardBack = document.querySelector(".back");

function changeCard() {
  if (cardBack.style.display === "none") {
    cardBack.removeAttribute("style", "display: none"),
      (cardFront.style.display = "none");
  } else {
    cardFront.removeAttribute("style", "display: none"),
      (cardBack.style.display = "none");
  }
}

function changeToFront() {
  if (cardFront.style.display === "none") {
    cardFront.removeAttribute("style", "display: none"),
      (cardBack.style.display = "none");
  } else {
    cardBack.style.display = "none";
  }
}

function changeToBack() {
  if (cardBack.style.display === "none") {
    cardBack.removeAttribute("style", "display: none");
    cardFront.style.display = "none";
  } else {
    cardFront.style.display = "none";
  }
}
