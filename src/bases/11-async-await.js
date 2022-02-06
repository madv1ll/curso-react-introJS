// const getImagenPromesa = () => new Promise ( resolve => resolve('http://www.fdsffsdfasf.cl'))
// console.log(getImagenPromesa())

// const getImage = async () => {
//     return 'http://www.fdsffsdfasf.cl';
// }
// getImage().then(console.log)

const getImage = async () => {

    try {
        const apiKey = '3Z9jgh99RPxuPQjr77TumVywBg8YD27M';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        //error managemnet
        console.error(error)
    }

}
getImage().then(console.log)