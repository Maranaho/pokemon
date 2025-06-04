import { createContext, type Dispatch } from "react"

interface State {
  selectedTrainer: string
  pokemonSearch: string
}

type Action =
  | { type: "SET_TRAINER"; payload: string }
  | { type: "SET_POKEMON_SEARCH"; payload: string }

const initialState: State = {
  selectedTrainer: "greyman",
  pokemonSearch: "",
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {

    case "SET_TRAINER":
      return {
        ...state,
        selectedTrainer: action.payload,
      }
    case "SET_POKEMON_SEARCH":
      return {
        ...state,
        pokemonSearch: action.payload,
      }
    default:
      return state
  }
}

const defaultDispatch: Dispatch<Action> = () => {
  throw new Error("dispatch must be used within a PokemonProvider")
}

const PokemonContext = createContext<{
  state: State
  dispatch: Dispatch<Action>
}>({ state: initialState, dispatch: defaultDispatch })

export { initialState, reducer, PokemonContext }