const mysql = require('serverless-mysql')({
    host     : process.env.ENDPOINT,
    database : process.env.DATABASE,
    user     : process.env.USERNAME,
    password : process.env.PASSWORD
})

export const EnableIfDisabled = (guildId: Number) => {
    mysql.query(`SELECT * FROM threads WHERE guild_id = $1`, [guildId]).then((response) => {
        console.log(response);
    })
}