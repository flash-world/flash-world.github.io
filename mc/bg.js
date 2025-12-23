        // cool backgrounds
        var numofBackgrounds = 131
        var fpics = document.querySelector("fpic");
        var fpiclinks = document.querySelector("fpiclink");
        function changeBackground() {
            var randomNumber = Math.floor(Math.random() * (numofBackgrounds - 1) + 1);
            var selectImage = 'url(https://alamc.ddns.net/fwmcRenders/bg' + randomNumber + '.jpg)';
            var bgpicImage = 'https://alamc.ddns.net/fwmcRenders/bg' + randomNumber + '.jpg';
            document.body.style.backgroundImage = selectImage
            document.body.style.backgroundSize = 'cover'; //cour
            document.body.style.backgroundRepeat = 'no-repeat'; // I HATE REPEAT
            document.body.style.backgroundAttachment = 'fixed'
            document.body.style.backgroundPosition = 'center center'
            document.getElementById("bgpiclink").href = bgpicImage
            document.getElementById("bgpic").src = bgpicImage
        }

        window.onload = function () {
            changeBackground();
        };