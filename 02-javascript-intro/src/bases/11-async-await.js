
const getImagen = async()=>{

    try {
    const apiKey='e7WhUAGXrhztjCfJozBUGUisrvoW9TAD';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const {data}= await resp.json();
   
    const {url} = data.images.original;
    console.log(url)
    console.log(data);
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img); 
    } catch (error) {
        console.log(error);
    }
   
}

getImagen();

