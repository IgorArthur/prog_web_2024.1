const colocarTodasLetrasEmMaiusculoEm500ms = (str) => {
  return new Promise((resolve, reject) => {
      if (typeof str === 'string') {
          setTimeout(() => {
              resolve(str.toUpperCase());
          }, 500);
      } else {
          reject('O parâmetro fornecido não é uma string');
      }
  });
};

const inverteTodasLetras = (str) => {
  return new Promise((resolve, reject) => {
      if (typeof str === 'string') {
          resolve(str.split('').reverse().join(''));
      } else {
          reject('O parâmetro fornecido não é uma string');
      }
  });
};

colocarTodasLetrasEmMaiusculoEm500ms('silvio santos')
  .then(inverteTodasLetras)
  .then(result => console.log(result))
  .catch(error => console.error(error));

colocarTodasLetrasEmMaiusculoEm500ms(12345)
  .then(inverteTodasLetras)
  .then(result => console.log(result))
  .catch(error => console.error(error));