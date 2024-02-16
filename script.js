document.addEventListener("DOMContentLoaded", function() {
  var hasFlash = false;
  try {
    var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
    if (fo) {
      hasFlash = true;
    }
  } catch (e) {
    if (navigator.mimeTypes
      && navigator.mimeTypes['application/x-shockwave-flash'] != undefined
      && navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
      hasFlash = true;
    }
    if (hasFlash != true) {
      var gameElement = document.getElementById("Game");
      if (gameElement) {
        gameElement.innerHTML = '<p>You are not using flash player. Running Ruffle Emulation</p>';
        var script = document.createElement('script');
        script.src = "https://unpkg.com/@ruffle-rs/ruffle";
        script.onload = function() {
          // Replace the papa flash game with the Ruffle emulation
          var ruffleGame = document.createElement('object');
          ruffleGame.setAttribute("data", "");
          ruffleGame.setAttribute("type", "application/x-shockwave-flash");
          ruffleGame.setAttribute("width", "600");
          ruffleGame.setAttribute("height", "400");
          ruffleGame.setAttribute("style", "display:block; margin:auto;");;
          gameElement.innerHTML = ''; // Clear the inner HTML
          gameElement.appendChild(ruffleGame); // Append the Ruffle game
        };
        document.body.appendChild(script);
      } else {
        console.error("Game element not found");
      }
    }
  }
});