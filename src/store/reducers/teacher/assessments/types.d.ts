declare namespace Assessments {
  export interface AssessmentsResponse {
    message: string;
    assessments: StudentAssessment[];
  }

  export interface AssessmentResponse {
    message: string;
    assessment: {id: number; score: number; comment: string};
  }

  export interface StudentAssessment {
    id: number;
    name: string;
    surname: string;
    assessment: Assessment | null;
  }

  export interface Assessment {
    id: number;
    score: number;
    comment: string;
    studentId: number;
    lessonId: number;
    groupId: number;
  }
}
