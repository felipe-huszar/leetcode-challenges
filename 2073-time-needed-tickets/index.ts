let input = [2,3,2];
let k = 2;

console.log(timeRequiredToBuy(input, k));

function timeRequiredToBuy(tickets: number[], k: number): number {     
    if (tickets.length < 1 || tickets.length > 100) return 0;
                     
    let time = 0;
      
    while (tickets[k] > 0) {
        for (let i = 0; i < tickets.length; i++) {                                     
            if (tickets[i] > 0) {                 
                tickets[i]--;                 
                time++;
                 
                if (i === k && tickets[k] === 0) {
                    return time;
                }
            }
        }
    }
      
    return time;
};