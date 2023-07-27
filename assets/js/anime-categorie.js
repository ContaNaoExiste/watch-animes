function getAnimesByCategorie(){
    const categorie = new URLSearchParams(window.location.search).get("categorie")
    if(categorie){
        
        $(".title-categorie").html(categorie)
        $("#episodios-categories").html("")

        fetch("https://watch-animes-api.vercel.app/genre/"+ categorie).then(e => e.json())
        .then(data=>{
            if( data && data.animes){
                data.animes.forEach(element => {
                    $("#episodios-categories").append( getHtmlAnime(element))
                });
    
                $('.set-bg').each(function () {
                    var bg = $(this).data('setbg');
                    $(this).css('background-image', 'url(' + bg + ')');
                });
            }
        })
    }
}

function getHtmlAnime(element){
    return `
    <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg="${element.imdb.image}">
            </div>
            <div class="product__item__text">
                <ul>
                    ${ element.imdb.genre.split(",").map((genre)=>{ return "<li>" + genre + "</li>"})}
                </ul>
                <h5><a href="anime-details.html?id=${element.imdb.id}">${element.imdb.title}</a></h5>
            </div>
        </div>
    </div>
    `
}

$( document ).ready(function() {
    getAnimesByCategorie()
});


