document.addEventListener('DOMContentLoaded', function (){
    const botaoSoftware = document.getElementById('botao-software');
    const botaoHardware = document.getElementById('botao-hardware');
    const botaoMalware = document.getElementById('botao-malware');
    const botaoCreditos = document.getElementById('botao-creditos');
    botaoSoftware.addEventListener('click', function() {
        document.body.style.backgroundColor = 'rgb(98, 139, 22)';
        document.body.style.backgroundImage = 'url("side-bar-verde.png"), url("side-bar-verde.png")';
        document.querySelectorAll('.botao').forEach(el => el.style.color = 'white');
        document.querySelectorAll('.botao').forEach(el => el.style.backgroundColor = 'rgb(36, 80, 0)');
    });
    botaoHardware.addEventListener('click', function() { 
        document.body.style.backgroundColor = 'rgba(170, 170, 170, 1)';
        document.body.style.backgroundImage = 'url("side-bar-branca.png"), url("side-bar-branca.png")';
        document.querySelectorAll('.botao').forEach(el => el.style.color = 'black');
        document.querySelectorAll('.botao').forEach(el => el.style.backgroundColor = 'rgb(254 255 0)');
    });
    botaoMalware.addEventListener('click', function() {
        document.body.style.backgroundColor = 'rgba(119, 6, 12, 1)';
        document.body.style.backgroundImage = 'url("side-bar-vermelha.png"), url("side-bar-vermelha.png")';
        document.querySelectorAll('.botao').forEach(el => el.style.color = 'white');
        document.querySelectorAll('.botao').forEach(el => el.style.backgroundColor = 'rgba(201, 39, 39, 1)');
     });
    botaoCreditos.addEventListener('click', function() { 
        document.body.style.backgroundColor = 'rgba(12, 64, 123, 1)';
        document.body.style.backgroundImage = 'url("side-bar-azul.png"), url("side-bar-azul.png")';
        document.querySelectorAll('.botao').forEach(el => el.style.color = 'white');
        document.querySelectorAll('.botao').forEach(el => el.style.backgroundColor = 'rgba(39, 48, 201, 1)');
    });
});