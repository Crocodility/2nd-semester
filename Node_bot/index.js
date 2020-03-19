const Telegraf = require('telegraf');
const bot = new Telegraf('878076153:AAGm7hejPvbP7x2dErHsUwFp3JvTGjD9sKg')
var process = require('child_process');


bot.command('dir',(ctx)=>{
    process.exec('dir',function (err,stdout,stderr) {
        if (err) {
            console.log("\n"+stderr);
        } else {
            console.log(stdout);
            return ctx.reply(stdout);
        }
    })


})
bot.launch();
