"use strict";
// URL for the instructions:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
// let spacecraftName: string = "Determination";
// let speedMph: number = 17500;
var kilometerToMars = 225000000;
var kilometersToTheMoon = 384400;
// const milesPerKilometer: number = 0.0621;
// Part 2: Print Days to Mars
// let milesToMars: number = kilometerToMars * milesPerKilometer;
// let hoursToMars: number = milesToMars / speedMph;
// let daysToMars: number = hoursToMars / 24;
// Code an output statement here (use a template literal):
// console.log(`It will take ${spacecraftName} ${Math.round(daysToMars * 100) / 100} to reach mars`)
// Part 3: Create a Function ("getDaysToLocation")
// function getDaysToLocation(kilometersAway: number, speed = 17500): number {
//   const milesToDestination = kilometersAway * milesPerKilometer;
//   const hoursToDestination = milesToDestination / speed;
//   const daysToDestination = hoursToDestination / 24;
//   return daysToDestination;
// }
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// console.log(
//   `It will take ${spacecraftName} ${Math.round(getDaysToLocation(kilometerToMars) * 100) / 100} to reach mars`
//   );
//   console.log(
//     `It will take ${spacecraftName} ${Math.round(getDaysToLocation(kilometersToTheMoon) * 100) / 100} to reach the moon`
//     );
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway, speed) {
        if (speed === void 0) { speed = this.speedMph; }
        var milesToDestination = kilometersAway * 0.621;
        var hoursToDestination = milesToDestination / speed;
        var daysToDestination = hoursToDestination / 24;
        return daysToDestination;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.name, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to get to ").concat(location.name, "."));
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var mars = new SpaceLocation_1.SpaceLocation("Mars", kilometerToMars);
var moon = new SpaceLocation_1.SpaceLocation("Moon", kilometersToTheMoon);
var shuttle = new Spacecraft("Determinatimon", 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// console.log(`It will take ${shuttle.name} ${shuttle.getDaysToLocation(kilometerToMars)} days to reach mars`);
// console.log(`It will take ${shuttle.name} ${shuttle.getDaysToLocation(kilometersToTheMoon)} days to reach the moon`);
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
shuttle.printDaysToLocation(mars);
shuttle.printDaysToLocation(moon);
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
