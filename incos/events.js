#!/usr/bin/node

if (process.argv.length > 3){
    for (let i = 2; i < process.argv.length; i++){
        console.log(process.argv[i]);
    }
}
if (process.argv == 3){
    console.log("Argument found");
}
else{
    console.log('No argument');
}