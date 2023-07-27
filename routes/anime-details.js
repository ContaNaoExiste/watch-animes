const { default: axios } = require("axios")
const express = require("express")
const router = express.Router()

router.get("/:imdb", async (req, res) => {
    try {

        let season = req.params.season ? '/'+ req.params.season : '' 
        let episode = req.params.episode ? '/' + req.params.episode : ''
        const response = await axios.get(`https://watch-animes-api.vercel.app/anime/${req.params.imdb}${season}${episode}`, { timeout: 5000 })
        const data = response.data
        res.render("anime-details.html", data)
    } catch (error) {
        console.error(error)
        res.render("error.html")
    }
})

module.exports = {
    router
}