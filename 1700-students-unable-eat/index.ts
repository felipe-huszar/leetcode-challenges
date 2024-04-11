let input = [1,1,1,0,0,1];
let output = [1,0,0,0,1,1];

console.log(countStudents(input, output));

function countStudents(students: number[], sandwiches: number[]): number {
    let totalStarve = 0;
    let i=0;
    
    if (students.length != sandwiches.length) return 0;
    if (students.length < 1 || students.length > 100) return 0;    

    while(students) {
        if(
            (students[0] != 0 && students[0] != 1) ||
            (sandwiches[0] != 0 && sandwiches[0] != 1)
        ) return 0;

        let isPreference = students[0] == sandwiches[0];
        let tryPreference = 0;
        while(!isPreference) {
            const preference = students.shift() as number
            students.push(preference);
            tryPreference++;

            if(tryPreference > sandwiches.length) {
                totalStarve++;
                if(totalStarve >= students.length) return totalStarve;
                break;                
            }

            isPreference = students[0] == sandwiches[0];
        }

        if(isPreference) {
            students.shift();
            sandwiches.shift();
        }     
        
        i++;
    }

    return totalStarve;
};