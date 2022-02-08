'use strict';

const btnCalc = document.querySelector('.section__form__box__btn');
const inputRadio = document.querySelectorAll('input[name="coffee"]');
const numberOfCups = document.querySelector('.input-number');
const amountOfCoffee = document.querySelector('.section__output__text');
const messageToUser = document.querySelector('.section__output__result');

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
