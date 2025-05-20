const data_subjects = []



function addSubject() {


    alert("oi");
    // Obtém referência do formulário
    const form = document.querySelector('#formSubject')
    // Obtém o valor dos campos de entrada
    const subject_name = form.querySelector('input[name="descricao"]')


    const row = {
        id: data_subjects.length + 1,
        name: subject_name.value
    }

    data_subjects.push(row);

    // Chama a função para criar a linha na tabela
    createRowSubject(row);

    // Limpa o campo do formulário após adicionar
    form.reset();
}


function createRowSubject(row) {
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

