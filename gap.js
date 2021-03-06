/**
* Codility Binary GAP finder
* run: node gap.js N
* N - number
*/

function solution(N) {

    const num = parseInt(N).toString(2);
    const res = [];

    [...num].reduce( (prev, curr) => 
        curr === '1' ? res.push(prev) * 0 : ++prev, 
        0
    );

    return Math.max(...res);
}

console.log(solution(process.argv[2]));
