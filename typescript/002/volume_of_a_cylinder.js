"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this is to calculate the volume of a cylinder
var readline = require("readline");
function calculate_volume(radius, height) {
    return Math.PI * radius * radius * height;
}
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter the radius: ", function (radius_input) {
    var radius = parseFloat(radius_input || "0");
    rl.question("Enter the height: ", function (height_input) {
        var height = parseFloat(height_input || "0");
        var volume = calculate_volume(radius, height);
        console.log("The volume of the cylinder of radius ".concat(radius, " and height ").concat(height, " is ").concat(volume));
        rl.close();
    });
});
