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

export const ThreadsEnable = async (guildId: Number) => {
    return new Promise<string>(async (res, rej) => {
        try {
            await mysql.query(`UPDATE ${process.env.DATABASE_THREADS} SET enabled=1 WHERE guild_id = ?`, [guildId])
            res("Resolved.")
        } catch(exception) {
            console.error(exception)
            rej("We was unable to enable threads for your guild at this time. Please try again later!")
        }
    })
}

export const ThreadsDisable = async (guildId: Number) => {
    return new Promise<string>(async (res, rej) => {
        try {
            await mysql.query(`UPDATE ${process.env.DATABASE_THREADS} SET enabled=0 WHERE guild_id = ?`, [guildId])
            res("Resolved.")
        } catch(exception) {
            console.error(exception)
            rej("We was unable to disable threads for your guild at this time. Please try again later!")
        }
    })
}

export const ValidateThreadExistence = async (guild_id: Number) => {
    let threadCheck: object[] = await mysql.query(`SELECT * FROM ${process.env.DATABASE_THREADS} WHERE guild_id = ?`, [guild_id])    
    if(threadCheck.length == 0) {
        await mysql.query(`INSERT INTO ${process.env.DATABASE_THREADS} (guild_id) VALUES (?)`, [guild_id])
    }
}