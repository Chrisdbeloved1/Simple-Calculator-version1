let numb1 = document.getElementById("num1");
let numb2 = document.getElementById("num2");
let res = document.getElementById("result");


document.getElementById("add").addEventListener("click", () => {
  res.value = parseInt(numb1.value) + parseInt(numb2.value);
});

document.getElementById("sub").addEventListener("click", () => {
  res.value = parseInt(numb1.value) - parseInt(numb2.value);
});

document.getElementById("mul").addEventListener("click", () => {
  res.value = parseInt(numb1.value) * parseInt(numb2.value);
});

document.getElementById("div").addEventListener("click", () => {
  res.value = parseInt(numb1.value) / parseInt(numb2.value);
});

document.getElementById("reset").addEventListener("click", () => {
  res.value = "";
  numb1.value = "";
  numb2.value = "";
});


