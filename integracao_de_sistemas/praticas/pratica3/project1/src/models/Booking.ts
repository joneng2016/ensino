import {
  Column,
  Model,
  Table,
  AutoIncrement,
  PrimaryKey,
} from 'sequelize-typescript';

@Table
export class Booking extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  title: string;

  @Column
  authorEmail: string;
}
