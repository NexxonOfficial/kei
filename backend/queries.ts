import serverlessMysql from 'serverless-mysql'

const mysql = serverlessMysql({
    host     : process.env.ENDPOINT,
    database : process.env.DATABASE,
    user     : process.env.USERNAME,
    password : process.env.PASSWORD
} as serverlessMysql.Config)

export const EnableIfDisabled = (guildId: Number) => {
    mysql.query(`SELECT * FROM ${process.env.DATABASE_THREADS} WHERE guild_id = $1`, [guildId]).then((response: object) => {
        console.log(response);
    })
}