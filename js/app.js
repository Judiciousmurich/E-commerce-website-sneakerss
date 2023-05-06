const decrement = document.getElementById("decrement");
const total =  document.getElementById("total");
const increment =  document.getElementById("increment");

let counter = 0;

increment.addEventListener('click', () => {
    counter++;
    total.innerText = counter;
  });
  
  decrement.addEventListener('click', () => {
    counter--;
    total.innerText = counter;
  });