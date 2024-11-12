var playBtn=document.getElementById("play_button");
var music=document.getElementById("audio")
var image=document.getElementById("cover")
var next=document.getElementById("next")
var prev=document.getElementById("prev")
var container=document.querySelector(".container")
var title=document.getElementById("music_title")
var artist=document.getElementById("music_artist")
var pluseBtn=document.getElementById("pluseBtn")
var minusBtn=document.getElementById("minusBtn")

var songs=[
  'assest/1.mp3',
  'assest/2.mp3',
  'assest/3.mp3'
]
var images=[
  'assest/1.jpg',
  'assest/2.jpg',
  'assest/3.jpg'
]
var displayName=[
  'Exmpale1',
  'Example2',
  'Example3'
]
var artists=[
  'Anna',
  'Hanna',
  'DIXIT'
]
let isplaying=false;
let audioIndex=0;
let imageIndex=0;
let displayNameIndex=0;
let artistsIndex=0;
function playHandler(){
  isplaying=true
  audio.play()
  console.log("music play");
  playBtn.classList.replace("fa-play", "fa-pause");
 
}
function pauseHandler(){
  isplaying=false
  audio.pause()
  playBtn.classList.replace("fa-pause", "fa-play");
  console.log("music pause");
  
  
}
playBtn.addEventListener('click',function(){
  if(isplaying){
    pauseHandler()
  }
  else{
    playHandler()
  }
})
function nextMusic(){
  audioIndex++;
  imageIndex++;
  artistsIndex++;
  displayNameIndex++;
  if(audioIndex>songs.length-1){
    audioIndex=0;
  }
  audio.setAttribute('src',songs[audioIndex])
  image.setAttribute('src',images[audioIndex])
  if(displayNameIndex>displayName.length-1 && artistsIndex>artists.length-1  ){
    displayNameIndex=0; 
    artistsIndex=0;
    }
title.innerHTML =displayName[displayNameIndex];
artist.innerHTML=artists[artistsIndex]
  console.log(songs[audioIndex]);
  console.log(images[audioIndex]);
  console.log(displayName[displayNameIndex]);
  playHandler()
}
function prevMusic(){
  audioIndex--;
  imageIndex--;
  displayNameIndex--;
  artistsIndex--;
  if(audioIndex<0){
    audioIndex=2
  }
  audio.setAttribute('src',songs[audioIndex])
  image.setAttribute('src',images[audioIndex])
  if(displayNameIndex<0 && artistsIndex<0){
    displayNameIndex=2;
    artistsIndex=2;
  }
  title.innerHTML =displayName[displayNameIndex];
  artist.innerHTML=artists[artistsIndex];
  console.log(songs[audioIndex]);
  console.log(images[audioIndex]);
  playHandler()
  
}
let redValue, greenValue, blueValue

function changebg(){

    redValue = Math.floor(Math.random() * 50);
    greenValue = Math.floor(Math.random() * 50);
    blueValue = Math.floor(Math.random() * 100);
    document.body.style.backgroundColor = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')'
    container.style.backgroundColor="#e7e7e71a";
}
function timePlusMusic(){
  music.currentTime+=5
}
function timeMinuMusic(){
  music.currentTime-=5
}

next.addEventListener('click',changebg)
prev.addEventListener('click',changebg)

next.addEventListener('click',nextMusic)
prev.addEventListener('click',prevMusic)

pluseBtn.addEventListener('click',timePlusMusic)
minusBtn.addEventListener('click',timeMinuMusic)