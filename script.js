
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('form'); // Selecionando o formulário

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome-usuario').value;
        const telefone = document.getElementById('telefone-usuario').value;

        const tabela = document.getElementById('tabela'); // Obtendo a tabela
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
            <td>${nome}</td>
            <td>${telefone}</td>
        `;

        tabela.appendChild(novaLinha); // Adicionando a nova linha à tabela

        document.getElementById('nome-usuario').value = '';
        document.getElementById('telefone-usuario').value = '';
    });
});

