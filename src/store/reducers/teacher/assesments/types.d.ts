export interface RootObject {
  message: string;
  assessments: StudentAssessment[];
}

export interface StudentAssessment {
  id: number;
  name: string;
  assessment: Assessment;
}

export interface Assessment {
  id: number;
  score: number;
  comment: string;
  studentId: number;
  lessonId: number;
  groupId: number;
}
