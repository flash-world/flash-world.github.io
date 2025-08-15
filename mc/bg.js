        // cool backgrounds
        var numofBackgrounds = 115
        var fpics = document.querySelector("fpic");
        var fpiclinks = document.querySelector("fpiclink");
        function changeBackground() {
            var randomNumber = Math.floor(Math.random() * (numofBackgrounds - 1) + 1);
            var selectImage = 'url(https://alamc.ddns.net/fwmcRenders/bg' + randomNumber + '.jpg)';
            document.body.style.backgroundImage = selectImage
            document.body.style.backgroundSize = 'cover'; //cour
            document.body.style.backgroundRepeat = 'no-repeat'; // I HATE REPEAT
            document.body.style.backgroundAttachment = 'fixed'
        }

        window.onload = function () {
            changeBackground();
        };