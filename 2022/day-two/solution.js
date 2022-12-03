const fs = require('fs');

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;
const WIN = 6;
const TIE = 3;
const LOSS = 0;

fs.readFile('input.txt', "utf8", function(err, strategyGuide) {
    //set letter combinations as constants
    //A=Rock B=Paper C=Scissors
    //X=Lose Y=draw Z=Win   
    const outcome1 = "AX"; //Rock lose -> scissors -> multiplier
    const outcome2 = "AY"; //rock draw -> rock
    const outcome3 = "AZ"; //rock win -> paper
    const outcome4 = "BX"; //paper lose -> rock
    const outcome5 = "BY"; //paper draw -> paper
    const outcome6 = "BZ"; //paper win -> scissors
    const outcome7 = "CX"; //scissors lose -> paper
    const outcome8 = "CY"; //scissors draw -> scissors 
    const outcome9 = "CZ"; //scissors win -> rock
    
    //calculate the multiplyer to apply to the final sum (value of all points per round)
    const multiplier1 = LOSS + SCISSORS;
    const multiplier2 = TIE + ROCK;
    const multiplier3 = WIN + PAPER;
    const multiplier4 = LOSS + ROCK;
    const multiplier5 = TIE + PAPER;
    const multiplier6 = WIN + SCISSORS;
    const multiplier7 = LOSS + PAPER;
    const multiplier8 = TIE + SCISSORS;
    const multiplier9 = WIN + ROCK;

    //sum of occurences (*by multiplyer to generate final score)
    let sum1 = 0;    
    let sum2 = 0;    
    let sum3 = 0;
    let sum4 = 0;
    let sum5 = 0;
    let sum6 = 0;
    let sum7 = 0;
    let sum8 = 0;
    let sum9 = 0;

    //convert raw text to rounds (letter pairs)
    let roundArray = strategyGuide.split((/\r?\n/));

    //trim whitespace
    let trimmedArray = roundArray.map((round)=>{
        return round.replace(' ', '');
    })

    // console.log(trimmedArray);

    //iterate and sum letter combination occurences
    trimmedArray.forEach(round => {
        if (round === outcome1){
            sum1 += 1;
        } else if (round === outcome2){
            sum2 += 1;
        } else if (round === outcome3){
            sum3 += 1;
        } else if(round === outcome4){
            sum4 += 1;
        } else if(round === outcome5){
            sum5 += 1;
        } else if(round === outcome6){
            sum6 += 1;
        } else if(round === outcome7){
            sum7 += 1;
        } else if(round === outcome8){
            sum8 += 1;
        } else if (round === outcome9){
            sum9 += 1;
        }
    });

    trimmedArray.forEach(round => {
        //if A and draw(rock) outcome
    })

    sum1 *= multiplier1;
    sum2 *= multiplier2;
    sum3 *= multiplier3;
    sum4 *= multiplier4;
    sum5 *= multiplier5;
    sum6 *= multiplier6;
    sum7 *= multiplier7;
    sum8 *= multiplier8;
    sum9 *= multiplier9;

    console.log(sum1 + sum2 + sum3 + sum4 + sum5 + sum6 + sum7 + sum8 + sum9);
    
    //multiply occurence by respective point values

});