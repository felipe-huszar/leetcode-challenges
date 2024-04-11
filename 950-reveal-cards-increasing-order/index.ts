let input = [17,13,11,2,3,5,7];

console.log(deckRevealedIncreasing(input));

function deckRevealedIncreasing(deck: number[]): number[] {
    // Ordena o baralho em ordem crescente
    deck.sort((a, b) => a - b);
    let revealedCards = new Array<number>();
    
    // Simula o processo ao contrário
    while (deck.length) {
        if (revealedCards.length > 1) {
            revealedCards.unshift(revealedCards.pop() as number);
        }
        revealedCards.unshift(deck.pop() as number);
    }
    
    return revealedCards;
};