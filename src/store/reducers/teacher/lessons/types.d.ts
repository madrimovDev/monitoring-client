declare namespace Lessons {
  export interface LessonsResponse {
    message: string;
    lessons: Lesson[];
  }
  export interface LessonResponse {
    message: string;
    lesson: Lesson;
  }

  export interface Lesson {
    id: number;
    date: string;
    title: string;
    type: string;
    criteria: Criteria;
  }

  export interface Criteria {
    id: number;
    name: string;
    description: string;
    maximum: number;
    organizationId: number;
    teacherId: number;
    status: string;
  }

  export interface NewLesson {
    title: string;
    date: string;
    criteria: number;
    type: 'lesson' | 'practice' | 'exam';
  }
}
