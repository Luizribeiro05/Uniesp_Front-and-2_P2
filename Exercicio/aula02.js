var altura = [1.95, 1.80, 1.82, 1.73, 1.40, 1.71, 1.89, 2.03, 1.72, 1.51, 1.78, 1.85, 1.82, 1.20, 2.02];
var genero = ["F", "F", "M", "F", "F", "F", "M", "M", "M", "F", "M", "F", "M", "F", "M"];


    function alturaMaior(altura) {
        var maiorAltura = altura[0];
        for (let i = 0; i < altura.length; i++) {
            if (altura[i] > maiorAltura) {
                maiorAltura = altura[i];
            }
        }
        return maiorAltura;
    }

    function alturaMenor(altura) {
        var menorAltura = altura[0];
        for (let i = 0; i < altura.length; i++) {
            if (altura[i] < menorAltura[i]) {
                menor = altura[i];
            }
        }
        return menorAltura;
    }

    function mediaHomens(genero, altura) {
        var soma = 0;
        var media = 0;
        for (let i = 0; i < genero.length; i++) {
            if (genero[i] === "M") {
                soma += altura[i];
                media++;
            }
        }
    return (soma / media);
    }
    function qtdeMulheres(genero) {
        var Mulheres = 0;
        for (let i = 0; i < genero.length; i++) {
            if (genero[i] === "F") {
                Mulheres++;
            }
        }
        return Mulheres;
    }
    alert("A Maior Altura é " + alturaMaior(altura) + " Metros.");
    alert("A Menor Altura é " + alturaMenor(altura) + " Metros.");
    alert("A Média de Altura dos Homens é de " + mediaHomens(genero, altura).toFixed(2) + " Metros.");
    alert("A Quantidade é de " + qtdeMulheres(genero) + " Mulheres.");