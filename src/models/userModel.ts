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

export default { create };
