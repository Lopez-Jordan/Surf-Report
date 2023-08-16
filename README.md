# Surf-Report
  [![GitHub License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

  ### Table of Content
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Documentation](#documentation)
  * [Developer Information](#developer-information)
  * [License](#license)

  ### Description:
    Surf Report is a platform where surfers can find information on the current surf conditions given a searched beach, share their experiences and find educational content related to the science of surfing. The goal and inspiration was to help surfers plan ahead to find out the current surf conditions before leaving their homes, save time by deciding whether it is a good day for surfing, and help them choose the best location nearby to take the most out of a surfing day. This project was part of the UC Berkeley coding bootcamp program.

  ### Installation:
  - run "npm install"
  - run "mysql -u root -p", enter your mysql password, then run "source ./db/schema.sql"
  - run "npm start"
  - open "http://localhost:3001" on the browser

  ### Usage:
  - Users can enter the homepage by entering the [deployed URL](https://surf-report-app-7b1dc82c323b.herokuapp.com/) in their browser. 
  - Once in the homepage, the user is presented with a nice user interface that hooks them to stay in the page and explore its features. 
  - At the homepage the user is presented with a navbar to redirect to the homepage, the blog, the connectios or to the login section. 
  - If the user does not have an account yet, they should create one before logging in by inputting a valid username and password inside the designated forms and clicking the signup button. 
  - If the user already have a login, they just need to input the existing username and password inside the designated forms and clicking the login button. 
  - Once logged in, the user can scroll down the page to the section where they can search for the beach of their interest.
  - The favorite beaches section displays the current date to confirm that any retrieved data will be reflecting conditions as of the current day.
  - User can input in the "enter a city name" form the name of the city where they would like to go to the beach and click on the "get location" button.
  - The application then displays the latitude and longitude for the desired location.
  - User must copy the latitude and longitude provided and paste it in the respective forms and click the "find beach" button.
  - Every time a new beach is searched, it is added as a card to the "favorite beaches" section.
  - For each beach of the "favorite beaches" section the user can find information such as the wave height (in feet), the swell direction (geographic coordinates) and the swell period (in seconds).
  - Below the information there is a "share your experience" form where users can add comments to each location and submit it by clicking the "update journal" button.
  - After submitting their comments, the user can see the comments at the "surf journal" that is listed together with the surf conditions.
  - If user would like to delete that location from their favorite beaches they can do so by simply pressing the "Delete" button that is under the journal form.
  - Scrolling down to the bottom of the page the user can find educational information related to the surf science.
  - When done using the application the user have the option to logout by clicking "logout" on the nav bar.
  - ![screenshot](./public/images/usage-demo.gif)
  
  ### Documentation
  - [Mozilla Developer](https://developer.mozilla.org/en-US/)
  - [NPM Docs](https://docs.npmjs.com/)
  - [Point Forecast API](https://api.windy.com/point-forecast/docs) 
  - [Geocoding API](https://openweathermap.org/api/geocoding-api)
  - [DayJS](https://day.js.org/)
  - [AOS](https://michalsnik.github.io/aos/)
  - [Handlebars](https://handlebarsjs.com/guide/#nested-input-objects)
  - [Sequelize](https://sequelize.org/)
  
  ### Developer Information:
  - Chris Larson
  - GitHub URL: https://github.com/chlarson74
  - e-mail address: chlarson@everettcc.edu

  - Jordan Lopez
  - GitHub URL: https://github.com/lopez-jordan
  - e-mail address: jordanlopezemail@gmail.com

  - Virginia Freitas
  - GitHub URL: https://github.com/virginiafreitas
  - e-mail address: virginiacdefreitas@gmail.com

  ### License:
  The application is covered under the MIT license.
  