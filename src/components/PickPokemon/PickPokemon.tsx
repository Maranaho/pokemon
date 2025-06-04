import { useState } from "react"
import { ListPokemonTypes } from "../ListPokemonTypes"
import { PokemonsByType } from "../PokemonsByType"
import { useNavigate  } from "react-router-dom"

export const PickPokemon = () => {
  const [ pokemonType, setPokemonType ] = useState<string | null>(null)
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate("/pick-an-arena")
  }
  return (
    <section>
      <h1>PickPokemon</h1>
      {pokemonType ? <PokemonsByType pokemonType={pokemonType}/> : <ListPokemonTypes setPokemonType={setPokemonType}/>}
      <button onClick={()=>navigate("/pick-a-trainer")}>Back</button>
      <button onClick={handleClick}>Select an arena</button>
    </section>
  )
}