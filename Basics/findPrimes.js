function findPrimes(n){
    let primes = []
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) primes.push(i)
    }
    return primes
}

function isPrime(n){
    if (n <= 1)
        return false;

    // Check if number is 2
    else if (n === 2)
        return true;

    // Check if n is a multiple of 2
    else if (n % 2 === 0)
        return false;

    // If not, then just check the odds
    for (let i = 3; i <= Math.sqrt(n); i += 2)
    {
        if (n % i === 0)
            return false;
    }
    return true;
}