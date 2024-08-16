const pa_function = function_object => console.log(`Sequência: ${pa_sequence(function_object)}\nSoma: ${pa_sum(function_object, pa_sequence(function_object))}`)
const pa_sequence = function_object =>function_object. a1 + (function_object.n - 1) * function_object.r
const pa_sum = (function_object, an) => ((function_object.a1 + an) * function_object.n) / 2 
  
const pg_function = function_object => console.log(`Sequência: ${pg_sequence(function_object)}\nSoma: ${pg_sum(function_object, pg_sequence(function_object))}`)
const pg_sequence = function_object => function_object.a1 * (function_object.r**function_object.n - 1)
const pg_sum = (function_object, an) => 
an / (function_object.r - 1)

const progession_object = {
  id: 1,
  name: 'pg',
  n: 5,
  a1: 3,
  r: 2
}

pa_function(progession_object)
pg_function(progession_object)