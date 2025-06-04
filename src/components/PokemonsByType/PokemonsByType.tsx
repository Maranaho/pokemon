import { useContext, type FC } from "react"
import { usePokemonByType } from "../../hooks/usePokemonByType"
import { SearchPokemon } from "../SearchPokemon"
import { PokemonContext } from "../../context"
import styles from "./PokemonsByType.module.scss"
interface PokemonsByTypeProps {
  pokemonType: string
}

export const PokemonsByType:FC<PokemonsByTypeProps> = ({ pokemonType }) => {
  const { loading , error , pokemons } = usePokemonByType(pokemonType)
  const { state: { pokemonSearch } } = useContext(PokemonContext)
  const filteredPokemons = pokemons
    .filter(pokemon => pokemon.toLowerCase().includes(pokemonSearch.toLowerCase()))
    .splice(0,20)
  if(error) return <p>{error}</p>
  if(loading) return <p>Loading...</p>

  return (
    <section className={styles.PokemonsByType}>
      <h1>PokemonsByType</h1>
      <SearchPokemon/>
      <div className={styles.pokemonGrid}>
        
      {filteredPokemons
        .map(pokemon=>(
          <article key={pokemon}>
            <button >
              <img src={`https://play.pokemonshowdown.com/sprites/ani/${pokemon}.gif`} />
              <span>{pokemon}</span>
            </button>
          </article>
      ))}
      {filteredPokemons.length === 0 && <p>Nope, nahtin</p>}
      </div>
    </section>
  )
}