

// Exercise 1

const StringFormatter = function(){
    
    const capitalizeFirst = function(str){
    let tmp =""
    tmp += str[0].toUpperCase()
    str =  str.toLowerCase()
    tmp += str.slice(1)
    console.log(tmp)
   }
   
   const skewerCase = function(str){
    tmp = str.replace(" ","-")
     console.log(tmp)
   }
   return {
    capitalizeFirst: capitalizeFirst,
    skewerCase: skewerCase
   }
}

const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box") //should print blue-box

//Exercise 2
const Bank = function(){
   let money =  500
   const depositCash = function(cash) {
    money =  money + cash;
  
   }
   const checkBalance = () => console.log(money)
    return {
        deposit: depositCash,
        showBalance: checkBalance
    }
}
  
const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950

//Exercise 3

const SongsManager = function(){
    const songs = {}
    const addSong = (name,link) => {
    let newLink = ""   
        for(let i=0; i<link.length;i++){
          if( link[i] == "="){
            newLink = link.slice(i+1)
           } 
          }   
     songs[name] = newLink
  }
  const getSong = (name) => {
      const tmp = Object.keys(songs)
      for(let j=0; j<tmp.length;j++){
      if(tmp[j] == name)
          console.log("https://www.youtube.com/watch?v="+songs[name])
      }
  }
  return {
    addSong: addSong,
    getSong: getSong
  }
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")
songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ


