function getAnimeById(){
    const imdb = new URLSearchParams(window.location.search).get("id")
    if(imdb){
        fetch("https://watch-animes-api.vercel.app/anime/"+ imdb).then(e => e.json())
        .then(data=>{
            if( data){
                $("#anime-title").html(data.imdb.title)
                $("#anime-plot").html(data.imdb.plot)
                $("#anime-capa").attr("data-setbg", data.imdb.image)
                $("#anime-capa").data("setbg", data.imdb.image)
                $("#anime-watching").attr("href", `anime-watching.html?id=${data.imdb.id}`)
                
                $("#anime-genres").html(data.imdb.genre.split(",").map((genre)=>{ return "<li>" + genre + "</li>"})) 
                $('.set-bg').each(function () {
                    var bg = $(this).data('setbg');
                    $(this).css('background-image', 'url(' + bg + ')');
                });
            }
        })
        
    }
}

$( document ).ready(function() {
    getAnimeById()
});