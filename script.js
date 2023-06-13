const drumPads = document.querySelectorAll(".drum-pad");

drumPads.forEach((pad) => {
  pad.addEventListener("click", () => {
    const audio = pad.querySelector("audio");
    audio.currentTime = 0;
    audio.play();
    document.querySelector("#display").innerText = pad.id;
  });
});

drumPads.forEach((pad) => {
  document.addEventListener("keydown", (e) => {
    const audio = pad.querySelector("audio");
    if (e.key.toUpperCase() === audio.id) {
      const audio = pad.querySelector("audio");
      audio.currentTime = 0;
      audio.play();
      document.querySelector("#display").innerText = pad.id;
      pad.classList.add("active");
    }
  });
});

drumPads.forEach((pad) => {
  document.addEventListener("keyup", (e) => {
    pad.classList.remove("active");
  });
});
