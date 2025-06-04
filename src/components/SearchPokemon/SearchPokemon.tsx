import { useContext, type ChangeEvent } from "react"
import { PokemonContext } from "../../context"
// import styles from "./SearchPokemon.module.scss"
import { Input } from "../Input"
export const SearchPokemon = () => {
  const { state: { pokemonSearch }, dispatch } = useContext(PokemonContext)
  return (
    <header>
      <Input
        type="search"
        placeholder="Search for a pokemon"
        value={pokemonSearch}
        onChange={(e:ChangeEvent<HTMLInputElement>)=>dispatch({type:"SET_POKEMON_SEARCH",payload:e.target.value})}
        name="pokemonSearch"
      />
    </header>
  )
}
