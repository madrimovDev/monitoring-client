import type { RootState } from "@/store/types";
import { createSelector } from "@reduxjs/toolkit";

const selectStudents = (state: RootState): Students.Student[] | null => state.students.students;
export const selectFilteredStudents = createSelector(
  selectStudents,
  (_: RootState, groupID?: number | string) => groupID,
  (students, groupID) => {
    if (groupID === undefined) {
      return students ?? [];
    }
    return (
      students?.filter((student) => {
        const groups = student.groups;
        return !groups.some((group) => group.id === +groupID);
      }) ?? []
    );
  },
);
