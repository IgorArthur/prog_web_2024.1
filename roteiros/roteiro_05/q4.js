const colocarTodasLetrasEmMaiusculoEm500ms = async (str) => {
  if (typeof str === 'string') {
      return new Promise((resolve) => {
          setTimeout(() => {
              resolve(str.toUpperCase());
          }, 500);
      });
  } else {
      throw new Error('O parâmetro fornecido não é uma string');
  }
};

const inverteTodasLetras = async (str) => {
  if (typeof str === 'string') {
      return str.split('').reverse().join('');
  } else {
      throw new Error('O parâmetro fornecido não é uma string');
  }
};

const processarString = async (input) => {
  try {
      const maiuscula = await colocarTodasLetrasEmMaiusculoEm500ms(input);
      const invertida = await inverteTodasLetras(maiuscula);
      console.log(invertida); 
  } catch (error) {
      console.error(error.message);
  }
};

processarString('silvio santos');

processarString(12345);