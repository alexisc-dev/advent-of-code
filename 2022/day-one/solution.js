const fs = require('fs');

fs.readFile('input.txt', "utf8", function(err, elfList) {
    let phattestBoi = 0;
    let phatterBoi = 0;
    let phatBoi = 0;

    //splits the elfList data by each double new line
    //which produces a string of number and new line characters for each elf
    let elfArray = elfList.split((/\r?\n\n/))

    //iterates through each elf
    elfArray.forEach((elf) => {
        //splits the string by each new line character, representing each indiividual snack the elf has
        let elfRation = elf.split((/\r?\n/))

        //at this stage we have an array for each elf's individual ration, with each indiivdual snack represneted by a string of numbers within said array.

        //we now need to map each array and parse it to an integer so that we can sum the totals. 
        let elfRationIntArray = elfRation.map((ration) => {
            return parseInt(ration)
        })

        //Sum the numbers of each elfRationIntArray item
        let elfSum = 0;
        for (const ration of elfRationIntArray) {
            elfSum += ration;
        }

        //compare sum to phat boi
        //if greater than phat boi:
        // .  1. Replace phatboi with phatter boi
        //      2. Replace phatterboi with phattest
        //      3. Replace phattest with sum
        
        //if not, move on to next elf
        if (elfSum > phattestBoi){
            phatBoi = phatterBoi;
            phatterBoi = phattestBoi;
            phattestBoi = elfSum;
        //If the sum is smaller than the phattest boi and bigger than phatter boi, set the sum to phatter boi
        } else if (elfSum > phatterBoi) {
            phatBoi = phatterBoi;
            phatterBoi = elfSum;
        //Otherwise, If the sum is smaller than both phattest boi and phatter boi, but bigger than phat boi, set the sum to the new value of phat boi
        } else if (elfSum > phatBoi) {
            phatBoi = elfSum
        }
        // console.log(phattestBoi, phatterBoi, phatBoi)
    })
    console.log(phattestBoi + phatterBoi + phatBoi);
})







//iterate through list
//check if integer or new line
//if integer, add to prev number
//if newline, no count
//which sum is the biggest largest?
