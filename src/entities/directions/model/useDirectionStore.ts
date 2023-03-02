import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { Immutable } from 'immer'

type DirectionsState = Immutable<{
	directions: Directions.Direction[]
	setDirections: (directions: Directions.Direction[]) => void
}>

const useDirectionsStore = create<DirectionsState>()(
	immer(set => ({
		directions: [],
		setDirections: dir =>
			set(state => {
				state.directions = dir
			})
	}))
)

export default useDirectionsStore
