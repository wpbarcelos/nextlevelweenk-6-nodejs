import { createConnection } from 'typeorm'
createConnection().then(() => {
    console.log('connected to database')
}).catch(err => {
    console.log('erro ao conectar com o banco de dados', err.message)
});