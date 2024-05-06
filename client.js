document.getElementById("fileInput").addEventListener("change", function () {
  const fileInput = document.getElementById("fileInput");
  const videoPlayer = document.getElementById("videoPlayer");

  const file = fileInput.files[0];
  const url = URL.createObjectURL(file);

  videoPlayer.src = url;
  videoPlayer.play();
});
