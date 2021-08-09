let numberOfParticipants = partseInt(readline());
let sumArray = [];
for(let i = 0; i < numberOfParticipants; i++){
    let marks = readline().split(' ').map(x => parseInt(x));
    let sum = marks[0] + marks[1] + marks[2];
    sumArray.push({'index' : i+1, 'sum' : sum});
}

sumArray.sort(compare);

function compare(a, b) {
    if(a.sum < b.sum)
    {
        return -1;
    }
    
    if(a.sum > b.sum) {
        return 1;
    }

    return 0;
}

let position = [];

for(let i = numberOfParticipants-1, j = 1; i >= 0; i--, j++) {
    position[obj.index] = j;
}

for(let i = 0; i < numberOfParticipants; i++) {
    console.log(`Participant${i+1} = ${position[i+1]}`);
}

let highestScore = sumArray[0].sum, lowestScore = sumArray[0].sum, highestPerticipant = sumArray[0].index, lowestParticipant = sumArray[0].index, totalSum = sumArray[0].sum;

for(let i = 1; i < numberOfParticipants; i++) {
    if(sumArray[i].sum > highestScore) {
        highestScore = sumArray[i].sum;
        highestPerticipant = sumArray[i].index;
    }

    if(sumArray[i].sum < lowestScore) {
        lowestScore = sumArray[i].sum;
        lowestParticipant = sumArray[i].index;
    }

    totalSum = sumArray[i].sum;
}

console.log(`Participant${highestPerticipant} scored top=${highestScore}`);
console.log(`Participant${lowestParticipant} scored lowest=${lowestScore}`);
console.log(`Avg score = ${totalSum/numberOfParticipants}`);

