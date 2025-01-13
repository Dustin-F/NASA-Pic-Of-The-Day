# NASA-Pic-Of-The-Day

This is a simple web application that allows users to retrieve NASA's Astronomy Picture of the Day (APOD) for a specific date using the NASA API. The application fetches an image and its explanation, and displays it to the user in an interactive and visually appealing layout.

## Features
- Allows users to input a date and fetch NASA's Astronomy Picture of the Day (APOD) for that date.
- Displays the title, image, and explanation of the selected APOD.
- Utilizes the NASA API to retrieve the image and its description.

## How It Works
1. **User Interaction**: The user inputs a date via a date picker and clicks the "Get Media" button.
2. **Fetch Data**: The application constructs a request URL using the provided date and fetches data from NASA's APOD API.
3. **Display Data**: If the API response contains a high-definition image URL (`hdurl`), the image, title, and explanation are displayed on the page. If no HD image is available, an appropriate message is shown.
4. **Error Handling**: If there is any issue fetching the data, an error message is logged in the console.

## Files
- **index.html**: The main HTML structure of the application.
- **main.js**: The JavaScript that handles fetching data from NASA API and updating the DOM.
- **style.css**: The stylesheet that styles the page, providing a clean and modern look.

## API Used
The application uses the [NASA Astronomy Picture of the Day (APOD) API](https://api.nasa.gov/) to retrieve the image and its corresponding explanation.

## Screenshots
Here is a screenshot of the web application:

![Screenshot description](img/screenshot.png)
