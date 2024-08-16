const print_primes = (start, end) => calculate_primes(start, end)

const calculate_primes = (start = 0, end = 100) => {
  if (start > end) {
    [start, end] = [end, start]
  }

  const prime_list = []

  for (let i = start; i <= end; i++) {
    if (is_prime(i)) {
      prime_list.push(i)
    }
  }

  return prime_list
}

const is_prime = (num) => {
    if (num < 2) {
      return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        return false
      }
    }
    return true
}

console.log(print_primes(10, 50))