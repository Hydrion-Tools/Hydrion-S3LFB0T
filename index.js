const Discord = require("discord.js-selfbot-v13");
const fs = require("fs");
const settings = JSON.parse(fs.readFileSync("./settings.json", "utf8"));

const client = new Discord.Client({
    checkUpdate: false
});

client.once("ready", () => {
    console.log(`Logged into ${client.user.username}`);
});


let afkReason = '';
let afkStatus = false;
let afkStartTime = null;
let spamInterval = null;
let raidActive = false;
let raidInterval = null;
let prefix = settings.prefix;
let raidsEnabled = false;
const enableRaidsMessage = `💥 Enable raids by using ${prefix}enableraids`;
const disableRaidsMessage = `💥 Disable raids by using ${prefix}disableraids`;

client.on("messageCreate", async (message) => {
    if (message.author.id !== client.user.id) {
        if (afkStatus && message.mentions.has(client.user)) {
            message.reply(`💤 I'm currently AFK. Reason: ${afkReason}`);
        }
        return;
    }

    const content = message.content.toLowerCase();
    if (!content.startsWith(prefix)) return;

    const args = content.slice(prefix.length).trim().split(/ +/);
    const commandold = args.shift();
    const command = commandold.toLowerCase();

    await handleCommands(command, args, message);
});

async function handleCommands(command, args, message) {
    if (command === "raids") {
        const page = args[0]; 
        await sendRaidsMessage(page, message);
    }
    else if (command === "help") {
        await sendHelpMessage(message);
    }
    else if (command === "discordtools") {
        const page = args[0];
        await sendDiscordToolsMessage(page, message);
    }
    else if (command === "enableraids") {
        await enableRaids(message);
    }
    else if (command === "disableraids") {
        await disableRaids(message);
    }
    else if (command === "tools") {
        const page = args[0];
        await sendToolsMessage(page, message);
    }
    else if (command === "info") {
        const page = args[0];
        await sendInfoMessage(page, message);
    }
    else if (command === "fun") {
        const page = args[0];
        await sendFunMessage(page, message);
    }
    else if (command === "profile") {
        const page = args[0];
        await sendProfileMessage(page, message);
    }
    else if (command === "setprefix") {
        const newPrefix = args[0];
        await setNewPrefix(newPrefix, message);
    }
    else if (command === "viewprefix") {
        await viewPrefix(message);
    }
    else if (command === "spam") {
        const count = parseInt(args[0]);
        const messageToSpam = args.slice(2).join(' ');
        const interval = parseInt(args[1]);

        await spam(count, messageToSpam, interval);
    }
}

const moreCmdSoonMessage = "✨ **More Commands Coming Soon!** ✨";

async function sendRaidsMessage(page, message) {
    await message.delete();
    let raidsMessage;
    if (raidsEnabled === true) {
        if (page === "1") {
            raidsMessage = `
🚨 **Raids Commands - Page 1** 🚨
>------------------------------------<
        
⚔️ **Command List:**
    
🌪️ ${prefix}spam <amount> <interval in ms> <msg>           -  Spam a message in a specified channel
💥 ${prefix}nuke                                           -  Execute a nuke command (use responsibly)
🚀 ${prefix}raidstart <msg>                                -  Start a raid operation in the server
🛡️ ${prefix}raidstop                                       -  Stop the ongoing raid operation
🔧 ${prefix}clear <number>                                 -  Clear the specified number of messages from the channel
        
>------------------------------------<
🌟 For more raid commands, use: \`${prefix}raids 2\`
>------------------------------------<
✨ Selfbot crafted by \`@hydradevx\`
>------------------------------------<
            `; 
        } else if (page === "2") {
            raidsMessage = `
🚨 **Raids Commands - Page 2** 🚨
>------------------------------------<
                
⚔️ **Command List:**
                
🔨 ${prefix}deleteChannels                           -  Delete all channels in the server (requires confirmation)
🎭 ${prefix}deleteRoles                              -  Delete all roles in the server (requires confirmation)
🚫 ${prefix}banAllMembers                            -  Ban all members in the server (requires confirmation)
🧹 ${prefix}clearAllMessages                         -  Delete all messages across all channels (requires confirmation)
📁 ${prefix}deleteCategories                         -  Delete all categories in the server (requires confirmation)
🔥 ${prefix}destroy                                  -  Perform a full server wipe, deleting channels, roles, members, and categories (requires confirmation)
                
>------------------------------------<
🌟 Use these commands responsibly. Always double-check before proceeding!
>------------------------------------<
✨ Selfbot crafted by \`@hydradevx\`
>------------------------------------<
            `; 
        } else {
            return message.channel.send(moreCmdSoonMessage);
        }
    
        await message.channel.send(raidsMessage);
    }
    else if (raidsEnabled === false) {
        await message.channel.send(enableRaidsMessage);
        message.delete();
    }
    
}

async function sendHelpMessage(message) {
    await message.delete();

    let helpMessage = `
✨ ${prefix}[section] [page] ? Default is 1 ✨
>------------------------------------<
    
🔨 ${prefix}raids          -  Display all raid and nuke commands
📊 ${prefix}info           -  Get server and user information commands
🎲 ${prefix}fun            -  Access various fun and games commands
🛠️ ${prefix}tools          -  Explore utility and productivity commands
📡 ${prefix}discordtools   -  Discover all Discord-related tools commands
👤 ${prefix}profile        -  Customize and manage your profile settings
    
>------------------------------------<
🌟 Selfbot crafted by \`@hydradevx\`
>------------------------------------<
`;
    await message.channel.send(helpMessage);
}

async function sendDiscordToolsMessage(page, message) {
    await message.delete();
    let discordToolsMessage;

    if (page === "1") {
        discordToolsMessage = `
🛠️ **Discord Tools - Page 1** 🛠️
>------------------------------------<
    
🔍 **Command List:**
    
📌 ${prefix}pin [messageID]            -  Pins a specific message by its ID
🧹 ${prefix}purge @user [number]       -  Clears a specified number of messages from a specific user
🔒 ${prefix}lock                        -  Locks the current channel for all users
🔓 ${prefix}unlock                      -  Unlocks the current channel for all users
📄 ${prefix}archive [number]           -  Archives the last specified number of messages in a file
    
>------------------------------------<
🌟 For more tools, use: \`${prefix}discordtools 2\`
>------------------------------------<
✨ Selfbot crafted by \`@hydradevx\`
>------------------------------------<
        `
    }
    else if (page === "2") {
        discordToolsMessage = `
🛠️ **Discord Tools - Page 2** 🛠️
>------------------------------------<
            
🔍 **Command List:**

📢 ${prefix}announce [message]         -  Sends an announcement to a specific channel
⚠️ ${prefix}warn @user <reason>       - Issues a warning to the specified user with an optional reason.
💬 ${prefix}quote <message>           - Sends the specified message as a quote.
🐌 ${prefix}slowmode <time>           - Sets slowmode for the current channel.
🌐 ${prefix}translate <lang> <text>   - Translates the provided text to the specified language.

>------------------------------------<
🌟 For more tools, use: \`${prefix}discordtools 3\`
>------------------------------------<
✨ Selfbot crafted by \`@hydradevx\`
>------------------------------------<
        `
    }
    else if (page === "3") {
        discordToolsMessage = `
🛠️ **Discord Tools - Page 3** 🛠️
>------------------------------------<
            
🔍 **Command List:**
            
📊 ${prefix}poll <question>           - Creates a poll with thumbs-up and thumbs-down reactions.
⏰ ${prefix}remind <time> <message>   - Sets a reminder for the specified time (in minutes).
📬 ${prefix}dm @user <message>        - Sends a direct message to the specified user.
👥 ${prefix}roles @user               - Lists all roles of the specified user.

            
>------------------------------------<
🌟 Use these commands responsibly. Always double-check before proceeding!
>------------------------------------<
✨ Selfbot crafted by \`@hydradevx\`
>------------------------------------<
        `
    } else {
        return message.channel.send(moreCmdSoonMessage);
    }
    await message.channel.send(discordToolsMessage);
}

async function enableRaids(message) {
    try {
        raidsEnabled = true;
        await message.delete();
        const enabledraidsmessage1 = '💥Raids are now enabled. Use Wisely...';
        await message.channel.send(enabledraidsmessage1);
        await message.channel.send(disableRaidsMessage);
    } catch {
        console.log('error')
    }
}

async function disableRaids(message) {
    try {
        raidsEnabled = false;
        const disabledraidsmessage1 = '💥Raids are now disabled. A Wise decision indeed...';
        await message.channel.send(disabledraidsmessage1);
        await message.channel.send(enableRaidsMessage);
        await message.delete();
    } catch {
        console.log('error')
    }
}

async function sendToolsMessage(page, message) {
    await message.delete();
    let toolsMessage;

    if (page === "1"){
        toolsMessage = `
🚨 **Utility Commands - Page 1** 🚨  
>------------------------------------<  

⚔️ **Command List:**  

👤 ${prefix}kick @user           - Kicks the specified user from the server.  
🚫 ${prefix}ban @user            - Bans the specified user from the server.  
🔓 ${prefix}unban userID         - Unbans a user by their ID.  
🔇 ${prefix}mute @user duration   - Mutes the specified user for the given duration.  
📝 ${prefix}cloneserver <server id> - Clones a server into another  

>------------------------------------<  
🌟 For more utility commands, use: \`${prefix}tools 2\`  
>------------------------------------<  
✨ Selfbot crafted by \`@hydradevx\`  
>------------------------------------<  
        `;
    }
    else {
        return await message.channel.send(moreCmdSoonMessage);
    }
    await message.channel.send(toolsMessage);
}

async function sendInfoMessage(page, message) {
    await message.delete();
    let infoMessage;

    if (page === "1") {
        infoMessage = `
🌟 **Info Commands - Page 1** 🌟  
>------------------------------------<  
            
📊 **Command List:**  

📈 ${prefix}stats              - Displays the total and online members in the server.  
🏓 ${prefix}ping               - Checks the bot's current latency.  
🔍 ${prefix}userinfo @user     - Displays information about the specified user.
⚙️ ${prefix}setprefix [Prefix] - Sets a new prefix for the bot.  
📜 ${prefix}viewprefix         - Displays the current prefix of the bot.

>------------------------------------<  
✨ Selfbot crafted by \`@hydradevx\`  
>------------------------------------< 
        `;
    }
    else {
        return await message.channel.send(moreCmdSoonMessage);
    }
    await message.channel.send(infoMessage)
}

async function sendFunMessage(page, message) {
    await message.delete();
    let funMessage;

    if (page === "1"){
        funMessage = `
🎉 **Fun Commands - Page 1** 🎉  
>------------------------------------<  
            
🕹️ **Command List:**  
            
💖 ${prefix}rizz                    -  Receive a random pickup line to impress someone  
😂 ${prefix}joke                    -  Get a random joke for a quick laugh  
🎱 ${prefix}8ball <question>        -  Ask the Magic 8-Ball for a prediction  
🪙 ${prefix}coinflip                -  Flip a coin for heads or tails  
🤣 ${prefix}meme                    -  Fetch a random meme for some fun  
            
>------------------------------------<  
            
🌟 For more fun commands, use: \`${prefix}fun 2\`  
            
>------------------------------------<  
✨ Selfbot crafted by \`@hydradevx\`  
>------------------------------------< 
        `
    }
    else if (page === "2") {
        funMessage = `
🎉 **Fun Commands - Page 2** 🎉  
>------------------------------------<  
            
🕹️ **Command List:**  
            
🌈 ${prefix}gay <@user>           -  Check how "gay" a user is, with a fun percentage!  
💻 ${prefix}skid <@user>          -  Analyze a user's "skid level" with a random percentage!  
            
>------------------------------------<  
🌟 Use these commands responsibly. Always double-check before proceeding!         
>------------------------------------<  
✨ Selfbot crafted by \`@hydradevx\`  
>------------------------------------<  
        `
    } 
    else {
        return await message.channel.send(moreCmdSoonMessage)
    }
    await message.channel.send(funMessage);
}

async function sendProfileMessage(page, message) {
    await message.delete();
    let profileMessage;

    if (page === "1") {
        profileMessage = `
👤 **Profile Commands - Page 1** 👤  
>------------------------------------<  
            
🔍 **Command List:**  
            
💤 ${prefix}afk                   -  Set your status to AFK with an optional reason  
🚶‍♂️ ${prefix}unafk                -  Remove your AFK status and notify others  
🎮 ${prefix}play [game]            -  Set your status to playing a game  
🎥 ${prefix}stream [title]         -  Set your status to streaming with a title  
📺 ${prefix}watch [title]          -  Set your status to watching a show or movie  
🎶 ${prefix}listen [song]          -  Set your status to listening to a song  
⏹️ ${prefix}stopactivity           -  Stop any ongoing activity status  
            
>------------------------------------<  
            
🌟 For more profile commands, use: \`${prefix}profile 2\`  
            
>------------------------------------<  
✨ Selfbot crafted by \`@hydradevx\`  
>------------------------------------<  
        `
    }
    else if (page === "2") {
        profileMessage = `
👤 **Profile Commands - Page 2** 👤  
>------------------------------------<  

🔍 **Command List:**  

🔴 ${prefix}dnd [reason]         -  Set your status to Do Not Disturb with an optional reason  
🌙 ${prefix}idle [description]   -  Set your status to Idle with an optional description  
🖼️ ${prefix}pfp @user            - Gives the profile picture of the mentioned user  

>------------------------------------<  

🌟 For more profile commands, use: \`${prefix}profile 3\`  

>------------------------------------<  
✨ Selfbot crafted by \`@hydradevx\`  
>------------------------------------<  
        `
    }
    else {
        return await message.channel.send(moreCmdSoonMessage)
    }
    await message.channel.send(profileMessage)
}

async function setNewPrefix(newPrefix, message) {
    await message.delete();
    prefix = newPrefix;
    await message.channel.send(`⚙️ Prefix is now set to ${newPrefix}`);
}

async function viewPrefix(message) {
    await message.delete();
    await message.channel.send(`⚙️ Current Prefix is ${prefix}`);
}

async function spam(count, interval, messageToSpam, message) {
    if (raidsEnabled = true){
        if (isNaN(count) || count <= 0 || !messageToSpam || isNaN(interval) || interval <= 0) {
            await message.reply("🔔 Usage: -spam [number] [interval in ms] [message]");
            return;
        }
    
        if (spamInterval) {
            await message.reply("⚠️ A spam action is already running. Please wait for it to finish.");
            return;
        }
    
        let spamCount = 0;
        spamInterval = setInterval(() => {
            if (spamCount < count) {
                message.channel.send(messageToSpam);
                spamCount++;
            } else {
                clearInterval(spamInterval);
                spamInterval = null;
            }
        }, interval);
    }
    else {
        await message.channel.send(enableRaidsMessage)
    }

}

client.login(settings.token);
