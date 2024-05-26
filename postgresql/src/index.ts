import postgres_client from "./database.js";
import { createTable, getAllTasks } from "./utils/createTable.js";
import { createUser, getUser, dropTable } from "./utils/createUser.js";
import { addTask } from "./utils/AddTask.js";
postgres_client.connect().then(() => console.log("connected")).catch((err) => console.log(err));

// createTable();
// createUser('radha@harivansh.com', 'radha@123');
// createUser('nikunj@harivansh.com', 'nikunj@123');
// createUser('lalita@harivansh.com', 'lalita@123');
// createUser('chitra@harivansh.com', 'chitra@123');
// createUser('vishakha@harivansh.com', 'vishakha@123');
// createUser('sudevi@harivansh.com', 'sudevi@123');
// createUser('rangdevi@harivansh.com', 'rangdevi@123');
// createUser('champaklata@harivansh.com', 'champaklata@123');
// createUser('indulekha@harivansh.com', 'indulekha@123');
// createUser('tungvidha@harivansh.com', 'tungvidha@123');
// createUser('Shrihitsajniju@harivansh.com', 'Shrihitsajniju@123');
// getUser()
// addTask("task 1", "task 1 description", 60);
// addTask("task 3", "task 3 description", 1);
getAllTasks()

// dropTable();


// async function main2() {
//     await postgres_client.query("insert into users (name, email, password, role) values ('Radha', 'Radha@nikunj.com', 'Krishna', 'Maharani');");
// }

// async function main3() {
//     const result = await postgres_client.query("select * from users;");
//     console.log(result.rows);
// }

// async function main4() {
//     await postgres_client.query("delete from users where id = 3;");
// }

// async function main5() {
//     await postgres_client.query("drop table users;");
// }