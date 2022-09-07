

const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=z0IwyDiS4CHrjhy4nyUjGfFE5O22PhDT`
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs
}