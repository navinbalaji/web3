# WEB3 

## _Installation_
- git clone [Link text Here](https://github.com/navinbalaji/web3)
- Run npm install
- Run npm start

## Features

- In the dashboard page it will list down the upcomming calender events
- In the stats page in the top right side widget will show you the last 5 transaction of your wallet address in the metamask extension
- In the bottom right side widget will show the etherium latest block height and it will refresh every 3000 millisecons

## Libraries used
- @reduxjs/toolkit
- react-google-calendar-api (https://www.npmjs.com/package/react-google-calendar-api)
- react-router-dom
- @mui/material
- @mui/icons-material

## Working
  - Dashboard
        In the dashboard page a google signin option would be there we need to click and the allow and authorize the calender permissions and the click on the list all events button to list you upcomming calender events
        (The react-google-calendar-api i had looked that its a pretty decent downloads and active i checked on that there is no mallware to send the events to the third part server . It just create a script tag and inject the CDN in the HTML head)
   - Stats
         In the stats page there is a button if you click on that that will connect your metamask extension on your browser and the get the wallet address.
         By using the wallet address we can fetch the latest 5 transactions
         In the bottom right the etherium block height will change every 3000ms

## Reference
   - Google calender (https://developers.google.com/calendar/api)
