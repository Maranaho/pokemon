import { useContext } from "react"
import { PokemonContext } from "../../context"
import styles from "./SearchPokemon.module.scss"
export const SearchPokemon = () => {
  const { state: { pokemonSearch }, dispatch } = useContext(PokemonContext)
  return (
    <header className={styles.SearchPokemon}>
      <input
        type="search"
        placeholder="Search for a pokemon"
        value={pokemonSearch}
        onChange={(e)=>dispatch({type:"SET_POKEMON_SEARCH",payload:e.target.value})}
      />
    </header>
  )
}
