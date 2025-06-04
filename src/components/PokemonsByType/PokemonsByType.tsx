import { useContext, type FC } from "react"
import { usePokemonByType } from "../../hooks/usePokemonByType"
import { SearchPokemon } from "../SearchPokemon"
import { PokemonContext } from "../../context"
interface PokemonsByTypeProps {
  pokemonType: string
}

export const PokemonsByType:FC<PokemonsByTypeProps> = ({ pokemonType }) => {
  const { loading , error , pokemons } = usePokemonByType(pokemonType)
  const { state: { pokemonSearch } } = useContext(PokemonContext)
  
  if(error) return <p>{error}</p>
  if(loading) return <p>Loading...</p>

  return (
    <section>
      <h1>PokemonsByType</h1>
      <SearchPokemon/>
      {pokemons
        .filter(pokemon => pokemon.toLowerCase().includes(pokemonSearch.toLowerCase()))
        .splice(0,10)
        .map(pokemon=>(
        <button
          key={pokemon}
        >
          <img src={`https://play.pokemonshowdown.com/sprites/ani/${pokemon}.gif`} />
          <span>{pokemon}</span>
        </button>
      ))}
    </section>
  )
}