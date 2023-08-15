AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

// PRODUCE A DIFFERENT FEATURED-IMAGE FOR EACH CARD
// Array of possible image filenames
const imageCount = 50; // Number of images in the folder

// Loop through each beach card and set a random background image
const beachCards = document.querySelectorAll('.beach-card');
beachCards.forEach(card => {
  const featuredImgElement = card.querySelector('.featured-img');
  const randomImageNumber = Math.floor(Math.random() * imageCount) + 1;
  const randomImageSrc = `/images/surf/surfing-${randomImageNumber}.jpg`;
  featuredImgElement.style.backgroundImage = `url(${randomImageSrc})`;
});

dayjs();
var todayDate = dayjs().format("MM/DD/YYYY");

var todayDateEl = (document.getElementById("todaysDate").textContent =
  todayDate);


function unsplashAPI() {
  var apiKey = "Ab4F25pH3_s49oNWOzNXoahqu18przepQm1JgDMKkZA";
  var apiKey2 = "oeF6_nedrYDZgPYD3W22C9NSsJsCa0DeZfWTlHO7u2I";
  var apiKey3 = "BhBNA4hLuZrHL_xWMeD4BgR-aMZgW07kKJhE4iDhk7E";

  var requestURL =
    "https://api.unsplash.com/photos/random?query=surf&client_id=" +
    apiKey3;

  fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {

      var photoUrl = data.urls.regular;

      // document.body.querySelector('main article aside').style.backgroundImage =
      // "url(" + photoUrl + ")";

      document.body.setAttribute(
        "style",
        "background-image:url(" + photoUrl + ")"
      );
 
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}



unsplashAPI();
favoritesDisplay();
// unsplashAPI();
// https://api.unsplash.com/search/collections?page=1&query=office

// Make a GET request to Unsplash API for a random photo

  // city location lat and long finder function - created by Jordan
  async function getLocationData(name) {
    var url = "https://api.openweathermap.org/geo/1.0/direct?q=" + name + "&limit=5&appid=9bce6875713db412816a04531af13ead";
    var newResponse = await fetch(url);
    var response = await newResponse.json();
    return response;
  }
  document.getElementById("cityForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const cityNameInput = document.getElementById("cityName");
    const locationResult = document.getElementById("locationResult");
    try {
      const cityName = cityNameInput.value;
      const locationData = await getLocationData(cityName);
      const latitude = locationData[0]?.lat;
      const longitude = locationData[0]?.lon;
      locationResult.innerHTML = `Latitude: ${latitude}<br>Longitude: ${longitude}`;
    } catch (error) {
      locationResult.innerHTML = "An error occurred while fetching data.";
      console.error("An error occurred:", error);
    }
  });
