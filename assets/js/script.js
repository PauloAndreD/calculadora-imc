const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  const bmi = (weight / (height * height)).toFixed(2);

  const value = document.getElementById("value");
  let descrition = "";

  value.classList.add("attention");

  document.getElementById("infos").classList.remove("hidden");

  if (bmi < 18.5) {
    descrition = "Cuidado! Voce está abaixo do peso!";
  } else if (bmi >= 18.5 && bmi <= 25) {
    descrition = "Você está no peso ideal!";
    value.classList.remove("attention");
    value.classList.add("normal");
  } else if (bmi > 25 && bmi <= 30) {
    descrition = "Cuidado! Você está com sobrepeso!";
  } else if (bmi > 30 && bmi <= 35) {
    descrition = "Cuidado! Você está com obesidade moderada!";
  } else if (bmi > 35 && bmi <= 40) {
    descrition = "Cuidado! Você está com obesidade severa!";
  } else {
    descrition = "Cuidado! Você está com obesidade morbida!";
  }

  value.textContent = bmi.replace(".", ",");
  document.getElementById("description").textContent = descrition;
});
