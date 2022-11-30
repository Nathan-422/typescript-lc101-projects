// URL for the instructions:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html

// Part 1: Declare (5) Variables With Type
// let spacecraftName: string = "Determination";
// let speedMph: number = 17500;
// let kilometerToMars: number = 225000000;
// let kilometersToTheMoon: number = 384400;
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

class Spacecraft {
  milesPerKilometer = 0.621;
  name: string;
  speedMph: number;

  constructor(name: string, speedMph: number) {
    this.name = name;
    this.speedMph = speedMph;
  }

  getDaysToLocation(kilometersAway: number, speed = this.speedMph): number {
    const milesToDestination = kilometersAway * 0.0621;
    const hoursToDestination = milesToDestination / speed;
    const daysToDestination = hoursToDestination / 24;
    return daysToDestination;
  }
}

// Create an instance of the class here:

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.

// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.

// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
