
function getEpisodios(page) {
    let episodios = [
        {	
			anime: {
				nome_anime:"Fumetsu no Anata e 2",
                descricao: "",
				thumbnail:`https://i.redd.it/7ixgte68ioha1.jpg`
			},
			episodio:{
                nome_episodio: "Episódios 16 & 17",
                url:"https://sweet.lime.stream/vod/c07385fbdd9b79e7caab6ccd6bed1861/83e4a1e57bebc3d0baded8e975dac869.mp4",
				thumbnail:`https://i.redd.it/7ixgte68ioha1.jpg`
			}
		},

        {	
			anime: {
				nome_anime:"Archmage Transcending through Regression",
				thumbnail:`https://i.redd.it/48988k82sqla1.png`
			},
			episodio:{
                nome_episodio: "Capítulo 187",
                url:"https://sweet.lime.stream/vod/daf670510f8016f123d7e1a55f526d30/f3655e83ef0df0142bd1814144594317.mp4",
				thumbnail:`https://i.redd.it/48988k82sqla1.png`
			}
		},


        {	
			anime: {
				nome_anime:"Vinland Saga Season 2",
                descricao:`Um novo milênio começa na parte sul da península da Jutlândia, na Dinamarca. Thorfin foi comprado pelo proprietário de terras Ketil como um "escravo" e se engajou no trabalho de recuperação de terras em sua fazenda. Thorfinn conhece um jovem lá, Einar, que também era um escravo como ele. O encontro de Einar levou Thorfinn a enfrentar os pecados que havia cometido e começou a encontrar sentido na vida. Por outro lado, Canuto, que se tornou rei da Inglaterra, tentou estender seu território para o estabelecimento da "terra prometida". Esta é "A História de um Verdadeiro Guerreiro (Saga)". "A história da Expiação e Salvação (Saga)" que está além do prólogo. (Fonte: Site oficial, editado).`,
				thumbnail:`https://i.redd.it/mueb2pcjgbma1.jpg`
			},
			episodio:{
                nome_episodio: "Episódio 9",
				thumbnail:`https://i.redd.it/mueb2pcjgbma1.jpg`
			}
		},

        {	
			anime: {
				nome_anime:"Teste 4",
				thumbnail:`https://i.redd.it/7plte3g83cla1.png`
			},
			episodio:{
				thumbnail:`https://i.redd.it/7plte3g83cla1.png`
			}
		},
        
        {	
			anime: {
				nome_anime:"Teste 5",
				thumbnail:`https://i.redd.it/rhyscsjjwcla1.png`
			},
			episodio:{
                episodio_id: 1,
				thumbnail:`https://i.redd.it/rhyscsjjwcla1.png`
			}
		}
        
    ]

    episodios = episodios.concat(episodios)
    episodios = episodios.concat(episodios)
    if (page) {
        console.log("page", page);
    }
    $("#grid-episodios").html("")

    //const template = req
    for (let index = 0; index < episodios.length; index++) {
        const episodio = episodios[index]

        $("#grid-episodios").append(
            `
            <div class="col-xs-12 col-sm-2 d-flex align-items-stretch" style='padding-bottom: 20px;'>
                <div class="card text-bg-dark card-espisodio">
                    <img src="${episodio.episodio.thumbnail}" class="card-img img-episodio" alt="..." style="max-height: 250px; min-height: 150px;" >
                    <div class="card-body">
                        <div class='text-start'>
                            <p class="card-title">${episodio.anime.nome_anime}</p>
                            <p class="card-title"><strong>${episodio.episodio.nome_episodio|| ''}</strong></p>
                        </div>
                        <div class="text-end " style='position: absolute; right: 10px; bottom: 10px; left: 0;'>
                            <a class="card-link" href="./episodio/episodio.html?episodio=${episodio.episodio.episodio_id || 0}"><i class="bi bi-play-btn-fill"></i></a>
                        </div>
                    </div>
                </div>
            </div>`

        )
        console.log(episodio, " episodio")
    }

    getPaginationEpisodios(page)
}

function getPaginationEpisodios(page) {
    const pagination = {
        itens: 10,
        pages: 11
    }
    $(".pagination-episodios").html("")

    $(".pagination-episodios").append(`<li class="page-item"><a class="page-link" onclick="getEpisodios(0)">Previous</a></li>`)

    for (let index = 0; index < pagination.pages; index++) {
        $(".pagination-episodios").append(`
        <li class="page-item ${(index == page) ?  ' active': ""}" ${(page && index == page) ?  'aria-current="page"': ""}>
            <a class="page-link" onclick="getEpisodios(${index});" >${index+1}</a>
        </li>`)
    }

    $(".pagination-episodios").append(`<li class="page-item"><a class="page-link" onclick="getEpisodios(0)">Next</a></li>`)
    
}
// A $( document ).ready() block.
$( document ).ready(function() {
    getEpisodios()
});
