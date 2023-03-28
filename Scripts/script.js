const timestamp = '1679928680';
const apiKey = '0fb8b67fedf191417313dd260414f6b1';
const md5 = '93fd096dcc0f3437b7f95fe9a46831f9';

fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${md5}&limit=20`) // puxa todos os dados da url especificada
.then((res) => {
    return res.json()
}).then((jsonParsed) =>{

   const divHero = document.querySelector('#herois'); // todas as alterações vao ser feitas na div la do html

    jsonParsed.data.results.forEach(element => {
        // pegando todos os dados
        const srcImg = element.thumbnail.path + '.' + element.thumbnail.extension
        const nomeHeroi = element.name
        const heroDesc = element.description

        // chama a função que cria cada div com esses dados e entao repete
        createDivhero(srcImg, nomeHeroi, divHero, heroDesc);

    });

    console.log(jsonParsed)
})

    function createDivhero(srcImg, nomeHeroi, divToAppend, heroDesc){
        // criando cada elemento
        const divPai = document.createElement('div')
        const divFilho = document.createElement('div')
        const textName = document.createElement('text')
        const botao = document.createElement('input')
        const img = document.createElement('img')
        botao.type='button';
        botao.classList.add("botaoDesc")
        botao.onclick = function() { // botao chama a função que escreve a descrição
            escreverDesc(heroDesc);
        }
        
        textName.textContent = nomeHeroi
        img.src = srcImg
        
        // coloca todos os elementos em uma so div
        divFilho.appendChild(img)
        divFilho.appendChild(textName)
        divFilho.appendChild(botao)
        // joga essa div pra uma outra
        divPai.appendChild(divFilho)
        divToAppend.appendChild(divPai)
        
        
        function escreverDesc(heroDesc){
            
            // criando div popup
            const popup = document.createElement('div')
            popup.classList.add('popup'); // adicionando classe css ao elemento

            // criando a descrição 
            const textDesc = document.createElement('text')
            textDesc.textContent = heroDesc

            // criando o botao
            const botaoFechar = document.createElement('button')
            botaoFechar.textContent = 'Fechar'
            botaoFechar.onclick = function(){
                popup.remove();
                document.body.style.opacity = 1;
            }

            // coloca os elementos na div popup e entao da append para o body
            popup.appendChild(textDesc)
            popup.appendChild(botaoFechar)
            document.body.appendChild(popup)

            // posicionando no centro 
            const popupAltura = popup.offsetHeight;
            const popupLargura = popup.offsetWidth;
            const telaAltura = window.innerHeight;
            const telaLargura = window.innerWidth;
            const top = (telaAltura - popupAltura) / 2;
            const esq = (telaLargura - popupLargura) / 2;
            
            // estilizando centro
            popup.style.position = 'fixed';
            popup.style.top = `${top}px`;
            popup.style.left = `${esq}px`;
            popup.style.transform = 'translate(0, -50%)';
            document.body.style.opacity = 0.5;

        }
        
        
        divPai.classList.add("personagem");
        
    }
