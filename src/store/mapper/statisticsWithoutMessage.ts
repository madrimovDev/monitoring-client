export const statisticsWithoutMessage = (data: Dashboard.Response): Dashboard.Statistics => {
	return {
		directions: data.directions,
		groups: data.groups,
		students: data.students,
		teachers: data.teachers
	}
}
