
//Exercise 1 - Callbacks $$$

const push = function () {
    console.log("pushing it!")
  }
  
  const pull = function () {
    console.log("pulling it!")
  }
  
  const pushPull = function (para){
        return  para()
  }
  pushPull(push) //should print "pushing it!"
  pushPull(pull) //should print "pulling it!"
  
//Exercise 2 - Callbacks $$$

const returnTime = function (time) {
    alert('The current time is: ' + time)
  }

  const getTime = (fun) => fun(new Date())  
  
  getTime(returnTime)
  
//Exercise 3 - Callbacks $$$
const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data) ;
  };
  
  const logData = data => console.log(data)

  displayData(alert, logData, "I like to party")
  
// Exercise 4 - Arrow Functions

const sumSomething = (one,two,three) => one + two + three
console.log(sumSomething(1,2,3))

//Exercise 5 - Arrow Functions
const capitalize = (str) => {
    let tmp =""
     tmp += str[0].toUpperCase()
     str =  str.toLowerCase()
     tmp += str.slice(1)
    return console.log(tmp)
} 
capitalize("bOb") // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia

//Exercise 6 - Arrow functions
const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }
const commentOnWeather = temp => console.log("its " + determineWeather(temp))
  commentOnWeather(30) //returns "It's hot"
  commentOnWeather(22) //returns "It's cold"
    

//   Exercise 7

const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
      
  const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
  const makeSound = sound => alert(sound)
      
  explode(shineLight, makeSound, "BOOM")
  
// I add      <div id="box" style="width: 100px; height: 100px; background-color: black;"></div>

