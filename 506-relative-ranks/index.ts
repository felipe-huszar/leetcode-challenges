let input = [10,3,8,9,4];

console.log(findRelativeRanks(input));

interface Rank {
    score: number,
    pos: number,
}

function findRelativeRanks(scores: number[]): string[] {        
    const indexedScores = scores.map((score, index) => ({ score, index }));

    indexedScores.sort((a,b) => b.score - a.score); // sort descending

    const medals = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];
    const rankStrings = new Array<string>(scores.length);

    for(let i = 0; i< indexedScores.length; i++) {
        const rank = i < 3 ? medals[i] : (i+1).toString();
        rankStrings[indexedScores[i].index] = rank;
    }

    return rankStrings;
};