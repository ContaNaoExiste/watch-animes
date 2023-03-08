
function getEpisodios(page) {
    let episodios = [
        {	
			anime: {
				nome_anime:" Fumetsu no Anata e 2 – Episódios 16 & 17",
				thumbnail:`https://i.redd.it/7ixgte68ioha1.jpg`
			},
			episodio:{
				thumbnail:`https://i.redd.it/7ixgte68ioha1.jpg`
			}
		},

        {	
			anime: {
				nome_anime:"Archmage Transcending through Regression - Capítulo 187",
				thumbnail:`https://i.redd.it/48988k82sqla1.png`
			},
			episodio:{
				thumbnail:`https://i.redd.it/48988k82sqla1.png`
			}
		},


        {	
			anime: {
				nome_anime:"Teste 3",
				thumbnail:`https://i.redd.it/mueb2pcjgbma1.jpg`
			},
			episodio:{
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

    for (let index = 0; index < episodios.length; index++) {
        const episodio = episodios[index]

        $("#grid-episodios").append(
            `
            <div class="col-4">
            <div class="card text-bg-dark">
                <img src="${episodio.episodio.thumbnail}" class="card-img" alt="..." height="300" >
                <div class="card-body">
                    <h5 class="card-title">${episodio.anime.nome_anime}</h5>
                    <h6 class="card-subtitle">Card subtitle</h6>
                    <a href="#" class="card-link">Assistir</a>
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
