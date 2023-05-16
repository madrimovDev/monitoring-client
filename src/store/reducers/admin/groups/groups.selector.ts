import type { RootState } from "@/store/types";

type Groups = RootState['adminStore']['groups']
type GroupsDrawer = RootState['adminStore']['groupsDrawer'];

export const selectGroups = (state: RootState): Groups => state.adminStore.groups  
export const selectGroupsDrawer = (state: RootState): GroupsDrawer => state.adminStore.groupsDrawer;  