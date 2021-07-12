import "dotenv/config"
import { setupHelp } from "./Commands/help"
import { bot } from "./Helpers/bot"

// Load all the commands
setupHelp(bot)

// Initialize the bot
bot.telegram.getMe().then(me => {
    console.log(`${me.first_name} Bot started: ${me.username}`)
})
bot.launch({
    allowedUpdates: ["message", "edited_message", "chat_member", "edited_message", "poll", "poll_answer"],
}).then(() => {
    console.log("Bot is running")
})