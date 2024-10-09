function toggleTheme() {
    console.log('Tema alternado');
}

function exibirAscii(pedro) {
    fetch(pedro)
        .then(response => response.text())
        .then(ascii => {
            // Exibe o conteúdo na div
            let asciiDiv = document.getElementById('asc-art');
            asciiDiv.innerText = ascii;
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo de texto:', error);
        });
}
