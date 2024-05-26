import pkg from 'pg'

const { Client } = pkg

const postgres_client = new Client({ connectionString: "postgresql://Vikram:Vikram@123@localhost:5432/postgres", });

export default postgres_client