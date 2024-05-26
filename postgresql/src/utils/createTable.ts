import postgres_client from "../database.js";
export const createTable = async () => {
  const createUserTableQuery = `
    create table if not exists users (
        id serial primary key,
        email varchar(255) not null,
        password varchar(255) not null
    );`;
  await postgres_client.query(createUserTableQuery);
  const createTodosTableQuery = `
    create table if not exists todos (
        id serial primary key,
        title varchar(255) not null,
        description varchar(255) not null,
        user_id integer references users(id)
    );`;
  await postgres_client.query(createTodosTableQuery);
  console.log("Created tables successfully");
};

export const getAllTasks = async () => {
  const result = await postgres_client.query("select * from todos");
  console.log(result.rows);
  return result.rows;
}