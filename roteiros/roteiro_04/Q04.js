const print_even = num => console.log(`Entrada: ${num}\nSaída: ${calculate_sum(num)}`)

const calculate_sum = (num) => {
  if (num % 2 != 0) {
    num++
  }
  const cumulative_even_sequence = 20
  return num * 5 + cumulative_even_sequence
}

print_even(4)
print_even(11)