import {
  Column,
  Model,
  Table,
  AutoIncrement,
  PrimaryKey,
} from 'sequelize-typescript';
  
@Table
export class ProdutoMercado extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  nome: string;

  @Column
  empresa: string;

  @Column
  quantidade: number;

  @Column
  preco: number;
}
  