function getAnimeById(){
    const imdb = new URLSearchParams(window.location.search).get("id")
    if(imdb){
        fetch("https://watch-animes-api.vercel.app/anime/"+ imdb).then(e => e.json())
        .then(data=>{
            if( data){
                $("#anime-video").html(`
                    <iframe id="player" src="${data.warezcdn.href}" playsinline controls data-poster="${data.imdb.image}" width="100%" height="650px" ></iframe>
                `)
                $("#anime-title").html(data.imdb.title)
            }
        })
        
    }
}

$( document ).ready(function() {
    getAnimeById()
});