document.addEventListener('DOMContentLoaded', function (){
    const botaoSoftware = document.getElementById('botao-software');
    const botaoHardware = document.getElementById('botao-hardware');
    const botaoMalware = document.getElementById('botao-malware');
    const botaoCreditos = document.getElementById('botao-creditos');
    const botaoLogo = document.getElementById('botao-logo');
    document.querySelector('.conteudo-inicial').style.display = 'flex';
    botaoLogo.addEventListener('click', function() {
        document.body.style.backgroundColor = 'rgb(98, 139, 22)';
        document.body.style.backgroundImage = 'url("side-bar-verde.png"), url("side-bar-verde.png")';
        document.querySelectorAll('.botao').forEach(el => el.style.color = 'white');
        document.querySelectorAll('.botao').forEach(el => el.style.backgroundColor = 'rgb(36, 80, 0)');
        limpador();
        document.querySelector('.conteudo-inicial').style.display = 'flex';
        document.querySelector('.footer').style.backgroundColor = '#2e6700';
    });
    botaoSoftware.addEventListener('click', function() {
        document.body.style.backgroundColor = 'rgba(32, 16, 126, 1)';
        document.body.style.backgroundImage = 'url("side-bar-roxa.png"), url("side-bar-roxa.png")';
        document.querySelectorAll('.botao').forEach(el => el.style.color = 'white');
        document.querySelectorAll('.botao').forEach(el => el.style.backgroundColor = 'rgba(0, 10, 70, 1)');
        limpador();
        document.querySelector('.conteudo-software').style.display = 'flex';
        document.querySelector('.footer').style.backgroundColor = 'rgb(37 0 255)';
    });
    botaoHardware.addEventListener('click', function() { 
        document.body.style.backgroundColor = 'rgb(255 196 241)';
        document.body.style.backgroundImage = 'url("side-bar-rosa.png"), url("side-bar-rosa.png")';
        document.querySelectorAll('.botao').forEach(el => el.style.color = 'black');
        document.querySelectorAll('.botao').forEach(el => el.style.backgroundColor = 'rgb(240 0 160)');
        limpador();
        document.querySelector('.conteudo-hardware').style.display = 'flex';
        document.querySelector('.footer').style.backgroundColor = '#ff34bb';
    });
    botaoMalware.addEventListener('click', function() {
        document.body.style.backgroundColor = 'rgba(119, 6, 12, 1)';
        document.body.style.backgroundImage = 'url("side-bar-vermelha.png"), url("side-bar-vermelha.png")';
        document.querySelectorAll('.botao').forEach(el => el.style.color = 'white');
        document.querySelectorAll('.botao').forEach(el => el.style.backgroundColor = 'rgba(201, 39, 39, 1)');
        limpador(); 
        document.querySelector('.conteudo-malware').style.display = 'flex';
        document.querySelector('.footer').style.backgroundColor = 'rgb(223 0 12)';
    });
    botaoCreditos.addEventListener('click', function() { 
        document.body.style.backgroundColor = 'rgba(12, 64, 123, 1)';
        document.body.style.backgroundImage = 'url("side-bar-azul.png"), url("side-bar-azul.png")';
        document.querySelectorAll('.botao').forEach(el => el.style.color = 'white');
        document.querySelectorAll('.botao').forEach(el => el.style.backgroundColor = 'rgba(39, 48, 201, 1)');
        limpador();
        document.querySelector('.conteudo-creditos').style.display = 'flex';
        document.querySelector('.footer').style.backgroundColor = '#0077ff';
    });
    const accordion = document.querySelectorAll('.accordion-botao');
    accordion.forEach(header => {
    header.addEventListener('click', () => {
    const conteudo = header.nextElementSibling;
    if (conteudo.style.maxHeight) {
      conteudo.style.maxHeight = null;
    } else {
      document.querySelectorAll('.accordion-conteudo').forEach(c => c.style.maxHeight = null);
      conteudo.style.maxHeight = conteudo.scrollHeight + "px";
    }
    });
    });
    function limpador() {
      document.querySelector('.conteudo-inicial').style.display = 'none';
      document.querySelector('.conteudo-software').style.display = 'none';
      document.querySelector('.conteudo-hardware').style.display = 'none';
      document.querySelector('.conteudo-malware').style.display = 'none';
      document.querySelector('.conteudo-creditos').style.display = 'none';
      document.querySelectorAll('.accordion-conteudo').forEach(c => c.style.maxHeight = null);
    }
});