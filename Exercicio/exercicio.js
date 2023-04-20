// Resposta item 1

// Criando objeto pessoa com as propriedades nome, idade, profissão e endereço
const pessoa = {
    nome: "Luiz",
    idade: 26,
    profissao: "Uber",
    endereco: {
    logradouro: "Rua 1",
    bairro: "Centro",
    cidade: "João Pessoa",
    cep: "01000-000"
    }
    };
    
    // Resposta item 2
    
    // Função para imprimir os valores das propriedades do objeto pessoa
    function imprimirDadosPessoa(pessoa) {
    console.log("Nome: " + pessoa.nome);
    console.log("Idade: " + pessoa.idade);
    console.log("Profissão: " + pessoa.profissao);
    console.log("Endereço: " + pessoa.endereco.logradouro + ", " + pessoa.endereco.bairro + ", " + pessoa.endereco.cidade + " - " + pessoa.endereco.cep);
    }
    
    // Chamando a função imprimirDadosPessoa passando o objeto pessoa como parâmetro
    imprimirDadosPessoa(pessoa);
    
    // Resposta item 3
    
    // Adicionando nova propriedade telefone ao objeto pessoa
    pessoa.telefone = "(99)99999-9999";
    
    // Resposta item 4
    
    // Adicionando função obterDados ao objeto pessoa que retorna uma string com os nomes e valores das propriedades concatenados
    pessoa.obterDados = function() {
    return "Nome: " + this.nome + ", Idade: " + this.idade + ", Profissão: " + this.profissao + ", Endereço: " + this.endereco.logradouro + ", " + this.endereco.bairro + ", " + this.endereco.cidade + " - " + this.endereco.cep + ", Telefone: " + this.telefone;
    }
    
    // Chamando a função obterDados do objeto pessoa e imprimindo o resultado no console
    console.log(pessoa.obterDados());
    
    // Resposta item 5
    
    // Adicionando função compararPessoa que recebe um objeto como parâmetro e compara com o objeto pessoa atual
    pessoa.compararPessoa = function(pessoa2) {
    if (this.nome === pessoa2.nome && this.idade === pessoa2.idade) {
    return true;
    } else {
    return false;
    }
    }
    
    // Criando novo objeto pessoa2 com os mesmos dados do objeto pessoa
    const pessoa2 = {
    nome: "João",
    idade: 30,
    profissao: "Autonomo",
    endereco: {
    logradouro: "Rua 2",
    bairro: "Mandacaru",
    cidade: "João Pessoa",
    cep: "02000-000"
    },
    telefone: "(99)9999-9999",
    obterDados: function() {
    return "Nome: " + this.nome + ", Idade: " + this.idade + ", Profissão: " + this.profissao + ", Endereço: " + this.endereco.logradouro + ", " + this.endereco.bairro + ", " + this.endereco.cidade + " - " + this.endereco.cep + ", Telefone: " + this.telefone;
    },
    compararPessoa: function(pessoa) {
    if (this.nome === pessoa.nome && this.idade === pessoa.idade) {
    return true;
    } else {
    return false;
    }
    }
    };
    
    // Chamando a função compararPessoa do objeto pessoa passando o objeto pessoa2 como parâmetro e imprimindo o resultado no console
    console.log(pessoa.compararPessoa(pessoa2));
    
    // Resposta item 7
    
    // Imprimindo o resultado da comparação do objeto pessoa com o objeto pessoa2 no console
    console.log(pessoa.compararPessoa(pessoa2));