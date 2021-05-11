function sigma(n){
    let answer = 0;
    for(let x=1; x<=n; x++)
        answer += x;

    return answer;
}

function factorial(n){
    let answer = 1;
    for(let x=1; x<=n; x++)
        answer *= x;

    return answer;
}

function fib(n){
    let answer = 0;
    let prev = 0;
    let current = 1;

    if(n == 0)
        return prev;
    else if(n == 1)
        return current;
    else{
        for(let x=2; x<=n; x++){
            answer = prev + current;
            prev = current;
            current = answer;
        }
        
        return answer;
    }
}