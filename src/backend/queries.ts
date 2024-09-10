import serverlessMysql from 'serverless-mysql'
import * as dotenv from 'dotenv'
dotenv.config()

const mysql = serverlessMysql()
mysql.config({
    host     : process.env.DB_ENDPOINT,
    database : process.env.DB_DATABASE,
    user     : process.env.DB_USERNAME,
    //password : process.env.DB_PASSWORD
})

export const EnableIfDisabled = async (guildId: Number) => {
    return new Promise(async (res, rej) => {
        let response = await mysql.query(`SELECT * FROM ${process.env.DATABASE_THREADS} WHERE guild_id = ?`, [guildId])
    })
}

export const ValidateThreadExistence = async (guild_id: Number) => {
    let threadCheck = await mysql.query(`SELECT * FROM ${process.env.DATABASE_THREADS} WHERE guild_id = ?`, [guild_id])
    if(threadCheck == '') {
        await mysql.query(`INSERT INTO ${process.env.DATABASE_THREADS} (guild_id) VALUES (?)`, [guild_id])
    }
}