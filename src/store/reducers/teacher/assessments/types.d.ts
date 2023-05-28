declare namespace Assessments {
  export interface AssessmentsResponse {
    message: string;
    assessments: StudentAssessment[];
  }

  export interface StudentAssessment {
    id: number;
    name: string;
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