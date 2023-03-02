import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { Immutable } from 'immer'

type DirectionsState = Immutable<{
	directions: Directions.Direction[]
	setDirections: (directions: Directions.Direction[]) => void
	createDirection: (direction: Directions.Direction) => void
	updateDirection: (direction: Directions.Direction) => void
	deleteDirection: (id: number) => void
}>

const useDirectionsStore = create<DirectionsState>()(
	immer(set => ({
		directions: [],
		setDirections: dir =>
			set(state => {
				state.directions = dir
			}),
		createDirection: dir =>
			set(state => {
				state.directions.push(dir)
			}),
		updateDirection: dir =>
			set(state => {
				state.directions = state.directions.map(d => (d.id === dir.id ? dir : d))
			}),
		deleteDirection: id =>
			set(state => {
				state.directions = state.directions.filter(d => d.id !== id)
			})
	}))
)

export default useDirectionsStore
