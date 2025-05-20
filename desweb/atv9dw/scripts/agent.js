const data_agents = []



function addAgent() {

    // Obtém referência do formulário
    const form = document.querySelector('#formAgent')
    // Obtém o valor dos campos de entrada
    const agent_name = form.querySelector('input[name="nome"]')


    const row = {
        id: data_agents.length + 1,
        name: agent_name.value
    }

    data_agents.push(row);

    // Chama a função para criar a linha na tabela
    createRow(row);

    // Limpa o campo do formulário após adicionar
    form.reset();
}


function createRow(row) {
    // Obtém referência da tabela
    const table = document.querySelector('#table_subject').querySelector('tbody');
    // Cria um elemento <tr>
    const line = document.createElement('tr')
    // Cria elementos <td> para cada coluna
    const col_id = document.createElement('td');
    col_id.textContent = row.id; // Adiciona o ID

    const col_nome = document.createElement('td');
    col_nome.textContent = row.name; // Adiciona o nome do assunto

    // Adiciona os elementos <td> ao <tr>
    line.appendChild(col_id);
    line.appendChild(col_nome);

    // Adiciona a linha <tr> à tabela <tbody>
    table.appendChild(line);
}

const form = document.querySelector('#formAgent');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário
    addAgent(); // Adiciona o assunto
});