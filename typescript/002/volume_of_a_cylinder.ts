
// this is to calculate the volume of a cylinder
import * as readline from "readline";

function calculate_volume(radius: number, height: number): number {
    return Math.PI * radius * radius * height;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the radius: ", (radius_input) => {
    const radius = parseFloat(radius_input || "0");

    rl.question("Enter the height: ", (height_input) => {
        const height = parseFloat(height_input || "0");
        const volume: number = calculate_volume(radius, height);

        console.log(`The volume of the cylinder of radius ${radius} and height ${height} is ${volume}`);
        rl.close();
    });
});
