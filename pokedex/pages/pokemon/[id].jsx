import React from 'react';
import styles from './id.module.scss';

export default function Pokemon({pokemon, id}){
    console.log();
    return(
        <body>
            <div className = {styles.bgrd}>

                <div className = {styles.cardDex}>
                    <p>
                        Número: {id}
                    </p>
                        Nome: {pokemon.species.name}
                    <p>
                        Tipo: {pokemon.types.map(elemento => {
                            return (
                            <span className={styles.espaço} key={elemento.slot}>
                                {elemento.type.name}
                            </span>
                        )})}
                    </p>
                    <p>
                    Habilidades: {pokemon.abilities.map(elemento => {
                            return (
                            <span className={styles.espaço} key={elemento.slot}>
                                {elemento.ability.name}
                            </span>
                        )})}
                    </p>
                    
                    Altura: {pokemon.height}

                    <p>
                        Peso: {pokemon.weight}
                    </p>
                        
                    <p>
                        Stats:
                        {pokemon.stats.map(elemento => {
                            return (
                            <p  key={elemento.slot}>
                                {elemento.stat.name}:
                                {elemento.base_stat}
                            </p>
                        )})}
                    </p>

                    <img src={pokemon.sprites.front_default} alt="Imagem de um Pokemon" />
                    
                </div>
            </div>
            
        </body>
        
               
        
    )
}

export async function getServerSideProps({params}){
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    .then((respostaDoServer)=>{
        if(respostaDoServer.ok){
        return respostaDoServer.json();   
    }
    throw new Error('Deu ruim');
    })
    .then((respostaEmObjeto)=>respostaEmObjeto);
    
    return{
        props:{
            pokemon,
            id: params.id
        }
    }
}