import postgres_client from "../database.js";

export const addTask = async (title: string, description: string, user_id: number) => {
    await postgres_client.query(
        "insert into todos (title, description, user_id) values ($1, $2, $3);",
        [title, description, user_id]
    );
}