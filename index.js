// index.js

// The code below is temporary and can be commented out.
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
  

});

// The code below is temporary and can be commented out.
const ip = '162.245.144.188';
fetchCoordsByIP(ip, (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);
});

const coords = { latitude: '49.27670', longitude: '-123.13000' };
fetchISSFlyOverTimes(coords, (error, flyover) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned fly over:' , flyover);
});