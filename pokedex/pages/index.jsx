import React from 'react';
import Link from 'next/link';
import Styles from './index.module.scss';

export async function getStaticProps() {
    const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2')
      .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
          return respostaDoServer.json();
        }
        throw new Error('Deu ruim');
      })
      .then((respostaEmObjeto) => respostaEmObjeto.pokemon_entries);
    
      return{
        props: {
          pokemons
        },
      };
  
  }
  
  
  
  export default function Home(props) {
    const { pokemons } = props;
  
    return (
      <div>
          
        <div className={Styles.title}>
          Pokédex do Estagiário
        </div>
  
        <ul className={Styles.card}>
          {pokemons.map((pokemon ) => (
            <li  key={pokemon.entry_number}>
              <Link href={`/pokemon/${pokemon.entry_number}`}>
                <a>
                  <div>
                  {pokemon.entry_number}  
                  - {pokemon.pokemon_species.name}
                  </div>
                   <hr />
                   <p> 
                   <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`} alt = "sprite"/>
                   </p>
                </a>
              </Link>
  
            </li>
          ))}
        </ul>
      </div>
    );
  }