const btnEl = document.querySelector(".btn");
const closeEl = document.querySelector(".close-icon");
const trailerContainer = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");


btnEl.addEventListener("click", ()=>{
    trailerContainer.classList.remove("active");
}); 

closeEl.addEventListener("click", ()=>{
    trailerContainer.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
});

