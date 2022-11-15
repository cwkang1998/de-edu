import { Column, Index, Model, Table } from 'sequelize-typescript';

@Table
export class Progress extends Model {
  @Index
  @Column
  address!: string;

  @Index
  @Column
  courseId!: string;

  // should be in the format of courseId-lesson-sublesson
  @Column
  progress!: string;

  // Should be a signature signed by the given address.
  @Column
  progressSignature!: string;
}
