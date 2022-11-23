// inicializacao do input
let input = document.querySelector("#input")
// variavel que ira armazerar os numeros para as operacoes
let valores

function conta() {    
    // incicializacao dos numeros
    document.querySelector("#zero").addEventListener("click", () => {
        input.value += 0
    })

    document.querySelector("#um").addEventListener("click", () => {
        input.value += 1
    })

    document.querySelector("#dois").addEventListener("click", () => {
        input.value += 2
    })

    document.querySelector("#tres").addEventListener("click", () => {
        input.value += 3
    })

    document.querySelector("#quatro").addEventListener("click", () => {
        input.value += 4
    })

    document.querySelector("#cinco").addEventListener("click", () => {
        input.value += 5
    })

    document.querySelector("#seis").addEventListener("click", () => {
        input.value += 6
    })

    document.querySelector("#sete").addEventListener("click", () => {
        input.value += 7
    })

    document.querySelector("#oito").addEventListener("click", () => {
        input.value += 8
    })

    document.querySelector("#nove").addEventListener("click", () => {
        input.value += 9
    })



    // inicializacao das operacoes
    // ADICAO
    document.querySelector("#adicao").addEventListener("click", () => {
        input.value += "+"
        let valores = input.value
        document.querySelector("#resultado").addEventListener("click", () => {
            if (input.value.split("+")) {
                valores =  input.value.split("+")
                document.querySelector("#input").value =  Number(valores[0]) + Number(valores[1])
            }
        })
    })


    // DIVISAO
    document.querySelector("#divisao").addEventListener("click", () => {
        input.value += "/"
        let valores = input.value
        document.querySelector("#resultado").addEventListener("click", () => {
            if (input.value.split("/")) {
                valores =  input.value.split("/")
                document.querySelector("#input").value =  Number(valores[0]) / Number(valores[1])
            }
        })
    })


    // MULTIPLICACAO
    document.querySelector("#multiplicacao").addEventListener("click", () => {
        input.value += "X"
        let valores = input.value
        document.querySelector("#resultado").addEventListener("click", () => {
            if(input.value.split("X")) {
                valores =  input.value.split("X")
                document.querySelector("#input").value =  Number(valores[0]) * Number(valores[1])
            }
        })
    })


    // SUBTRACAO
    document.querySelector("#subtracao").addEventListener("click", () => {
        input.value += "-"
        let valores = input.value
        document.querySelector("#resultado").addEventListener("click", () => {
            if(input.value.split("-")) {
                valores =  input.value.split("-")
                document.querySelector("#input").value =  Number(valores[0]) - Number(valores[1])
            }
        })
    })
}

// chamada da funcao conta, responsavel pelo start na calculadora
conta()




document.querySelector("#apagar").addEventListener("click", apagar)

function apagar() {
    location.reload()
}