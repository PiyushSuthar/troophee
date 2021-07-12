import { Context, Telegraf } from "telegraf";

let HELP_TEXT = `
Hello, I'm a Toophee 🏆 bot!

I award trophies to the worthy (and not-so-worthy) People.

Here are some commands I understand:
/createTrophy - create a new trophy
/awardTrophy - award a trophy to a user
/listTrophy - list all trophies
/trophies - list all trophies in a group
/help - this help message

If you need help, just type /help.
You can contact @Piyushsuthar for any queries or suggestions.
`

export const setupHelp = (bot: Telegraf) => {
    bot.command(["help", "start"], sendHelp);
}

export const sendHelp = (ctx: Context) => {
    return ctx.replyWithHTML(HELP_TEXT, {
        reply_to_message_id: ctx.message.message_id,
    })
}