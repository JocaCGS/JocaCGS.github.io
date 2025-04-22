function gohome() {
    let home = document.querySelector('button').value;
    if (home) {
        window.location.href = home;
    }
}

function updateViewer(url) {
    document.getElementById('viewer').src = url;
}