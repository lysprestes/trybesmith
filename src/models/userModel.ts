import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import UserInterface from '../interfaces/userInterface';

const create = async ({ username, password, level, classe }: UserInterface) => {
  const query = `
    INSERT INTO Trybesmith.Users (username, password, level, classe)
    VALUES (?, ?, ?, ?)
  `;
  const values = [username, password, level, classe];
  const [rows] = await connection.query(query, values);
  return rows;
};

const find = async (username: string, password: string): Promise<any> => {
  const query = `
    SELECT * FROM Trybesmith.Users
    WHERE username = ? AND password = ?
  `;
  const rows = await connection
    .query<ResultSetHeader>(query, [username, password]);
  const data = JSON.parse(JSON.stringify(rows))[0];
  return data[0];
};

export default { create, find };
