'use strict';

const btnCalc = document.querySelector('.section__form__box__btn');
const inputRadio = document.querySelectorAll('input[name="coffee"]');
const numberOfCups = document.querySelector('.input-number');
const amountOfCoffee = document.querySelector('.section__output__text');
const messageToUser = document.querySelector('.section__output__result');

const cafDoses = {
  espresso: 80,
  alt: 150,
  instant: 250,
};

function checkRadioBtn() {
  let selectedType;
  for (let radioBtn of inputRadio) {
    if (radioBtn.checked) {
      selectedType = radioBtn.id;
    }
  }
  return selectedType;
}

function calcCaffeine() {
  const result = checkRadioBtn();
  const dose = cafDoses[result];
  const totalCaf = dose * numberOfCups.value;
  return totalCaf;
}

function checkCafNorm(caffeine) {
  return caffeine < 200
    ? 'You can drink enough two cups of espresso or one alternative.'
    : caffeine < 400
    ? 'Slow down! Drink more water.'
    : 'Whoa! You have drank too much coffee today!';
}

function textFormat() {
  const dose = calcCaffeine();
  amountOfCoffee.textContent = `Total amount of caffeine: ${dose} mg.`;
  messageToUser.textContent = checkCafNorm(dose);
}

btnCalc.addEventListener('click', textFormat);
