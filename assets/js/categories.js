function getAnimesByCategorie(){
    $("#list-categories").html("")

    fetch("https://watch-animes-api.vercel.app/genres").then(e => e.json())
    .then(data=>{
        if( data && data.categorias){
            data.categorias.forEach(element => {
                $("#list-categories").append( getHtmlCategorie(element))
            });

            $('.set-bg').each(function () {
                var bg = $(this).data('setbg');
                $(this).css('background-image', 'url(' + bg + ')');
            });
        }
    })
}

function getHtmlCategorie(element){
    return `
    <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="product__item">
            <div class="product__item__text">
                <h5><a href="anime-categorie.html?categorie=${element}">${element}</a></h5>
            </div>
        </div>
    </div>
    `
}

$( document ).ready(function() {
    getAnimesByCategorie()
});


