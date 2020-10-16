//all the div elements that have a class of key
const allKeys=document.querySelectorAll(".key");
//all the audio elements that have a class of audio
const allAudio=document.querySelectorAll("audio")


window.addEventListener("keydown",(e)=>{
  //look at each individual div element that has a class  attribute of key
  allKeys.forEach((key)=>{
    //if e.keyCode(the number we enter) equals the value for the data-key attribute of the div, add a class named playing to the div.Playing is what caused the yellow hovering etc.
    //the value of an attribute is in string form so we have to make e.keyCode equal to a string as well for them to be equal.
    if(key.getAttribute("data-key")===`${e.keyCode}`){
      key.classList.add("playing");
    }
  })
  allAudio.forEach((audio)=>{
    //when keydown is fired, if e.keyCode equals the data-key attribute of the audio element,play that specific audio
    if(audio.getAttribute("data-key")===`${e.keyCode}`){
      //rewind audio to 0, before playing
      audio.currentTime=0;
      audio.play();
    }
  })
})


window.addEventListener("keyup",(e)=>{
  //look at each individual div element that has a class  attribute of key
  allKeys.forEach((key)=>{
    //if the div element has a class attribute of playing, remove that class, when keyup is fired. Otherwise, div will always stay highlighted,and we don't want that.
    if(key.classList.contains("playing")){
      key.classList.remove("playing")
    }
  })
})
