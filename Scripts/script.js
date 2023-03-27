const timestamp = '1679928680';
const apiKey = '0fb8b67fedf191417313dd260414f6b1';
const md5 = '93fd096dcc0f3437b7f95fe9a46831f9';

fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${md5}&limit=20`) // puxa todos os dados da url especificada
.then((res) => {
    return res.json()
}).then((jsonParsed) =>{

   const divHero = document.querySelector('#herois');

    jsonParsed.data.results.forEach(element => {
        const srcImg = element.thumbnail.path + '.' + element.thumbnail.extension
        const nomeHeroi = element.name
        const heroDesc = element.description

        createDivhero(srcImg, nomeHeroi, divHero, heroDesc);

    });

    console.log(jsonParsed)
})

    function createDivhero(srcImg, nomeHeroi, divToAppend){
        const divPai = document.createElement('div')
        const divFilho = document.createElement('div')
        const textName = document.createElement('text')
        const botao = document.createElement('input')
        const img = document.createElement('img')
        botao.type='button';
        
        
        textName.textContent = nomeHeroi
        img.src = srcImg
        
        divFilho.appendChild(img)
        divFilho.appendChild(textName)
        divFilho.appendChild(botao)
        divPai.appendChild(divFilho)
        divToAppend.appendChild(divPai)
        
        botao.onclick = function escreverDesc(descricao){
            console.log('aaa')
            const textDesc = document.createElement('text')
            textDesc.textContent = descricao
            divFilho.appendChild(descricao)
        }
        
        divPai.classList.add("personagem");

    }

