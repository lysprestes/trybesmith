import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import ProductInterface from '../interfaces/productInterface';

const create = async ({ name, amount }: ProductInterface) => {
  const query = `
    INSERT INTO Trybesmith.Products (name, amount)
    VALUES (?, ?)
  `;
  const values = [name, amount];
  const [rows] = await connection.query<ResultSetHeader>(query, values);
  const data = JSON.parse(JSON.stringify(rows));
  return data;
};

export default { create };