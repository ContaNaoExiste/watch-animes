
function preencherDadosEpisodio(params) {
    episodio = new URLSearchParams(window.location.search)
    $("#card-title-episodio").html(episodio.get("nome_episodio"))
    $("#card-title-anime").html(episodio.get("nome_episodio"))
    $("#card-title-descricao-anime").html(episodio.get("nome_episodio"))
    //$("#iframe-episodio").attr("src", "response.html")
    $("#iframe-episodio").attr("src", episodio.get("thumbnail"))
    
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "video/mp4");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Origin", "https://www.anitube.vip");
    myHeaders.append("referer", episodio.get("page"));
    
    let request = new Request(episodio.get("url"), {
        method: "GET",
        headers: myHeaders,
        mode: "cors",
        cache: "default",
    })
    fetch(request)
    .then((response) => response.blob())
    .then((response) => {
        const objectURL = URL.createObjectURL(response);
        console.log( objectURL);
        //myImage.src = objectURL;
    });
    /*$.get( episodio.get("url"),
    {
        headers: {
            "referer": `https://www.anitube.vip/video/235456`
        }
    },
     function( data ) {
        $( "body" ).html( data );
        alert( "Load was performed." );
    });*/

   /* const res = fetch(episodio.get("url"), {
        method: 'GET',
        headers: {
        // Here you can set any headers you want
        }
    });
    const blob = res.blob();
    const urlObject = URL.createObjectURL(blob);*/
    //$("#iframe-episodio").attr("src", episodio.get("url"))
      
    
    
    //$("#iframe-episodio").attr("src", "https://sweet.lime.stream/vod/daf670510f8016f123d7e1a55f526d30/f3655e83ef0df0142bd1814144594317.mp4")
    //$("#iframe-episodio").attr("src", "https://akira.anicdn.net/appsd2/235456.mp4")
    
}

$( document ).ready(function() {
    preencherDadosEpisodio()
});
