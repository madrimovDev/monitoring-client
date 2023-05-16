import type { RootState } from "@/store/types";
import { createSelector } from "@reduxjs/toolkit";

type Students = RootState['adminStore']['students'];
type StudentsDrawer = RootState['adminStore']['studentsDrawer'];

export const selectStudents = (state: RootState): Students => state.adminStore.students;
export const selectStudentsDrawer = (state: RootState): StudentsDrawer => state.adminStore.studentsDrawer;
export const selectFilteredStudents = createSelector(
  selectStudents,
  (_: RootState, groupID?: number | string) => groupID,
  (students, groupID) => {
    if (groupID === undefined) {
      return students ?? [];
    }
    return (
      students.students?.filter((student) => {
        const groups = student.groups;
        return !groups.some((group) => group.id === Number(groupID));
      }) ?? []
    );
  },
);