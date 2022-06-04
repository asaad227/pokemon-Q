const result = [];
const lost = [];
const round = [];
var answer;
var answer1;
var answer2;
function letsStart(){
  document.querySelector("#letsStart").style.display = "none";
  document.getElementById("mainDisplay").style.display = "flex";
  start();
}

function displayInfo(){
    document.querySelector('.info').style.display = 'flex';
    document.querySelector('.hideBtn').style.display = 'flex';
    document.querySelector('.gameInfo').style.display = 'none';
}

function hideInfo(){
  document.querySelector('.info').style.display = 'none';
  document.querySelector('.hideBtn').style.display = 'none';
  document.querySelector('.gameInfo').style.display = 'flex';

}

function start() {
  if (lost.length !== 3) {
    getApi();
    total();
    roundCount();
    round.push(1);
  } else {
    document.getElementById("mainDisplay").style.display = "none";
    document.getElementById("restart").style.display = "flex";
    document.querySelector("#div1").innerHTML = `Game Over`;
    document.querySelector("#div2").innerHTML = `Total Round: ${round.length}`;
    document.querySelector("#div3").innerHTML = `Total Score: ${result.length}`;
  }
}




function reset() {
  location.reload();
 
}

function total() {
  let sum = 0;
  if (result.length === 0) {
    sum += 0;
    document.querySelector(".total").innerHTML = `Score: ${sum}`;
  } else {
    for (let i = 0; i < result.length; i++) {
      sum += result[i];
    }
    document.querySelector(".total").innerHTML = `Score: ${sum}`;
  }
}

function roundCount() {
  let sum = 0;
  if (round.length === 0) {
    sum += 0;
    document.querySelector(".round").innerHTML = ` Round: ${sum}`;
  } else {
    for (let i = 0; i < round.length; i++) {
      sum += round[i];
    }
    document.querySelector(".round").innerHTML = ` Round: ${sum}`;
  }
}
async function getApi() {
  const nums = [];
  const num = new Set();
  while (num.size !== 3) {
    num.add(Math.floor(Math.random() * 100) + 1);
  }
  nums.push(...num);
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nums[0]}/`);
  let data = await response.json();
  let name1 = data.name;
  let pic = data.sprites.front_default;



  response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nums[1]}/`);
  data = await response.json();
  let name2 = data.name;

  response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nums[2]}/`);
  data = await response.json();
  let name3 = data.name;

  const numsk = [];
  const numk = new Set();
  while (numk.size !== 3) {
    numk.add(Math.floor(Math.random() * 3) + 1);
  }
  numsk.push(...numk);
  if (numsk[0] === 1) {
    document.querySelector(".btnAnswer1").innerHTML = name1;
    document.querySelector(".display").src = pic;
    document.querySelector(".btnAnswer2").innerHTML = name2;
    document.querySelector(".btnAnswer3").innerHTML = name3;
  }

  if (numsk[0] === 2) {
    document.querySelector(".btnAnswer2").innerHTML = name1;
    document.querySelector(".display").src = pic;
    document.querySelector(".btnAnswer1").innerHTML = name2;
    document.querySelector(".btnAnswer3").innerHTML = name3;
  }

  if (numsk[0] === 3) {
    document.querySelector(".btnAnswer3").innerHTML = name1;
    document.querySelector(".display").src = pic;
    document.querySelector(".btnAnswer2").innerHTML = name2;
    document.querySelector(".btnAnswer1").innerHTML = name3;
  }

  answer = function () {
    if (numsk[0] === 1) {
      document.querySelector(".btnAnswer1").innerHTML = "Right";
      result.push(1);
    } else {
      lost.push(1);
    }
    start()
    total();
  };

  answer1 = function () {
    if (numsk[0] === 2) {
      document.querySelector(".btnAnswer2").innerHTML = "Right";
      result.push(1);
    } else {
      lost.push(1);
    }
    start()
    total();
  };
  answer2 = function () {
    if (numsk[0] === 3) {
      document.querySelector(".btnAnswer3").innerHTML = "Right";
      result.push(1);
    } else {
      lost.push(1);
    }
    start()
    total();
  };
}

// document.querySelector(".reset").addEventListener("click", reset);
