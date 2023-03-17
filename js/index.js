
function getEpisodios(page) {
    let episodios = [
        {
          anime: {
            nome_anime: 'Shin Shinka no Mi: Shiranai Uchi ni Kachigumi Jinsei ep 9',
            descricao: '',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235459/1.jpg'
          },
          episodio: {
            nome_episodio: 'Shin Shinka no Mi: Shiranai Uchi ni Kachigumi Jinsei ep 9',
            url: 'https://akira.anicdn.net/appsd2/235459.mp4',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235459/1.jpg',
            page: 'https://www.anitube.vip/video/235459'
          }
        },
        {
          anime: {
            nome_anime: 'Ars no Kyojuu ep 10',
            descricao: '',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235458/1.jpg'
          },
          episodio: {
            nome_episodio: 'Ars no Kyojuu ep 10',
            url: 'https://akira.anicdn.net/appsd2/235458.mp4',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235458/1.jpg',
            page: 'https://www.anitube.vip/video/235458'
          }
        },
        {
          anime: {
            nome_anime: 'Isekai Nonbiri Nouka ep 10',
            descricao: '',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235456/1.jpg'
          },
          episodio: {
            nome_episodio: 'Isekai Nonbiri Nouka ep 10',
            url: 'https://akira.anicdn.net/appsd2/235456.mp4',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235456/1.jpg',
            page: 'https://www.anitube.vip/video/235456'
          }
        },
        {
          anime: {
            nome_anime: 'Buddy Daddies ep 9',
            descricao: '',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235455/1.jpg'
          },
          episodio: {
            nome_episodio: 'Buddy Daddies ep 9',
            url: 'https://akira.anicdn.net/appsd2/235455.mp4',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235455/1.jpg',
            page: 'https://www.anitube.vip/video/235455'
          }
        },
        {
          anime: {
            nome_anime: 'Pokemon: Mezase Pokemon Master ep 9',
            descricao: '',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235453/1.jpg'
          },
          episodio: {
            nome_episodio: 'Pokemon: Mezase Pokemon Master ep 9',
            url: 'https://akira.anicdn.net/appsd2/235453.mp4',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235453/1.jpg',
            page: 'https://www.anitube.vip/video/235453'
          }
        },
        {
          anime: {
            nome_anime: 'The Legend of Heroes: Sen no Kiseki - Northern War ep 10',
            descricao: '',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235450/1.jpg'
          },
          episodio: {
            nome_episodio: 'The Legend of Heroes: Sen no Kiseki - Northern War ep 10',
            url: 'https://akira.anicdn.net/appsd2/235450.mp4',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235450/1.jpg',
            page: 'https://www.anitube.vip/video/235450'
          }
        },
        {
          anime: {
            nome_anime: 'Nijiyon Animation ep 10',
            descricao: '',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235447/1.jpg'
          },
          episodio: {
            nome_episodio: 'Nijiyon Animation ep 10',
            url: 'https://akira.anicdn.net/appsd2/235447.mp4',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235447/1.jpg',
            page: 'https://www.anitube.vip/video/235447'
          }
        },
        {
          anime: {
            nome_anime: 'Sugar Apple Fairy Tale ep 10',
            descricao: '',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235444/1.jpg'
          },
          episodio: {
            nome_episodio: 'Sugar Apple Fairy Tale ep 10',
            url: 'https://akira.anicdn.net/appsd2/235444.mp4',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235444/1.jpg',
            page: 'https://www.anitube.vip/video/235444'
          }
        },
        {
          anime: {
            nome_anime: 'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Fuka Shou - Yakusai-hen ep 10',
            descricao: '',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235441/1.jpg'
          },
          episodio: {
            nome_episodio: 'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Fuka Shou - Yakusai-hen ep 10',
            url: 'https://akira.anicdn.net/appsd2/235441.mp4',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235441/1.jpg',
            page: 'https://www.anitube.vip/video/235441'
          }
        },
        {
          anime: {
            nome_anime: 'Cap Kakumei Bottleman DX ep 47',
            descricao: '',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235438/1.jpg'
          },
          episodio: {
            nome_episodio: 'Cap Kakumei Bottleman DX ep 47',
            url: 'https://akira.anicdn.net/appsd2/235438.mp4',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235438/1.jpg',
            page: 'https://www.anitube.vip/video/235438'
          }
        },
        {
          anime: {
            nome_anime: 'Spy Kyoushitsu ep 9',
            descricao: '',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235435/1.jpg'
          },
          episodio: {
            nome_episodio: 'Spy Kyoushitsu ep 9',
            url: 'https://akira.anicdn.net/appsd2/235435.mp4',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235435/1.jpg',
            page: 'https://www.anitube.vip/video/235435'
          }
        },
        {
          anime: {
            nome_anime: 'Inu ni Nattara Suki na Hito ni Hirowareta. ep 10',
            descricao: '',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235434/1.jpg'
          },
          episodio: {
            nome_episodio: 'Inu ni Nattara Suki na Hito ni Hirowareta. ep 10',
            url: 'https://akira.anicdn.net/appsd2/235434.mp4',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235434/1.jpg',
            page: 'https://www.anitube.vip/video/235434'
          }
        },
        {
          anime: {
            nome_anime: 'Hyouken no Majutsushi ga Sekai wo Suberu ep 10',
            descricao: '',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235432/1.jpg'
          },
          episodio: {
            nome_episodio: 'Hyouken no Majutsushi ga Sekai wo Suberu ep 10',
            url: 'https://akira.anicdn.net/appsd2/235432.mp4',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235432/1.jpg',
            page: 'https://www.anitube.vip/video/235432'
          }
        },
        {
          anime: {
            nome_anime: 'Oniichan wa Oshimai! ep 10',
            descricao: '',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235431/1.jpg'
          },
          episodio: {
            nome_episodio: 'Oniichan wa Oshimai! ep 10',
            url: 'https://akira.anicdn.net/appsd2/235431.mp4',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235431/1.jpg',
            page: 'https://www.anitube.vip/video/235431'
          }
        },
        {
          anime: {
            nome_anime: 'Revenger ep 10',
            descricao: '',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235428/1.jpg'
          },
          episodio: {
            nome_episodio: 'Revenger ep 10',
            url: 'https://akira.anicdn.net/appsd2/235428.mp4',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235428/1.jpg',
            page: 'https://www.anitube.vip/video/235428'
          }
        },
        {
          anime: {
            nome_anime: 'Yu-Gi-Oh!: Go Rush!! ep 48',
            descricao: '',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235425/1.jpg'
          },
          episodio: {
            nome_episodio: 'Yu-Gi-Oh!: Go Rush!! ep 48',
            url: 'https://akira.anicdn.net/appsd2/235425.mp4',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235425/1.jpg',
            page: 'https://www.anitube.vip/video/235425'
          }
        },
        {
          anime: {
            nome_anime: 'Bungou Stray Dogs 4 - Dublado ep 6',
            descricao: '',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235305/1.jpg'
          },
          episodio: {
            nome_episodio: 'Bungou Stray Dogs 4 - Dublado ep 6',
            url: 'https://akira.anicdn.net/appsd2/235305.mp4',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235305/1.jpg',
            page: 'https://www.anitube.vip/video/235305'
          }
        },
        {
          anime: {
            nome_anime: 'Ooyukiumi no Kaina ep 9',
            descricao: '',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235302/1.jpg'
          },
          episodio: {
            nome_episodio: 'Ooyukiumi no Kaina ep 9',
            url: 'https://akira.anicdn.net/appsd2/235302.mp4',
            thumbnail: 'https://www.anitube.vip/media/videos/tmb/235302/1.jpg',
            page: 'https://www.anitube.vip/video/235302'
          }
        }
      ]

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
                            <a class="card-link" href="./episodio/episodio.html?${new URLSearchParams(episodio.episodio).toString() || ''}"><i class="bi bi-play-btn-fill"></i></a>
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
