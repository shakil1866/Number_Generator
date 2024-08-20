let main = document.getElementById("countDown");
let result = document.querySelector(".resetValue");

let startCount = 0;
let intervalId;

const start = () => {
  intervalId = setInterval(() => {
    main.innerText = startCount++;
  }, 1000);
};

const stop = () => {
    clearInterval(intervalId);
};

// reset 
const reset_time = () => {
  startCount = 0;
  main.innerText = startCount;
  clearInterval(intervalId);
  result.innerText = "";
}

// getTime
const  get_time = () => {
if(startCount == 0){
  let Para = document.createElement("p");
  Para.innerText = `please start`;
  result.append(Para) 
  setTimeout(() => {
     result = "";
  }, 1000);

}else{
   let newPara = document.createElement("p")
  newPara.innerText = `the stop is ${startCount - 1}`
   result.append(newPara);
} 
}

const clear_time = () => {
  result.textContent = "";
}

document.querySelector(".start_btn").addEventListener("click", start);
document.querySelector(".reset_btn").addEventListener("click", reset_time)
document.querySelector(".stop_btn").addEventListener("click", stop)
document.querySelector(".time_btn").addEventListener("click", get_time);
document.querySelector(".clear_btn").addEventListener("click", clear_time);
