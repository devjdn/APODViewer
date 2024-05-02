document.querySelector('.fetch-apod').addEventListener('click', getFetch);

        function getFetch(){
            const choice = document.querySelector('input').value;
            console.log(choice);

            const spinner = document.querySelector('.spinner');
            spinner.style.display = 'block'; // Show loading spinner

            const mainApodUrl = `https://api.nasa.gov/planetary/apod?api_key=8p7wu7IiHjpbujhNGUIRWU8QgAOORkuvVSFWxBEV&date=${choice}`;

            fetch(mainApodUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.media_type === 'image') {
                    document.querySelector('.apod-img').src = data.hdurl;
                    document.querySelector('iframe').style.display = 'none';
                    document.querySelector('.apod-img').style.display = 'block';
                } else if (data.media_type === 'video') {
                    document.querySelector('iframe').src = data.url;
                    document.querySelector('.apod-img').style.display = 'none';
                    document.querySelector('iframe').style.display = 'block';
                }
                document.querySelector('.apod-explanation').innerText = data.explanation;
                document.querySelector('.apod-title').innerText = data.title;
                // Hide loading spinner after receiving response
                spinner.style.display = 'none';
            })
            .catch(err => {
                console.log(`error ${err}`);
                // Hide loading spinner in case of error
                spinner.style.display = 'none';
            });
        }

        getFetch();

        const apodPopupBtn = document.querySelectorAll('.apodPopupBtn');
        const apodPopupMenu = document.getElementById('apodPopupMenu');

        apodPopupBtn.forEach(button => {
            button.addEventListener('click', function() {
            const isHidden = apodPopupMenu.getAttribute('aria-hidden') === 'true';
            apodPopupMenu.setAttribute('aria-hidden', !isHidden);
        });
        });

        document.querySelector('.fetch-count').addEventListener('click', fetchOtherApods);

        function fetchOtherApods() {
            const count = document.getElementById('countValue').value;
            const otherApodUrl = `https://api.nasa.gov/planetary/apod?api_key=8p7wu7IiHjpbujhNGUIRWU8QgAOORkuvVSFWxBEV&count=${count}`;
            
            fetch(otherApodUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                displayImages(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
        }
        function displayImages(apodData) {
                var apodImagesContainer = document.getElementById('otherApods');
                apodImagesContainer.innerHTML = ''; // Clear previous images

                apodData.forEach(apod => {
                    var img = document.createElement('img');
                    img.src = apod.url;
                    img.alt = apod.title;
                    apodImagesContainer.appendChild(img);
            });
        }

        fetchOtherApods();