// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; // Scuber headquarters location
    const distance = Math.abs(pickupLocation - hqLocation);
    return distance;8
    console.log("Distance from Scuber headquarters:", distance, "blocks")
}

module.exports = {
    distanceFromHqInBlocks: distanceFromHqInBlocks
};

const pickUpLocation = 50;
const distance = distanceFromHqInBlocks(pickupLocation);
console.log("Distance from Scuber headquarters:", distance, "blocks");

function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feet = blocks * 264; 
    return feet;2112
}
const pickupLocation = 50;
console.log("Distance from Scuber headquarters in blocks:", distanceFromHqInBlocks(pickupLocation));
console.log("Distance from Scuber headquarters in feet:", distanceFromHqInFeet(pickupLocation));

function distanceTravelledInFeet(startBlock,destinationBlock){
   const blocksTravelled=Math.abs( destinationBlock-startBlock)
   const feetTravelled = blocksTravelled * 264
   return feetTravelled;
}

const startBlock = 34;
const destinationBlock = 38;
console.log("Distance travelled in feet:", distanceTravelledInFeet(startBlock, destinationBlock));

function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = Math.abs(endBlock - startBlock) * 264; 

    if (distanceInFeet <= 400) {
        return 0; 
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        
        return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        
        return 25;
    } else {
        
        return 'cannot travel that far';
    }
}


console.log(calculatesFarePrice(34, 34)); 
console.log(calculatesFarePrice(34, 38)); 
console.log(calculatesFarePrice(34, 50)); 
console.log(calculatesFarePrice(34, 60)); 






