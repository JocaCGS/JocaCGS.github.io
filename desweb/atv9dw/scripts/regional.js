const data_regional = []


function addRegionals() {

    // Obtém referência do formulário
    const form = document.querySelector('#formRegional')
    // Obtém o valor dos campos de entrada
    const acronym_name = form.querySelector('input[name="sigla"]')

    const city_name = form.querySelector('input[name="cidade"]')


    const row = {
        id: data_regional.length + 1,
        acronym: acronym_name.value,
        city: city_name.value
    }

    data_regional.push(row);

    // Chama a função para criar a linha na tabela
    createRowRegional(row);

    // Limpa o campo do formulário após adicionar
    form.reset();

    console.log("Deu certo ou nao rs");
}


function createRow(row) {
    // Obtém referência da tabela
    const table = document.querySelector('#table_regional').querySelector('tbody');
    // Cria um elemento <tr>
    const line = document.createElement('tr')
    // Cria elementos <td> para cada coluna
    const col_id = document.createElement('td');
    col_id.textContent = row.id; // Adiciona o ID

    const col_sigla = document.createElement('td');
    col_sigla.textContent = row.acronym; // Adiciona o nome do assunto]

    const col_cidade = document.createElement('td');
    col_cidade.textContent = row.city; // Adiciona o nome do assunto


    // Adiciona os elementos <td> ao <tr>
    line.appendChild(col_id);
    line.appendChild(col_sigla);
    line.appendChild(col_cidade);

    // Adiciona a linha <tr> à tabela <tbody>
    table.appendChild(line);
}
