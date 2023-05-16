import type { RootState } from "@/store/types";

type Directions = RootState['adminStore']['directions']
type DirectionsDrawer = RootState['adminStore']['directionsDrawer'];

export const selectDirections = (state: RootState): Directions => state.adminStore.directions
export const selectDirectionsDrawer = (state: RootState): DirectionsDrawer => state.adminStore.directionsDrawer