const dono = { 
    "proprietario": "Silvio Santos", 
    "endereco": { 
        "cep": '05650-000', 
        "logradouro": 'Avenida das Américas', 
        "complemento": '', 
        "bairro": 'Morumbi', 
        "localidade": 'São Paulo', 
        "uf": 'SP', 
        "geo": { 
            "lat": "-23.61919020307765", 
            "lng": "-46.70793551534256" 
        } 
    } 
}

const { proprietario, endereco: { cep, bairro, localidade, geo: { lat, lng } } } = dono;
const resultado = `${proprietario} - ${cep} - ${bairro}, ${localidade} (${lat}, ${lng})`;

console.log(resultado);