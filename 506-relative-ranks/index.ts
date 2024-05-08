let input = [10,3,8,9,4];

console.log(findRelativeRanks(input));

interface Rank {
    score: number,
    pos: number,
}

function findRelativeRanks(scores: number[]): string[] {        
    const indexedScores = scores.map((score, index) => ({ score, index }));

    indexedScores.sort((a,b) => b.score - a.score); // sort descending

    const rankStrings = new Array<string>(scores.length);

    for(let i = 0; i< indexedScores.length; i++) {
        let rank = "";
        if(i === 0) rank = "Gold Medal";
        else if(i === 1) rank = "Silver Medal";
        else if(i === 2) rank = "Bronze Medal";
        else rank = (i + 1).toString();

        rankStrings[indexedScores[i].index] = rank;
    }

    return rankStrings;
};