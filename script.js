document.addEventListener('DOMContentLoaded', function (){
    const botaoSoftware = document.getElementById('botao-software');
    const botaoHardware = document.getElementById('botao-hardware');
    const botaoMalware = document.getElementById('botao-malware');
    const botaoCreditos = document.getElementById('botao-creditos');
    const botaoLogo = document.getElementById('botao-logo');
    botaoLogo.addEventListener('click', function() {
        document.body.style.backgroundColor = 'rgb(98, 139, 22)';
        document.body.style.backgroundImage = 'url("side-bar-verde.png"), url("side-bar-verde.png")';
        document.querySelectorAll('.botao').forEach(el => el.style.color = 'white');
        document.querySelectorAll('.botao').forEach(el => el.style.backgroundColor = 'rgb(36, 80, 0)');
        limpador();
        document.querySelector('.conteudo-inicial').style.display = 'flex';
    });
    botaoSoftware.addEventListener('click', function() {
        document.body.style.backgroundColor = 'rgba(32, 16, 126, 1)';
        document.body.style.backgroundImage = 'url("side-bar-roxa.png"), url("side-bar-roxa.png")';
        document.querySelectorAll('.botao').forEach(el => el.style.color = 'white');
        document.querySelectorAll('.botao').forEach(el => el.style.backgroundColor = 'rgba(0, 10, 70, 1)');
        limpador();
        document.querySelector('.conteudo-software').style.display = 'flex';
    });
    botaoHardware.addEventListener('click', function() { 
        document.body.style.backgroundColor = 'rgb(255, 255, 200)';
        document.body.style.backgroundImage = 'url("side-bar-branca.png"), url("side-bar-branca.png")';
        document.querySelectorAll('.botao').forEach(el => el.style.color = 'black');
        document.querySelectorAll('.botao').forEach(el => el.style.backgroundColor = 'rgb(254 255 0)');
        limpador();
        document.querySelector('.conteudo-hardware').style.display = 'flex';
    });
    botaoMalware.addEventListener('click', function() {
        document.body.style.backgroundColor = 'rgba(119, 6, 12, 1)';
        document.body.style.backgroundImage = 'url("side-bar-vermelha.png"), url("side-bar-vermelha.png")';
        document.querySelectorAll('.botao').forEach(el => el.style.color = 'white');
        document.querySelectorAll('.botao').forEach(el => el.style.backgroundColor = 'rgba(201, 39, 39, 1)');
        limpador(); 
        document.querySelector('.conteudo-malware').style.display = 'flex';
    });
    botaoCreditos.addEventListener('click', function() { 
        document.body.style.backgroundColor = 'rgba(12, 64, 123, 1)';
        document.body.style.backgroundImage = 'url("side-bar-azul.png"), url("side-bar-azul.png")';
        document.querySelectorAll('.botao').forEach(el => el.style.color = 'white');
        document.querySelectorAll('.botao').forEach(el => el.style.backgroundColor = 'rgba(39, 48, 201, 1)');
        limpador();
        document.querySelector('.conteudo-creditos').style.display = 'flex';
    });
    const accordion = document.querySelectorAll('.accordion-botao');
    accordion.forEach(header => {
    header.addEventListener('click', () => {
    const conteudo = header.nextElementSibling;
    if (conteudo.style.maxHeight) {
      conteudo.style.maxHeight = null;
    } else {
      // document.querySelectorAll('.accordion-conteudo').forEach(c => c.style.maxHeight = null);
      conteudo.style.maxHeight = conteudo.scrollHeight + "px";
      conteudo.scrollIntoView({ behavior: 'smooth', block: 'start' });
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