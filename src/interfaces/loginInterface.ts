import { FieldPacket, RowDataPacket } from 'mysql2/promise';

export interface LoginInterface {
  username: string;
  password: string;
}

export interface LoginSQLInterface extends RowDataPacket{
  username: string;
  password: string;
}

export type SelectLoginResult = [LoginInterface[], FieldPacket[]];