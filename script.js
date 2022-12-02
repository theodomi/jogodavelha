var jogada = ""
window.onload = function () {
    jogada = "X"
}

// identifica a vez/jogada de cada um (X e O)
function marcarJogoDaVelha(botao) {
    if (botao == " ") {
        if (jogada == "X") {
            document.getElementById(botao).value = "X"
            jogada = "O"
        } else {
            document.getElementById(botao).value = "O"
            jogada = "X"
        }
    }

    // puxa todos os quadradinhos
    var j1 = document.getElementById('j1').value
    var j2 = document.getElementById('j2').value
    var j3 = document.getElementById('j3').value
    var j4 = document.getElementById('j4').value
    var j5 = document.getElementById('j5').value
    var j6 = document.getElementById('j6').value
    var j7 = document.getElementById('j7').value
    var j8 = document.getElementById('j8').value
    var j9 = document.getElementById('j9').value

    var mensagem = ""
    var houveVencedor = false

    // identificar as possibilidades de ganhos
    // horizontal 
    if (j1 != " " && j1 == j2 && j1 == j3) {
        mensagem = `${j1} ganhou!`
        houveVencedor = true
    } else if (j4 != " " && j4 == j5 && j4 == j6) {
        mensagem = `${j4} ganhou!`
        houveVencedor = true
    } else if (j7 != " " && j7 == j8 && j7 == j9) {
        mensagem = `${j7} ganhou!`
        houveVencedor = true
    }
    // vertical
    else if (j1 != " " && j1 == j4 && j1 == j7) {
        mensagem = `${j1} ganhou!`
        houveVencedor = true
    } else if (j2 != " " && j2 == j5 && j2 == j8) {
        mensagem = `${j2} ganhou!`
        houveVencedor = true
    } else if (j3 != " " && j3 == j6 && j3 == j9) {
        mensagem = `${j3} ganhou!`
        houveVencedor = true
    }
    // diagonal
    else if (j1 != " " && j1 == j5 && j1 == j9) {
        mensagem = `${j1} ganhou!`
        houveVencedor = true
    } else if (j3 != " " && j3 == j5 && j3 == j7) {
        mensagem = `${j3} ganhou!`
        houveVencedor = true
    }

    // mensagem de vitória ou velha
    if (houveVencedor == true) {
        document.getElementById('j1').disabled = true
        document.getElementById('j2').disabled = true
        document.getElementById('j3').disabled = true
        document.getElementById('j4').disabled = true
        document.getElementById('j5').disabled = true
        document.getElementById('j6').disabled = true
        document.getElementById('j7').disabled = true
        document.getElementById('j8').disabled = true
        document.getElementById('j9').disabled = true

        alert(mensagem)
    } else if (j1 != " " && j2 != " " && j3 != " " && j4 != " " && j5 != " " && j6 != " " && j7 != " " && j8 != " " && j9 != " " && houveVencedor == false) {
        mensagem = "Empate! Deu velha."
        alert(mensagem)
    }
}