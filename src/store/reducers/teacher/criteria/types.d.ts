import type {RemoveKeys} from '@/store/types';

declare namespace Criteria {
  export interface CriteriasResponse {
    message: string;
    criterias: Criteria[];
  }
  export interface CriteriaResponse {
    message: string;
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
    scroings: Scroing[];
    teacher: Teacher;
  }

  export interface Scroing {
    id: number;
    value: number;
    description: string;
    criteriaId: number;
  }

  export interface Teacher {
    id: number;
    name: string;
    surname: string;
    status: string;
  }

  export interface NewCriteria {
    maximum: number;
    name: string;
    description?: string;
    scorings: Array<RemoveKeys<Scroing, 'criteriaId' | 'id'>>;
  }
}
