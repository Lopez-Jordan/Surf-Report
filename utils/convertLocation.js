function avgWave(inputArr){
    let total = 0
    let num = 0;
    for(let el of inputArr){
      num++;
      total += el;
    }
    return total/num;
}
  
function degreesToCardinal(degrees) {
    const cardinalDirections = ['North', 'North East', 'East', 'South East', 'South', 'South West', 'West', 'North West'];
    const index = Math.round((degrees % 360) / 45) % 8;
    return cardinalDirections[index];
}

async function fetchLocationData(lat, long) {
    const roundedLat = parseFloat(lat).toFixed(3);
    const roundedLong = parseFloat(long).toFixed(3);
    try {
    const response = await fetch('https://api.windy.com/api/point-forecast/v2', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        lat: roundedLat,
        lon: roundedLong,
        model: "gfsWave",
        parameters: ["waves"],
        key: "Eo25N5d4bTDvvFyP1JteaSMFMbFV9giA"
        })
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();

    const newWaveHeight = avgWave(data["waves_height-surface"]) * 3.28084; // to convert to feet
    const newWavePeriod = avgWave(data["waves_period-surface"]);  // in seconds
    const newWaveDirection = degreesToCardinal(avgWave(data["waves_direction-surface"]));  //convert to North, East, South, West, North East, South East, South West, North West

    return {
        waveHeight: newWaveHeight,
        wavePeriod: newWavePeriod,
        waveDirection:  newWaveDirection,
    };
    } catch (error) {
    console.error('Fetch error:', error);
    }


}

module.exports = {
    fetchLocationData,
    degreesToCardinal,
    avgWave
};


async function main() {
    const result = await fetchLocationData(33.426, -117.611);
    console.log(result);
}

main();

// Virginia needs to dynamically generate cards from the fetch('/') Method: get 
    // for card of `gotten cards` {
            // let location = await fetchLocationData(card.lat, card.long)
    //}




// chris in his card handlebars 
// {{#each Location as |location|}}