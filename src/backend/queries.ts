import serverlessMysql from 'serverless-mysql'
import * as dotenv from 'dotenv'
dotenv.config()

const mysql = serverlessMysql()
mysql.config({
    host     : process.env.DB_ENDPOINT,
    database : process.env.DB_DATABASE,
    user     : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD
})

export const EnableIfDisabled = async (guildId: Number) => {
    return new Promise(async (res, rej) => {
        let response = await mysql.query(`SELECT * FROM ${process.env.DATABASE_THREADS} WHERE guild_id = ?`, [guildId])
        
        console.log(response);
    })
}