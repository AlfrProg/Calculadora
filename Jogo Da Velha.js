var jogador = "X";
var jogoFinalizado = false;

function jogar(celula) {
    if (!jogoFinalizado && celula.innerHTML === "") {
        celula.innerHTML = jogador;

        if (verificarVitoria()) {
            exibirResultado("Jogador " + jogador + " venceu!");
            jogoFinalizado = true;
        } else if (verificarEmpate()) {
            exibirResultado("Empate!");
            jogoFinalizado = true;
        } else {
            trocarJogador();
        }
    }
}

function trocarJogador() {
    jogador = jogador === "X" ? "O" : "X";
}

function verificarVitoria() {
    var linhas = document.getElementsByClassName("quadrado");

    for (var i = 0; i < 3; i++) {
        if (linhas[i * 3].innerHTML !== "" &&
            linhas[i * 3].innerHTML === linhas[i * 3 + 1].innerHTML &&
            linhas[i * 3].innerHTML === linhas[i * 3 + 2].innerHTML) {
            return true;
        }

        if (linhas[i].innerHTML !== "" &&
            linhas[i].innerHTML === linhas[i + 3].innerHTML &&
            linhas[i].innerHTML === linhas[i + 6].innerHTML) {
            return true;
        }
    }

    if (linhas[0].innerHTML !== "" &&
        linhas[0].innerHTML === linhas[4].innerHTML &&
        linhas[0].innerHTML === linhas[8].innerHTML) {
        return true;
    }

    if (linhas[2].innerHTML !== "" &&
        linhas[2].innerHTML === linhas[4].innerHTML &&
        linhas[2].innerHTML === linhas[6].innerHTML) {
        return true;
    }

    return false;
}

function verificarEmpate() {
    var linhas = document.getElementsByClassName("quadrado");
    for (var i = 0; i < linhas.length; i++) {
        if (linhas[i].innerHTML === "") {
            return false;
        }
    }
    return true;
}

function exibirResultado(resultado) {
    document.getElementById("resultado").innerHTML = resultado;
}

function reiniciar() {
    var linhas = document.getElementsByClassName("quadrado");
    for (var i = 0; i < linhas.length; i++) {
        linhas[i].innerHTML = "";
    }

    document.getElementById("resultado").innerHTML = "";
    jogoFinalizado = false;
    jogador = "X";
}
