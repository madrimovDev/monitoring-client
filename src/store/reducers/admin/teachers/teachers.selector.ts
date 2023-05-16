import type { RootState } from "@/store/types";

type Teachers = RootState['adminStore']['teachers']
type TeachersDrawer = RootState['adminStore']['teachersDrawer'];

export const selectTeachers = (state: RootState): Teachers => state.adminStore.teachers
export const selectTeachersDrawer = (state: RootState): TeachersDrawer => state.adminStore.teachersDrawer;