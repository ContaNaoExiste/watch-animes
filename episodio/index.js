
function preencherDadosEpisodio(params) {
    $("#card-title-episodio").html("Vinland Saga Season 2 Episódio 9")
    $("#card-title-anime").html("Vinland Saga Season 2")
    $("#card-title-descricao-anime").html(`Um novo milênio começa na parte sul da península da Jutlândia, na Dinamarca. Thorfin foi comprado pelo proprietário de terras Ketil como um "escravo" e se engajou no trabalho de recuperação de terras em sua fazenda. Thorfinn conhece um jovem lá, Einar, que também era um escravo como ele. O encontro de Einar levou Thorfinn a enfrentar os pecados que havia cometido e começou a encontrar sentido na vida. Por outro lado, Canuto, que se tornou rei da Inglaterra, tentou estender seu território para o estabelecimento da "terra prometida". Esta é "A História de um Verdadeiro Guerreiro (Saga)". "A história da Expiação e Salvação (Saga)" que está além do prólogo. (Fonte: Site oficial, editado).`)
    //$("#iframe-episodio").attr("src", "response.html")
    $("#iframe-episodio").attr("src", "https://sweet.lime.stream/vod/daf670510f8016f123d7e1a55f526d30/f3655e83ef0df0142bd1814144594317.mp4")
    
}

$( document ).ready(function() {
    preencherDadosEpisodio()
});
