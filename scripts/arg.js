#!/usr/bin/node

if (arguments.length === 0) {
    console.log("No argument");
} else if (arguments.length === 1) {
    console.log("Argument found");
} else if (arguments.length > 1) {
    console.log("Arguments found");
}