function getListAnimesSlide(){
    
    $("#slide-shows").html("")

    fetch("https://watch-animes-api.vercel.app/slide").then(e => e.json())
    .then(data=>{
        if( data && data.animes){
            data.animes.forEach(element => {
                $("#slide-shows").append( getHtmlSlideAnime(element))
            });

            $('.set-bg').each(function () {
                var bg = $(this).data('setbg');
                $(this).css('background-image', 'url(' + bg + ')');
            });
        }
    })
}
function getHtmlSlideAnime(element){

    return `
    <div class="hero__items set-bg" data-setbg="${element.imdb.image || './img/not_found.png'}">
        <div class="row">
            <div class="col-lg-6">
                <div class="hero__text">
                    <div class="label">Adventure</div>
                    <h2>${element.imdb.title}</h2>
                    <p>After 30 days of travel across the world...</p>
                    <a href="anime-watching.html?id=${element.imdb.id}"><span>Watch Now</span> <i class="fa fa-angle-right"></i></a>
                </div>
            </div>
        </div>
    </div>
    `
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
    //getAnimesPopular()
    //getAnimesTrending()

    getListAnimesSlide()
});
