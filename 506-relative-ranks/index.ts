let input = [10,3,8,9,4];

console.log(findRelativeRanks(input));

interface Rank {
    score: number,
    pos: number,
}

function findRelativeRanks(score: number[]): string[] {        
    let ranks = new Array<Rank>();
    let rankStrings = new Array<string>(score.length);
    
    for(let i = 0; i < score.length; i++) {
        const num = score[i];
        const rank = { score: num, pos: i };
        if (ranks.length === 0) {
            ranks.push(rank);
            continue;
        }

        let found = false;
        for(let j = 0; j < ranks.length; j++) {
            const rankScore = ranks[j].score;
            if (num === rankScore) return [] // values are supposed to be unique 
            else if (num > rankScore) { 
                ranks.splice(j, 0, rank); // Insert rank before position
                found = true;
                break;
            }            
        }
        if(!found) ranks.push(rank); // Insert rank at the end
    }

    for(let i=0; i<ranks.length; i++) {
        if(i === 0) rankStrings.splice(ranks[i].pos, 1, 'Gold Medal');
        else if(i === 1) rankStrings.splice(ranks[i].pos, 1, 'Silver Medal');
        else if(i === 2) rankStrings.splice(ranks[i].pos, 1, 'Bronze Medal');
        else rankStrings.splice(ranks[i].pos, 1, (i+1).toString()); 
    }

    return rankStrings;
};