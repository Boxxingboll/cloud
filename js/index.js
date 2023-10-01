/* Video */
const video = document.getElementById("video-bg");

function moveVideo(event) {
  const xOffset = -event.clientX / 0;
  const yOffset = -event.clientY / 0;
  video.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
}

document.addEventListener("mousemove", moveVideo);

/* Navegación */

function redirectToCloudArchitectPage() {
  window.location.href = "http://localhost/roads/CloudEngineer.html";
}

function redirectToCloudEngineerPage() {
  window.location.href = "http://localhost/roads/CloudEngineer.html";
}

function redirectToCloudAnalystPage() {
  window.location.href = "http://localhost/roadMap/roads/CloudAnalyst.html";
}
function redirectToCloudAdministratorPage() {
  window.location.href = "http://localhost/roadMap/roads/CloudAdministrator.html";
}

function redirectToCloudDeveloperPage() {
  window.location.href = "http://localhost/roadMap/roads/CloudDeveloper.html";
}