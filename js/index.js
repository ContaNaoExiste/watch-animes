
function getEpisodios() {
    const episodios = [
        {	
			anime: {
				nome_anime:"Teste 1",
				thumbnail:`https://i.redd.it/7ixgte68ioha1.jpg`
			},
			episodio:{
				thumbnail:`https://i.redd.it/7ixgte68ioha1.jpg`
			}
		},

        {	
			anime: {
				nome_anime:"Teste 2",
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

    $("#grid-episodios").html("")

    for (let index = 0; index < episodios.length; index++) {
        const episodio = episodios[index]

        $("#grid-episodios").append(
            `
            <div class="col-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${episodio.anime.nome_anime}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <figure class="figure">
                    <img src="${episodio.episodio.thumbnail}" class="figure-img img-fluid rounded" alt="...">
                    <figcaption class="figure-caption bold">A caption for the above image.</figcaption>
                    </figure>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
            </div>`

        )
        console.log(episodio, " episodio")
    }
}
// A $( document ).ready() block.
$( document ).ready(function() {
    getEpisodios()
});
