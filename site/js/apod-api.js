function getFetch(){
    const spinner = document.querySelector('.spinner');
    spinner.style.display = 'block'; // Show loading spinner

    const mainApodUrl = `https://api.nasa.gov/planetary/apod?api_key=8p7wu7IiHjpbujhNGUIRWU8QgAOORkuvVSFWxBEV`;

    fetch(mainApodUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.media_type === 'image') {
            document.querySelector('.apod-img').src = data.hdurl;
            document.querySelector('iframe').style.display = 'none';
            document.querySelector('.apod-img').style.display = 'block';
            if (data.copyright) {
                document.querySelector('.copyright').innerHTML = "Image by " + data.copyright;
            } else {
                document.querySelector('.copyright').innerHTML = "No credited owner";
            }
        } else if (data.media_type === 'video') {
            document.querySelector('iframe').src = data.url;
            document.querySelector('.apod-img').style.display = 'none';
            document.querySelector('iframe').style.display = 'block';

            if (data.copyright) {
                document.querySelector('.copyright').innerHTML = "Video by " + data.copyright;
            } else {
                document.querySelector('.copyright').innerHTML = "No credited owner";
            }
        }
        document.querySelector('.explanation').innerText = data.explanation;
        document.querySelector('.apod-title').innerText = data.title;
        document.getElementById('tweetButton').addEventListener('click', function() {
            // Compose tweet text
            var apodTitle = data.title; // Replace with actual APOD title
            var apodImageURL = data.hdurl;
            var tweetText = encodeURIComponent(apodTitle + " by "  + data.copyright + "\n" + "\n" + " (Via apodviewer.vercel.app)");
            
            // Open Twitter tweet intent in new window
            window.open("https://twitter.com/intent/tweet?text=" + tweetText + "\n" + "\n" + "&url=" + encodeURIComponent(apodImageURL), "_blank");
        })
        
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


document.querySelector('.fetch-apod').addEventListener('click', fetchHistoryApod);

function fetchHistoryApod(){
    const choice = document.querySelector('input').value;
    console.log(choice);

    const pastApodUrl = `https://api.nasa.gov/planetary/apod?api_key=8p7wu7IiHjpbujhNGUIRWU8QgAOORkuvVSFWxBEV&date=${choice}`;

    fetch(pastApodUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.media_type === 'image') {
            document.querySelector('.past-apod-img').src = data.hdurl;
            document.querySelector('.past-iframe').style.display = 'none';
            document.querySelector('.past-apod-img').style.display = 'block';
        } else if (data.media_type === 'video') {
            document.querySelector('.past-iframe').src = data.url;
            document.querySelector('.past-apod-img').style.display = 'none';
            document.querySelector('.past-iframe').style.display = 'block';
        }
        document.querySelector('.past-explanation').innerText = data.explanation;
        document.querySelector('.past-apod-title').innerText = data.title;
    })
    .catch(err => {
        console.log(`error ${err}`);
    });
}
        
fetchHistoryApod();



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
//---API LOADING ISSUE TEST