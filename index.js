const video = document.getElementById("video-bg");

function moveVideo(event) {
    const xOffset = -event.clientX / 0;
    const yOffset = -event.clientY / 0;
    video.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
}

document.addEventListener("mousemove", moveVideo);

function redirectToCloudArchitectPage() {
    window.location.href = "/primer.html";
  }
  

function redirectToCloudEngineerPage() {
    window.location.href = "";
  }

function redirectToCloudAnalystPage() {
    window.location.href = "";
  }
function redirectToCloudAdministratorPage() {
    window.location.href = "";
  }

function redirectToCloudDeveloperPage() {
    window.location.href = "";
  }