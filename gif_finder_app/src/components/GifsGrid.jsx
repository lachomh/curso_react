import React, { useEffect, useState } from 'react';
import GifGriditem from './GifGriditem';

const GifsGrid = ({categoria}) => 
{
    const [imagenes, setImagenes] = useState([]);
    useEffect(() => {
        getGifs();
    }, [ ]);
    

    const getGifs = async () => {
        const api_key="By0vDa2Qj9z7wOBBd266j7G3n8VIYErj";
        const url = 
        `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categoria}&limit=10`;
        

        const resp = await fetch (url);
        const {data} = await resp.json();

        const gifs = data.map ((gif) =>{
            return{
                if: gif.id,
                title: gif.title,
                url: gif.images.downsized_medium.url
              };
        });

    setImagenes(gifs);
    };
    

    return (
        <>
        <h3> {categoria} </h3>
        <div className="card-grid">
             
              {imagenes.map((imagen) => {
                  return <GifGriditem key={imagen.id} imagen={imagen} />;
              })}
        </div>
        </>
    );
};

export default GifsGrid;
