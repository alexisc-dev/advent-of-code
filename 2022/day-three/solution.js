const { clear } = require('console');
const fs = require('fs');
const PRIORITIZATION = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]

//import text file
fs.readFile('input.txt', "utf8", function(err, packingList) {
    //split text file into individual lines (rucksacks)
    let rucksackArray = packingList.split((/\r?\n/));
    let elfGroupings = []
    let holdingPen =[]

    //iterate through each bag and add to temporary group array
    rucksackArray.forEach((rucksack) => {
        holdingPen.push(rucksack);
        if(holdingPen.length >= 3) {
            elfGroupings.push(holdingPen);
            holdingPen = []
        } 
    })
    // console.log( elfGroupings);

    let badgeArray = elfGroupings.map((group) => {
        // console.log(group)
        let bag1 = group[0];
        let bag2 = group[1];
        let bag3 = group[2];
        let tempGroup = []

        for (let item of bag1) {
            if(bag2.includes(item)){
                if(bag3.includes(item)){
                    tempGroup.push(item);
                }
            }
        }
        return tempGroup[0]
    })

    console.log(badgeArray)
    let numberArray = badgeArray.map((item) => {
        //turn each item into it's prioritization number based on the commented map above. This value is equivalent to the index of the same value in PRIORITIZATION + 1 (index+1)
        return PRIORITIZATION.indexOf(item)+1;
    })

    //sum the prioritization
    let prioritisationSum = numberArray.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    })

    console.log(prioritisationSum);

    /**
     * We have an array called elfGroupings that contains sub arrays of 3 strings, with one character that is common to all three. 
     * 
     * e.g: 
     *  [
     *      ["string1", "string2", "string3"]
     *      ["string4", "string5", "string6"]
     *  ]
     * 
     * Next, we need to loop through each subarray of three strings, and identify which is the one common character. This is the groups badge.
     * 
     * We need to push that badge to the badgeArray, for later prioritization and summing. 
     * 
     * Finally, we will sum the value of the Badges array for our answer, using the same prioritization points as above. 
     */










    return;
    //check length with each addition

    //once the length is three, push to an array of elf groups

    // //split each rucksack into compartments
    // let items = rucksackArray.map(rucksack => {
    //     let temp = [];
    //     let compartmentA = rucksack.substring(0, rucksack.length/2)
    //     let compartmentB = rucksack.substring((rucksack.length/2))

    //     //check for dulicates, push the duplicated item to an array for processing
    //     for (let itemA of compartmentA) {
    //         if(compartmentB.includes(itemA)){
    //             temp.push(itemA)
    //         }
    //     }

    //     // console.log(temp[0])
    //     return temp[0]
    // });

    // //transform letter types into prioritization integers
    // //a-z is 1-26
    // //A-Z is 27-52

    // let numberArray = items.map((item) => {
    //     //turn each item into it's prioritization number based on the commented map above. This value is equivalent to the index of the same value in PRIORITIZATION + 1 (index+1)
    //     return PRIORITIZATION.indexOf(item)+1;
    // })

    // //sum the prioritization
    // let prioritisationSum = numberArray.reduce((previousValue, currentValue) => {
    //     return previousValue + currentValue;
    // })

    // console.log(prioritisationSum);
});

//Solution 2:
//load each bag into the programme
//create a group array
//iterate through each bag and add to the group array
//check length with each addition
//once the length is three, push to an array of elf groups
//clear the group array
//continue adding and checking for a length of three until all bags are grouped