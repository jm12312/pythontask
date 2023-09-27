console.log("Welcome")

let i=1;
let audioElement = new Audio("songs/1.mp3")
let txt ;

let masterplay = document.getElementById("masterplay");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let progressBar = document.getElementById("progressBar");
let songitem = Array.from(document.getElementsByClassName("songItem"));
//audioElement.play()

let songs= [
  {songname: "Bones", filepath: "songs/0.mp3", coverpath: "bonesimg.jpg"},
  {songname: "Enemy", filepath: "songs/1.mp3", coverpath: "bonesimg.jpg"},
  {songname: "Believer", filepath: "songs/2.mp3", coverpath: "bonesimg.jpg"},
  {songname: "Whatever-It-Takes", filepath: "songs/3.mp3", coverpath: "bonesimg.jpg"},
  {songname: "How-Long", filepath: "songs/4.mp3", coverpath: "how_long.jpg"}
]

songitem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src= songs[i].coverpath;
  element.getElementsByClassName("song_name")[0].innerText= songs[i].songname;
  //element.getElementsByClassName("song1")[0].innerText= new Audio(songs[i].filepath).duration;
  let nyAudio = new Audio(songs[i].filepath);
  //console.log(nyAudio.)
  element.getElementsByClassName("song2").innerText= nyAudio.duration;
});

Array.from(document.getElementsByClassName("song2")).forEach((k)=>{
  k.innerText=(new Audio(songs[i].filepath)).currentTime;
}
)


masterplay.addEventListener("click", ()=>
  {
    if(audioElement.paused || audioElement.currentTime<=0)
    {
      audioElement.play();
      masterplay.classList.remove("fa-circle-play")
      masterplay.classList.add("fa-circle-pause")
      makeAllPlay(i);

    }
    else{
      audioElement.pause();
      masterplay.classList.remove("fa-circle-pause")
      masterplay.classList.add("fa-circle-play")
      makeAllPlay(-1);
    }
    
  })


function playNext(){
  if(i<4)
  {
  i++;
  }
  else
  {
    i=0;
  }
  makeAllPlay(i);
  audioElement.src="songs/"+ i+".mp3";
  audioElement.currentTime=0;
  audioElement.play();
  masterplay.classList.remove("fa-circle-play")
  masterplay.classList.add("fa-circle-pause")
  document.getElementById("songinfo").innerText=songs[i].songname;
}
next.addEventListener("click", ()=>
  {
    playNext();
  })

prev.addEventListener("click", ()=>
  {
    if(i>0)
    {
    i--;
    }
    else
    {
      i=4;
    }
    makeAllPlay(i);
    audioElement.src="songs/"+ i+".mp3";
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove("fa-circle-play")
    masterplay.classList.add("fa-circle-pause")
    document.getElementById("songinfo").innerText=songs[i].songname;
  })


audioElement.addEventListener("timeupdate", ()=>{
  //console.log("time update");
  progress = parseInt((audioElement.currentTime/audioElement.duration)*1000)
  //console.log(progress)
  progressBar.value = progress;
  if (audioElement.currentTime == audioElement.duration){
    playNext();
  }
})

progressBar.addEventListener("change", ()=>
  {
    audioElement.currentTime = progressBar.value * audioElement.duration / 1000;
    console.log(audioElement.currentTime);
  })



const makeAllPlay=(j)=>{
  Array.from(document.getElementsByClassName("songItemPlay")).forEach((element, i)=>{
    
      if(i!=j)
      {
      element.classList.add("fa-circle-play")
      element.classList.remove("fa-circle-pause")
      songitem[i].style.backgroundColor = "black";    
      }
      else{
        element.classList.add("fa-circle-pause")
        element.classList.remove("fa-circle-play")
        songitem[i].style.backgroundColor = "RebeccaPurple";
      }
  })  

}  
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
  element.addEventListener("click", (e)=>{
    //console.log(e.target)
    i=Number.parseInt(e.target.id);
    console.log("songs/"+ i+".mp3");
    makeAllPlay(i);
    e.target.classList.remove("fa-circle-play")
    e.target.classList.add("fa-circle-pause")
    audioElement.src="songs/"+ i+".mp3";
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove("fa-circle-play")
    masterplay.classList.add("fa-circle-pause")
    document.getElementById("songinfo").innerText=songs[i].songname;

  })
})