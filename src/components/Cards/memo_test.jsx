import React from 'react';
import { useState, useEffect } from 'react';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import { Link } from 'react-router-dom';
import {Swal} from 'sweetalert2';
const images = [
    "https://firebasestorage.googleapis.com/v0/b/memo-29a1c.appspot.com/o/alf1.png?alt=media&token=5e977bd5-8f0d-42ad-b122-d27d7ac24ec9",
    "https://firebasestorage.googleapis.com/v0/b/memo-29a1c.appspot.com/o/attaque1.png?alt=media&token=af3f3fda-f823-43d7-95b5-640d790644bd",
    "https://firebasestorage.googleapis.com/v0/b/memo-29a1c.appspot.com/o/avatar1.png?alt=media&token=e7717fc9-36cb-4d72-b724-3d70720d9a91",
    "https://firebasestorage.googleapis.com/v0/b/memo-29a1c.appspot.com/o/et1.png?alt=media&token=0323ea2e-d3be-4472-aea8-1434c69c59b7",
    "https://firebasestorage.googleapis.com/v0/b/memo-29a1c.appspot.com/o/futurama1.png?alt=media&token=d64c016f-5de3-4325-aeda-47879a07d1e9",
    "https://firebasestorage.googleapis.com/v0/b/memo-29a1c.appspot.com/o/groot1.png?alt=media&token=cbf3f336-842e-487d-bb67-095a57b3b366",
    "https://firebasestorage.googleapis.com/v0/b/memo-29a1c.appspot.com/o/marvin1.png?alt=media&token=3a441458-8ecb-4f45-8308-26b0dd7b259b",
    "https://firebasestorage.googleapis.com/v0/b/memo-29a1c.appspot.com/o/spock1.png?alt=media&token=56f640d7-1327-4ad2-b414-79c6ba32e39f",
    "https://firebasestorage.googleapis.com/v0/b/memo-29a1c.appspot.com/o/v1.png?alt=media&token=756b8086-d035-4d73-b6c4-e98c398dfa47",
    "https://firebasestorage.googleapis.com/v0/b/memo-29a1c.appspot.com/o/chewwie1.png?alt=media&token=cc13d1fb-2526-44aa-a9ee-ffc4e6686412"
].flatMap((image) =>[`a| ${image}`, `b| ${image}`]).sort(() => Math.random() - 0.5);

const MemoTest = () => {
    const[guessed, setGuessed]= useState([]);
    const[selected, setSelected]= useState([]);
    useEffect(()=>{
        if(selected.length === 2){
            if(selected[0].split("|")[1] === selected[1].split("|")[1]){ 
             setGuessed((guessed) => guessed.concat(selected));
       } 
       setTimeout(() => setSelected([]), 2000) 
      }
    },[selected])
    const mostrarAlerta = ()=>{
        Swal.fire('ganaste!')

        
    }
    const reload = ()=>{
       window.location='/' 
    }
    useEffect(()=>{
        if(guessed.length === images.length){
            alert('you win!')
           reload()                
        }
    }, [guessed])
    return (
    <div className='app  text-center'>
        <div className='row cardStyles'>
            {images.map((image)=>{
                const[, url]= image.split("|") 
                return(
            <div key={image} className="card estiloImg" onClick={()=> selected.length < 2 && setSelected((selected) => selected.concat(image))} style={{width: '10rem'}}>
                {selected.includes(image) || guessed.includes(image) ? (
                <img className='imgTamaño card-img-top' key={url} alt="img" src={url} />)
                :(
                    <img className='imgTamaño card-img-top' alt="img" src={"https://firebasestorage.googleapis.com/v0/b/memo-29a1c.appspot.com/o/ufo.jpg?alt=media&token=35cca939-1121-445f-a0b9-cb5fa24f35e8"}/>
                )}
            </div>
            );
        })}
            </div>
        </div>

      
    );
}

export default MemoTest;

