const readline = require("readline-sync");

// ========================================
// SISTEMA DE ALUNOS
// ========================================

let alunos = [];

let executando = true;

while (executando) {

    console.log("\n==============================");
    console.log("      SISTEMA DE ALUNOS");
    console.log("==============================");
    console.log("1 - Cadastrar aluno");
    console.log("2 - Listar alunos");
    console.log("3 - Consultar aluno");
    console.log("4 - Ver situação dos alunos");
    console.log("5 - Sair");
    console.log("==============================");

    let opcao = readline.question("Escolha uma opcao: ");

    switch (opcao) {

        // --------------------------------
        // CADASTRAR
        // --------------------------------
        case "1":

            console.log("\n--- CADASTRO DE ALUNO ---");

            let nome = readline.question("Nome: ");
            let idade = Number(readline.question("Idade: "));
            let nota = parseFloat(readline.question("Nota: ")).toFixed(2);

            // TODO:
            // Verificar se a nota está entre 0 e 10
            if (nota >= 0 && nota <= 10){
                // TODO:
                // Criar um objeto aluno
                let aluno = {
                    nome: nome,
                    idade: idade,
                    nota: nota
                };
                
                // TODO:
                // Adicionar o aluno ao array
                alunos.push(aluno);
                
            } else {
                console.log("A nota digitada é inválida. Favor digitar de 0 a 10");
            }

            break;

        // --------------------------------
        // LISTAR
        // --------------------------------
        case "2":

            console.log("\n--- ALUNOS CADASTRADOS ---");
            
            // TODO:
            // Verificar se existem alunos cadastrados
            if (alunos.length != 0) {
                // TODO:
                // Percorrer o array utilizando FOR
                for (let i = 0; i < alunos.length; i++) {
                    // Mostrar:
                    // Nome
                    // Idade
                    // Nota
                    console.log( 
                        "Id: " + (i + 1) + "\n" +
                        "Nome: " + alunos[i].nome + "\n" +
                        "Idade: " + alunos[i].idade + "\n" +
                        "Nota: " + alunos[i].nota + "\n"
                    );
                }
            } else {
                console.log("Nenhum aluno cadastrado.")
            }

            break;

        // --------------------------------
        // CONSULTAR
        // --------------------------------
        case "3":

            console.log("\n--- CONSULTAR ALUNO ---");

            let nomeBusca = readline.question("Digite o nome: ").toLowerCase;

            let alunoEncontrado = false;

            // TODO:
            // Percorrer o array procurando
            // pelo nome informado.
            for (let i = 0; i < alunos.length; i++) {
                // Se encontrar:
                // - Mostrar os dados
                if (alunos[i].nome.toLowerCase === nomeBusca) {
                    console.log("==============================");
                    console.log("Aluno: " + alunos[i].nome);
                    console.log("Idade: " + alunos[i].idade);
                    console.log("Nota: " + alunos[i].nota);
                    
                    // - Alterar alunoEncontrado para true
                    alunoEncontrado = true;

                    // - Utilizar BREAK
                    break;
                    }           
            }
            
            if (!alunoEncontrado) {
                console.log("Aluno nao encontrado.");
            }

            break;


        // --------------------------------
        // SITUAÇÃO
        // --------------------------------
        case "4":

            console.log("\n--- SITUACAO DOS ALUNOS ---");

            // TODO:
            // Percorrer todos os alunos
            for (let i = 0; i < alunos.length; i++) {
                // Se nota >= 7
                //    Aprovado
                if (alunos[i].nota >= 7) {
                    console.log(
                        "Aluno: " + alunos[i].nome + "\n" +
                        "Situação: Aprovado") + "\n";
                    // Senão se nota >= 5
                    //    Recuperacao
                } else if (alunos[i].nota >= 5 && alunos[i].nota < 7) {
                    console.log(
                        "Aluno: " + alunos[i].nome + "\n" +
                        "Situação: Recuperação") + "\n";
                    // Senão
                    //    Reprovado
                } else {
                    console.log(
                        "Aluno: " + alunos[i].nome + "\n" +
                        "Situação: Reprovado") + "\n";
                }
            }

            break;

        // --------------------------------
        // SAIR
        // --------------------------------
        case "5":

            console.log("\nSistema encerrado!");

            executando = false;

            break;


        // --------------------------------
        // OPÇÃO INVÁLIDA
        // --------------------------------
        default:

            console.log("\nOpcao invalida!");

            break;
    }
}
