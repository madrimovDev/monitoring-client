import { type RootState } from "@/store/types";

type Lessons = RootState['teacherStore']['lessons']

export const getLessons = (state: RootState): Lessons => state.teacherStore.lessons