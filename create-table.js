import { sql } from './db.js'

sql`DROP TABLE IF EXISTS videos`.then(() => {
  console.log('Tabela antiga apagada!')

  sql`
    CREATE TABLE videos (
      id TEXT PRIMARY KEY, -- A VÍRGULA VAI AQUI
      title TEXT,
      description TEXT,
      duration INTEGER
    );
  `.then(() => {
    console.log('Tabela nova criada com sucesso!')
  })
})