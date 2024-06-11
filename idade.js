const idadeMinima = 18; // Definir a idade mínima para votar

function verificarIdade() {
    // Obter os valores do nome e da idade
    const nome = document.getElementById('nome').value.trim();
    const idade = parseInt(document.getElementById('idade').value);

    // Validar se a idade é um número inteiro positivo
    if (isNaN(idade) || idade <= 0) {
        alert('Idade inválida! Digite um número inteiro positivo.');
        return;
    }

    // Verificar se a idade é igual ou superior à idade mínima
    const podeVotar = idade >= idadeMinima;

    // Criar a mensagem final
    const mensagem = `**${nome}**, você ${podeVotar ? 'pode' : 'não pode'} votar na eleição.`;

    // Exibir a mensagem na área de resultado
    document.getElementById('resultado').innerHTML = mensagem;
}
