const print_concept = arr => arr.forEach(element => {
  console.log(process_array(element))
});

const process_array = element => {
  if (element < 5) {
    return 'D'
  } 
  if (element < 7) {
    return 'C'
  }
  if (element < 9) {
    return 'B'
  }
  if (element <= 10) {
    return 'A'
  } else {
    return 'E'
  }
}

const array_test = [2, 5, 9, 10, 8, 3, 7, 0]

print_concept(array_test)