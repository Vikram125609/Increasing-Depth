import postgres_client from "../database.js";

export const createUser = async (email: string, password: string) => {
  await postgres_client.query(
    "insert into users (email, password) values ($1, $2);",
    [email, password]
  );
};

export const getUser = async () => {
  const result = await postgres_client.query("select * from users");
  console.log(result.rows);
  return result.rows[0];
};


export const dropTable = async () => {
    await postgres_client.query("drop table todos;");
  await postgres_client.query("drop table users;");
}