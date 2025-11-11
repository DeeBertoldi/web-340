'use strict';

function calculateDistance(planet1, planet2) {
  // TODO: Implement this function
  // source: https://www.jpl.nasa.gov/_edu/pdfs/ssbeads_answerkey.pdf
  const distances = {
    Sun: 0.0,
    Mercury: 0.4,
    Venus: 0.7,
    Earth: 1.0,
    Mars: 1.5,
    Jupiter: 5.2,
    Saturn: 9.5,
    Uranus: 19.8,
    Neptune: 30.1,
    Pluto: 39.5,
  };

  const distance1 = distances[planet1];
  const distance2 = distances[planet2];

  if (distance1 === undefined || distance2 === undefined) {
    throw new Error('Invalid planet name');
  }

  return Math.abs(distance1 - distance2); // Distance in AU 
}

module.exports = calculateDistance;