document.getElementById('get-media-btn').addEventListener('click', getFetch);

function getFetch() {
    const choice = document.getElementById('date-input').value;
    const url = `https://api.nasa.gov/planetary/apod?api_key=P6sClW9icRNqWeKwSYIPksmY4Ipzzj98mUFxEXbe&date=${choice}`;

    fetch(url)
        .then(res => res.json())  // Parse response as JSON
        .then(data => {
            console.log(data); // Check the data structure here
            // Make sure `hdurl` is available in the response
            if (data.hdurl) {
                // Update the page with the data
                document.getElementById('title').innerText = data.title;  // Assuming you add an element with id 'title'
                document.getElementById('media-img').src = data.hdurl;
                document.getElementById('explanation').innerText = data.explanation;
            } else {
                console.error('No HD image URL found!');
                document.getElementById('explanation').innerText = 'No HD image available for the selected date.';
            }
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
}
