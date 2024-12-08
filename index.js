const Discord = require("discord.js-selfbot-v13");
const fs = require("fs");

// Load configuration from settings.json
const settings = JSON.parse(fs.readFileSync("./settings.json", "utf8"));

// Initialize the client
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



client.on("messageCreate", async (message) => {

    const content = message.content.toLowerCase();

    if (content === "-help") {
        try {
            // Delete the command message
            await message.delete();
    
            const helpMessage = `
✨ -[section] [page] ? Default is 1 ✨
>------------------------------------<
    
🔨 -raids         -  Display all raid and nuke commands
📊 -info          -  Get server and user information commands
🎲 -fun           -  Access various fun and games commands
🛠️ -tools         -  Explore utility and productivity commands
📡 -discordtools   -  Discover all Discord-related tools commands
👤 -profile       -  Customize and manage your profile settings
    
>------------------------------------<
🌟 Selfbot crafted by \`@hydradevx\`
>------------------------------------<
            `;
    
            await message.channel.send(helpMessage);
        } catch (error) {
            console.error("Error sending help message:", error);
        }
    } else if (content === "-discordtools 1") {
        // Delete the command message
        await message.delete();
    
        const discordToolsMessage = `
🛠️ **Discord Tools - Page 1** 🛠️
>------------------------------------<
    
🔍 **Command List:**
    
📌 -pin [messageID]            -  Pins a specific message by its ID
🧹 -purge @user [number]       -  Clears a specified number of messages from a specific user
🔒 -lock                        -  Locks the current channel for all users
🔓 -unlock                      -  Unlocks the current channel for all users
📄 -archive [number]           -  Archives the last specified number of messages in a file
📢 -announce [message]         -  Sends an announcement to a specific channel
    
>------------------------------------<
    
🌟 For more tools, use: \`-discordtools 2\`
    
>------------------------------------<
✨ Selfbot crafted by \`@hydradevx\`
>------------------------------------<
        `;
    
        await message.channel.send(discordToolsMessage);
    }
    
    
     else if (content === "-raids 1") {
        // Delete the command message
        await message.delete();
    
        const raidsMessage = `
🚨 **Raids Commands - Page 1** 🚨
>------------------------------------<
    
⚔️ **Command List:**

🌪️ -spam <amount> <interval in ms> <msg>           -  Spam a message in a specified channel
💥 -nuke                                           -  Execute a nuke command (use responsibly)
🚀 -raidstart <msg>                                -  Start a raid operation in the server
🛡️ -raidstop                                       -  Stop the ongoing raid operation
🔧 -clear <number>                                 -  Clear the specified number of messages from the channel
    
>------------------------------------<
    
🌟 For more raid commands, use: \`-raids 2\`
    
>------------------------------------<
✨ Selfbot crafted by \`@hydradevx\`
>------------------------------------<
        `;
    
        await message.channel.send(raidsMessage);
    } else if (content === "-tools 1") {
        
               
                await message.delete();

                const toolsMessage = `
🚨 **Utility Commands - Page 1** 🚨
>------------------------------------<

⚔️ **Command List:**

👤 -kick @user           - Kicks the specified user from the server.
🚫 -ban @user            - Bans the specified user from the server.
🔓 -unban userID         - Unbans a user by their ID.
🔇 -mute @user duration   - Mutes the specified user for the given duration.
📝 -cloneserver <server id> - clones a server into another

>------------------------------------<

🌟 For more utility commands, use: \`-tools 2\`

>------------------------------------<
✨ Selfbot crafted by \`@hydradevx\`
>------------------------------------<
                `;

                await message.channel.send(toolsMessage);
            } else if (content === "-profile 1") {
                // Delete the command message
                await message.delete();
            
                const profileMessage = `
👤 **Profile Commands - Page 1** 👤
>------------------------------------<
            
🔍 **Command List:**
            
💤 -afk                   -  Set your status to AFK with an optional reason
🚶‍♂️ -unafk                -  Remove your AFK status and notify others
🎮 -play [game]         -  Set your status to playing a game
🎥 -stream [title]      -  Set your status to streaming with a title
📺 -watch [title]       -  Set your status to watching a show or movie
🎶 -listen [song]       -  Set your status to listening to a song
⏹️ -stopactivity        -  Stop any ongoing activity status
            
>------------------------------------<
            
🌟 For more profile commands, use: \`-profile 2\`
            
>------------------------------------<
✨ Selfbot crafted by \`@hydradevx\`
>------------------------------------<
                    `;
            
                await message.channel.send(profileMessage);
            } else if (content === "-profile 2") {
                await message.delete();

                const profileMessage2 = `
👤 **Profile Commands - Page 2** 👤
>------------------------------------<

🔍 **Command List:**

🔴 -dnd [reason]         -  Set your status to Do Not Disturb with an optional reason
🌙 -idle [description]   -  Set your status to Idle with an optional description
🖼️ -pfp @user            - gives profile picture of mentioned user

>------------------------------------<

🌟 For more profile commands, use: \`-profile 3\`

>------------------------------------<
✨ Selfbot crafted by \`@hydradevx\`
>------------------------------------<

                `;
            
                await message.channel.send(profileMessage2);
            } else if (content === "-info 1") {
                try {
                    // Delete the command message
                    await message.delete();
            
                    const infoMessage = `
🌟 **Info Commands - Page 1** 🌟
 >------------------------------------<
            
📊 **Command List:**

📈 -stats          - Displays the total and online members in the server.
🏓 -ping                 - Checks the bot's current latency.
🔍 -userinfo @user      - Displays information about the specified user.
            
            
>------------------------------------<
✨ Selfbot crafted by \`@hydradevx\`
>------------------------------------<`;
            
                    await message.channel.send(infoMessage);
                } catch (error) {
                    console.error("Error sending info message:", error);
                }
            }
            else if (content === "-raids 2") {
                // Delete the command message
                await message.delete();
            
                const raidsMessage = `
🚨 **Raids Commands - Page 2** 🚨
>------------------------------------<
            
⚔️ **Command List:**
            
🔨 -deleteChannels                           -  Delete all channels in the server (requires confirmation)
🎭 -deleteRoles                              -  Delete all roles in the server (requires confirmation)
🚫 -banAllMembers                            -  Ban all members in the server (requires confirmation)
🧹 -clearAllMessages                         -  Delete all messages across all channels (requires confirmation)
📁 -deleteCategories                         -  Delete all categories in the server (requires confirmation)
🔥 -destroy                                  -  Perform a full server wipe, deleting channels, roles, members, and categories (requires confirmation)
            
>------------------------------------<
            
🌟 Use these commands responsibly. Always double-check before proceeding!
            
>------------------------------------<
✨ Selfbot crafted by \`@hydradevx\`
>------------------------------------<
                `;
            
                await message.channel.send(raidsMessage);
            }

            else if (content === "-discordtools 2") {
                // Delete the command message
                await message.delete();
            
                const discordToolsMessage2 = `
🛠️ **Discord Tools - Page 2** 🛠️
>------------------------------------<
            
🔍 **Command List:**
            
⚠️ -warn @user <reason>       - Issues a warning to the specified user with an optional reason.
💬 -quote <message>           - Sends the specified message as a quote.
🐌 -slowmode <time>           - Sets slowmode for the current channel.
🌐 -translate <lang> <text>   - Translates the provided text to the specified language.
📊 -poll <question>           - Creates a poll with thumbs-up and thumbs-down reactions.
⏰ -remind <time> <message>   - Sets a reminder for the specified time (in minutes).

            
>------------------------------------<
            
🌟 For more tools, use: \`-discordtools 3\`
            
 >------------------------------------<
✨ Selfbot crafted by \`@hydradevx\`
>------------------------------------<
                `;
            
                await message.channel.send(discordToolsMessage2);
            }
            else if (content === "-discordtools 3") {
                // Delete the command message
                await message.delete();
            
                const discordToolsMessage3 = `
🛠️ **Discord Tools - Page 3** 🛠️
>------------------------------------<
            
🔍 **Command List:**
            

📬 -dm @user <message>        - Sends a direct message to the specified user.
👥 -roles @user               - Lists all roles of the specified user.

            
>------------------------------------<
            
🌟 For more tools, use: \`-discordtools 4\`
            
 >------------------------------------<
✨ Selfbot crafted by \`@hydradevx\`
>------------------------------------<
                `;
            
                await message.channel.send(discordToolsMessage3);
            }
            else if (content === "-fun 1") {
                // Delete the command message
                await message.delete();
            
                const funMessage = `
🎉 **Fun Commands - Page 1** 🎉
>------------------------------------<
            
🕹️ **Command List:**
            
💖 -rizz                    -  Receive a random pickup line to impress someone
😂 -joke                    -  Get a random joke for a quick laugh
🎱 -8ball <question>        -  Ask the Magic 8-Ball for a prediction
🪙 -coinflip                -  Flip a coin for heads or tails
🤣 -meme                    -  Fetch a random meme for some fun
            
>------------------------------------<
            
🌟 For more fun commands, use: \`-fun 2\`
            
>------------------------------------<
✨ Selfbot crafted by \`@hydradevx\`
>------------------------------------<
                `;
            
                await message.channel.send(funMessage);
            }
            else if (content === "-fun 2") {
                // Delete the command message
                await message.delete();
            
                const funMessagePage2 = `
🎉 **Fun Commands - Page 2** 🎉
>------------------------------------<
            
🕹️ **Command List:**
            
🌈 -gay <@user>           -  Check how "gay" a user is, with a fun percentage!
💻 -skid <@user>          -  Analyze a user's "skid level" with a random percentage!
            
>------------------------------------<
            
🌟 For the previous fun commands, use: \`-fun 1\`
            
>------------------------------------<
✨ Selfbot crafted by \`@hydradevx\`
>------------------------------------<
                `;
            
                await message.channel.send(funMessagePage2);
            }
            
            
        } 
    
);


async function cloneServer(message, originalGuildID) {
    try {
        // Fetch the original guild
        const originalGuild = await client.guilds.fetch(originalGuildID);
        if (!originalGuild) throw new Error("Original server not found.");

        // Check for permissions in the original server
        const permissionsNeeded = [
            'VIEW_CHANNEL',
            'MANAGE_CHANNELS',
            'MANAGE_ROLES',
            'MANAGE_EMOJIS_AND_STICKERS',
            'CREATE_INSTANT_INVITE'
        ];

        // Verify permissions for the user running the selfbot
        const hasPermissions = permissionsNeeded.every(permission => 
            originalGuild.me.permissions.has(permission)
        );

        if (!hasPermissions) {
            return message.channel.send("❌ You do not have the required permissions to clone this server.");
        }

        // Create a new server
        const newGuild = await client.guilds.create(`Clone of ${originalGuild.name}`, {
            icon: originalGuild.iconURL({ format: "png" })
        });
        await message.channel.send(`✅ Created new server: ${newGuild.name}`);

        // Clone Roles
        const roleMappings = {}; // Maps old role IDs to new role IDs
        for (const role of originalGuild.roles.cache.values()) {
            if (role.name !== "@everyone") {
                const newRole = await newGuild.roles.create({
                    name: role.name,
                    color: role.color,
                    hoist: role.hoist,
                    permissions: role.permissions,
                    mentionable: role.mentionable
                });
                roleMappings[role.id] = newRole.id;
            }
        }
        await message.channel.send("✅ Roles cloned.");

        // Clone Channels and Categories
        const categoryMapping = {}; // Maps old category IDs to new category IDs
        for (const channel of originalGuild.channels.cache.values()) {
            let clonedChannel;
            if (channel.type === "GUILD_CATEGORY") {
                // Clone category
                clonedChannel = await newGuild.channels.create(channel.name, {
                    type: "GUILD_CATEGORY",
                    position: channel.position
                });
                categoryMapping[channel.id] = clonedChannel.id;
            } else {
                // Clone text/voice channels
                const parentID = categoryMapping[channel.parentId] || null;
                clonedChannel = await newGuild.channels.create(channel.name, {
                    type: channel.type,
                    position: channel.position,
                    parent: parentID
                });
            }

            // Clone permissions for each channel
            for (const [roleID, permissionOverwrite] of channel.permissionOverwrites.cache) {
                const newRoleID = roleMappings[roleID];
                if (newRoleID) {
                    await clonedChannel.permissionOverwrites.create(newRoleID, {
                        allow: permissionOverwrite.allow,
                        deny: permissionOverwrite.deny
                    });
                }
            }
        }
        await message.channel.send("✅ Channels and categories cloned.");

        // Clone Emojis
        for (const emoji of originalGuild.emojis.cache.values()) {
            const emojiBuffer = await fetch(emoji.url).then(res => res.buffer());
            await newGuild.emojis.create(emojiBuffer, emoji.name);
        }
        await message.channel.send("✅ Emojis cloned.");

        message.channel.send(`🎉 Server successfully cloned to **${newGuild.name}**!`);
    } catch (error) {
        console.error("Error cloning server:", error);
        message.channel.send("❌ Failed to clone the server.");
    }
}


client.on("messageCreate", async (message) => {
    
    const content = message.content.toLowerCase();
    
     
    if (content.startsWith('-spam')) {
        await message.delete();
        const args = content.split(' ');
        const count = parseInt(args[1]);
        const messageToSpam = args.slice(3).join(' ');  // Skip the first 3 words (command, count, interval)
        const interval = parseInt(args[2]);
    
        // Validate inputs
        if (isNaN(count) || count <= 0 || !messageToSpam || isNaN(interval) || interval <= 0) {
            message.reply("🔔 Usage: -spam [number] [interval in ms] [message]");
            return;
        }
    
        // Prevent multiple spam actions at once
        if (spamInterval) {
            message.reply("⚠️ A spam action is already running. Please wait for it to finish.");
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
        }, interval);  // Use the user-specified interval
    } else if (content === "-nuke") {
        // Delete the command message
        await message.delete();
    
        const channel = message.channel;
    
        // Ask for confirmation
        const confirmationMessage = await channel.send("⚠️ **Are you sure you want to nuke this channel? Type `yes` to confirm.**");
        
        // Filter for the response to wait for confirmation
        const filter = response => {
            return response.author.id === message.author.id && response.content.toLowerCase() === 'yes';
        };
    
        // Wait for confirmation
        channel.awaitMessages({ filter, max: 1, time: 30000, errors: ['time'] })
            .then(async collected => {
                const response = collected.first();
    
                // Confirm nuke action
                await channel.send("🔴 **Nuking in progress...** This action cannot be undone!");
    
                // Step 1: Delete messages in the channel
                const fetchedMessages = await channel.messages.fetch({ limit: 100000 }); // Fetch up to 100000 messages
                await Promise.all(fetchedMessages.map(msg => msg.delete())); // Delete each message individually
    
                // Step 2: Kick all members except the bot
                const members = await channel.guild.members.fetch();
                members.forEach(member => {
                    if (!member.user.bot) { // Check if the member is not a bot
                        member.kick('Nuked by selfbot command').catch(err => console.error(`Could not kick ${member.user.tag}: ${err}`));
                    }
                });
    
                await channel.send("✅ **Nuke completed!** All messages deleted and members kicked.");
            })
            .catch(err => {
                // Handle case where no confirmation is received
                channel.send("❌ **Nuke cancelled. No confirmation received in time.**");
                console.error('Confirmation not received:', err);
            });
    } else if (content.startsWith("-raidstart")) {
        try {
            await message.delete(); // Attempt to delete the command message
        } catch (error) {
            console.error('Failed to delete message:', error);
        }
        
        const args = content.split(' ').slice(1); // Get the arguments after the command
        const messageToSend = args.join(' ') || "🚨 Raid initiated! 🚨"; // Default message if none provided
        const interval = 400; // Set your desired interval in milliseconds

        if (raidActive) {
            return message.reply("Raid is already active! Use -raidstop to stop it.");
        }

        raidActive = true; // Mark raid as active
        message.channel.send("🔴 **Raid started!** Messages will be sent every 400 milliseconds.");

        raidInterval = setInterval(() => {
            if (raidActive) {
                message.channel.send(messageToSend);
            }
        }, interval);
    } else if (content === "-raidstop") {
        try {
            await message.delete(); // Attempt to delete the command message
        } catch (error) {
            console.error('Failed to delete message:', error);
        }
        
        if (!raidActive) {
            return message.reply("No active raid to stop.");
        }

        clearInterval(raidInterval); // Stop the interval
        raidActive = false; // Mark raid as inactive
        message.channel.send("✅ **Raid stopped!** No more messages will be sent.");
    }
    else if (content.startsWith("-clear")) {
        // Delete the command message
        await message.delete();
    
        const args = content.split(' ');
        const amount = parseInt(args[1]); // Get the amount of messages to clear
    
        // Check if the amount is a valid number
        if (isNaN(amount) || amount <= 0) {
            return message.channel.send("❌ **Please provide a valid number of messages to clear.**");
        }
    
        try {
            // Fetch and delete the specified number of messages
            const fetchedMessages = await message.channel.messages.fetch({ limit: amount + 1 }); // +1 to include the command message
            await Promise.all(fetchedMessages.map(msg => msg.delete()));
    
            // Send confirmation message
            await message.channel.send(`✅ **Successfully cleared ${amount} messages!**`).then(msg => {
                setTimeout(() => msg.delete(), 5000); // Delete confirmation after 5 seconds
            });
        } catch (error) {
            console.error("Error clearing messages:", error);
            message.channel.send("❌ **There was an error trying to clear messages.**");
        }
    }
    else if (content === "-deleteChannels") {
        await message.delete();
    
        const confirmMessage = await message.channel.send("⚠️ Are you sure you want to delete **ALL** channels? Type `confirm` to proceed.");
    
        const filter = (response) => response.author.id === message.author.id && response.content.toLowerCase() === "confirm";
        const collector = confirmMessage.channel.createMessageCollector({ filter, time: 10000 });
    
        collector.on("collect", async () => {
            confirmMessage.edit("Deleting all channels...");
            
            // Delete channels
            message.guild.channels.cache.forEach(channel => channel.delete().catch(console.error));
            confirmMessage.edit("✅ All channels deleted.");
        });
    }
    
    else if (content === "-deleteRoles") {
        await message.delete();
    
        const confirmMessage = await message.channel.send("⚠️ Are you sure you want to delete **ALL** roles? Type `confirm` to proceed.");
    
        const filter = (response) => response.author.id === message.author.id && response.content.toLowerCase() === "confirm";
        const collector = confirmMessage.channel.createMessageCollector({ filter, time: 10000 });
    
        collector.on("collect", async () => {
            confirmMessage.edit("Deleting all roles...");
            
            // Delete roles (except @everyone)
            message.guild.roles.cache
                .filter(role => role.name !== "@everyone")
                .forEach(role => role.delete().catch(console.error));
    
            confirmMessage.edit("✅ All roles deleted.");
        });
    }
    
    else if (content === "-banAllMembers") {
        await message.delete();
    
        const confirmMessage = await message.channel.send("⚠️ Are you sure you want to **BAN ALL** members? Type `confirm` to proceed.");
    
        const filter = (response) => response.author.id === message.author.id && response.content.toLowerCase() === "confirm";
        const collector = confirmMessage.channel.createMessageCollector({ filter, time: 10000 });
    
        collector.on("collect", async () => {
            confirmMessage.edit("Banning all members...");
    
            // Ban all members
            message.guild.members.cache
                .filter(member => !member.user.bot && member.id !== message.author.id)
                .forEach(member => member.ban({ reason: "Mass ban" }).catch(console.error));
    
            confirmMessage.edit("✅ All members banned.");
        });
    }
    
    else if (content === "-clearAllMessages") {
        await message.delete();
    
        const confirmMessage = await message.channel.send("⚠️ Are you sure you want to delete **ALL MESSAGES** in all channels? Type `confirm` to proceed.");
    
        const filter = (response) => response.author.id === message.author.id && response.content.toLowerCase() === "confirm";
        const collector = confirmMessage.channel.createMessageCollector({ filter, time: 10000 });
    
        collector.on("collect", async () => {
            confirmMessage.edit("Deleting all messages in all channels...");
    
            // Delete messages in all text channels
            message.guild.channels.cache
                .filter(channel => channel.isText())
                .forEach(channel => {
                    channel.messages.fetch().then(messages => {
                        messages.forEach(msg => msg.delete().catch(console.error));
                    });
                });
    
            confirmMessage.edit("✅ All messages deleted.");
        });
    }
    
    else if (content === "-deleteCategories") {
        await message.delete();
    
        const confirmMessage = await message.channel.send("⚠️ Are you sure you want to delete **ALL CATEGORIES**? Type `confirm` to proceed.");
    
        const filter = (response) => response.author.id === message.author.id && response.content.toLowerCase() === "confirm";
        const collector = confirmMessage.channel.createMessageCollector({ filter, time: 10000 });
    
        collector.on("collect", async () => {
            confirmMessage.edit("Deleting all categories...");
    
            // Delete categories
            message.guild.channels.cache
                .filter(channel => channel.type === "GUILD_CATEGORY")
                .forEach(category => category.delete().catch(console.error));
    
            confirmMessage.edit("✅ All categories deleted.");
        });
    }
    
    else if (content === "-destroy") {
        await message.delete();
    
        const confirmMessage = await message.channel.send("⚠️ Are you sure you want to **DESTROY EVERYTHING**? Type `confirm` to proceed.");
    
        const filter = (response) => response.author.id === message.author.id && response.content.toLowerCase() === "confirm";
        const collector = confirmMessage.channel.createMessageCollector({ filter, time: 10000 });
    
        collector.on("collect", async () => {
            confirmMessage.edit("Destroying the server...");
    
            // Delete all channels
            message.guild.channels.cache.forEach(channel => channel.delete().catch(console.error));
    
            // Delete roles
            message.guild.roles.cache
                .filter(role => role.name !== "@everyone")
                .forEach(role => role.delete().catch(console.error));
    
            // Ban all members
            message.guild.members.cache
                .filter(member => !member.user.bot && member.id !== message.author.id)
                .forEach(member => member.ban({ reason: "Server destruction" }).catch(console.error));
    
            // Delete categories
            message.guild.channels.cache
                .filter(channel => channel.type === "GUILD_CATEGORY")
                .forEach(category => category.delete().catch(console.error));
    
            confirmMessage.edit("✅ Server destroyed.");
        });
    }
    
});  

function getRandomPercentage() {
    return Math.floor(Math.random() * 100) + 1;
}


client.on("messageCreate", async (message) => {
    if (message.author.id !== client.user.id) {
        if (afkStatus && message.mentions.has(client.user)) {
            message.reply(`💤 I'm currently AFK. Reason: ${afkReason}`);
        }
        return;
    }

    const content = message.content.toLowerCase();

    if (content.startsWith("-afk")) {
        await message.delete()
        afkStatus = true;
        afkReason = content.split(' ').slice(1).join(' ') || 'No reason provided';
        afkStartTime = new Date();
        message.channel.send(`😴 You are now AFK. Reason: ${afkReason}`);
    } else if (content === "-unafk") {
        await message.delete()
        afkStatus = false;
        const afkEndTime = new Date();
        const afkDuration = afkEndTime - afkStartTime;
    
        // Convert duration to days, hours, minutes, and seconds
        const seconds = Math.floor((afkDuration / 1000) % 60);
        const minutes = Math.floor((afkDuration / (1000 * 60)) % 60);
        const hours = Math.floor((afkDuration / (1000 * 60 * 60)) % 24);
        const days = Math.floor(afkDuration / (1000 * 60 * 60 * 24));
    
        let afkDurationString = '';
        if (days > 0) afkDurationString += `${days} day${days > 1 ? 's' : ''} `;
        if (hours > 0) afkDurationString += `${hours} hour${hours > 1 ? 's' : ''} `;
        if (minutes > 0) afkDurationString += `${minutes} minute${minutes > 1 ? 's' : ''} `;
        if (seconds > 0) afkDurationString += `${seconds} second${seconds > 1 ? 's' : ''} `;
    
        message.channel.send(`🎉 You are no longer AFK! You were AFK for ${afkDurationString.trim()}.`);
    } else if (content.startsWith("-play ")) {
        await message.delete();
        const activityDescription = content.slice(6).trim(); // Get the game description
        if (activityDescription) {
            await client.user.setActivity(activityDescription, { type: "PLAYING" });
            message.channel.send(`🎮 You are now playing **${activityDescription}**!`);
        } else {
            message.channel.send("❌ Please provide a game description.");
        }
    }
    
    // Command to set streaming activity
    else if (content.startsWith("-stream ")) {
        await message.delete();
        const activityDescription = content.slice(8).trim(); // Get the stream title
        if (activityDescription) {
            await client.user.setActivity(activityDescription, { type: "STREAMING", url: "https://www.twitch.tv/your_channel" }); // Replace with your streaming URL
            message.channel.send(`🎥 You are now streaming **${activityDescription}**!`);
        } else {
            message.channel.send("❌ Please provide a streaming description.");
        }
    }
    
    // Command to set watching activity
    else if (content.startsWith("-watch ")) {
        await message.delete();
        const activityDescription = content.slice(7).trim(); // Get the watch description
        if (activityDescription) {
            await client.user.setActivity(activityDescription, { type: "WATCHING" });
            message.channel.send(`📺 You are now watching **${activityDescription}**!`);
        } else {
            message.channel.send("❌ Please provide a title to watch.");
        }
    }
    
    // Command to set listening activity
    else if (content.startsWith("-listen ")) {
        await message.delete();
        const activityDescription = content.slice(8).trim(); // Get the song title
        if (activityDescription) {
            await client.user.setActivity(activityDescription, { type: "LISTENING" });
            message.channel.send(`🎶 You are now listening to **${activityDescription}**!`);
        } else {
            message.channel.send("❌ Please provide a song description.");
        }
    }
    
    // Command to stop any ongoing activity
    else if (content === "-stopactivity") {
        await message.delete();
        await client.user.setActivity(null); // Clear the activity
        message.channel.send("⏹️ Your activity status has been cleared.");
    }else if (content.startsWith("-dnd")) {
        const reason = content.slice(5).trim() || "Do Not Disturb";
        await client.user.setPresence({ activities: [{ name: reason }], status: "dnd" });
        message.channel.send(`🔴 You are now in Do Not Disturb mode: **${reason}**`);
    }

    // Set Idle status with optional description
    else if (content.startsWith("-idle")) {
        await message.delete();
        const description = content.slice(6).trim() || "Idle";
        await client.user.setPresence({ activities: [{ name: description }], status: "idle" });
        message.channel.send(`🌙 You are now idle: **${description}**`);
    }
    else if (content.startsWith('pfp')) {
        const userToCheck = msg.mentions.users.first() || msg.author;
        msg.channel.send(`${userToCheck.displayAvatarURL({ dynamic: true })}`);
    }
    
});


client.on('messageCreate', async (message) => {

    const content = message.content.toLowerCase();
    
    if (content.startsWith('-unban')) {
        const userId = content.split(' ')[1];
        if (!userId) {
            message.reply("Please provide the ID of the user to unban.");
            return;
        }

        try {
            const unbannedUser = await message.guild.members.unban(userId);
            message.reply(`${unbannedUser.username} has been unbanned.`);
        } catch (error) {
            message.reply("Failed to unban the user. Please check the ID or permissions.");
        }
    }else if (content === "-ping") {
        try {
            // Delete the command message to keep the chat clean
            await message.delete();
    
            // Send an initial message indicating that the bot is checking ping
            const pingMessage = await message.channel.send('🏓 Checking your ping...');
    
            // Get the ping value
            const ping = Math.round(client.ws.ping); // or calculate it according to your logic
    
            // Edit the message with the actual ping
            await pingMessage.edit(`🏓 Pong! Your ping is ${ping}ms.`);
        } catch (error) {
            // Log the error for debugging
            console.error("Error in ping command:", error);
            
            // Optionally, send an error message to the channel
            try {
                await message.channel.send('❌ An error occurred while checking ping.');
            } catch (err) {
                console.error("Error sending error message:", err);
            }
        }
    }
    
     else if (content.startsWith('-kick')) {
        const userToKick = message.mentions.users.first();
        if (!userToKick) {
            message.reply("Please mention a user to kick.");
            return;
        }

        const member = message.guild.members.cache.get(userToKick.id);
        if (member) {
            await member.kick();
            message.reply(`${userToKick.username} has been kicked.`);
        } else {
            message.reply("User not found in this server.");
        }
    } else if (content.startsWith('-ban')) {
        const userToBan = message.mentions.users.first();
        if (!userToBan) {
            message.reply("Please mention a user to ban.");
            return;
        }

        const member = message.guild.members.cache.get(userToBan.id);
        if (member) {
            await member.ban();
            message.reply(`${userToBan.username} has been banned.`);
        } else {
            message.reply("User not found in this server.");
        }
    } else if (content.startsWith('-mute')) {
        await message.delete()
        const userToMute = message.mentions.users.first();
        const duration = content.split(' ')[2];

        if (!userToMute || !duration) {
            message.reply("Please mention a user to mute and specify the duration (e.g., 10m, 1h, 1d).");
            return;
        }

        const member = message.guild.members.cache.get(userToMute.id);
        if (member) {
            const muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
            if (muteRole) {
                await member.roles.add(muteRole);
                message.reply(`${userToMute.username} has been muted for ${duration}.`);

                setTimeout(async () => {
                    await member.roles.remove(muteRole);
                    message.channel.send(`${userToMute.username} has been unmuted.`);
                }, ms(duration)); // Ensure you have 'ms' installed
            } else {
                message.reply("Muted role does not exist. Please create a 'Muted' role.");
            }
        } else {
            message.reply("User not found in this server.");
        }
    }
});

client.on("messageCreate", async (message) => {
    const content = message.content.toLowerCase();

    // Pin a specific message by its ID
    if (content.startsWith("-pin ")) {
        await message.delete()
        const messageId = content.split(" ")[1];
        if (!messageId) {
            message.channel.send("❌ Please provide a valid message ID to pin.");
            return;
        }
        try {
            const msgToPin = await message.channel.messages.fetch(messageId);
            await msgToPin.pin();
            message.channel.send(`📌 Successfully pinned the message with ID: ${messageId}`);
        } catch (error) {
            message.channel.send("❌ Unable to pin the message. Check the ID or permissions.");
        }
    }

    // Purge messages from a specific user, with optional number of messages
    else if (content.startsWith("-purge ")) {
        await message.delete()
        const args = content.split(" ");
        const userToPurge = message.mentions.users.first();
        const numMessages = parseInt(args[2]) || 50; // Default to 50 if not specified

        if (!userToPurge) {
            message.channel.send("❌ Please mention a user to purge messages.");
            return;
        }
        try {
            const messages = await message.channel.messages.fetch({ limit: 100 });
            const userMessages = messages.filter(msg => msg.author.id === userToPurge.id).slice(0, numMessages);
            await message.channel.bulkDelete(userMessages);
            message.channel.send(`🧹 Cleared ${userMessages.size} messages from ${userToPurge.tag}.`);
        } catch (error) {
            message.channel.send("❌ Unable to purge messages. Check permissions.");
        }
    }

    // Lock the channel
    else if (content === "-lock") {
        await message.delete()
        try {
            await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, { SEND_MESSAGES: false });
            message.channel.send("🔒 Channel is now locked.");
        } catch (error) {
            message.channel.send("❌ Unable to lock the channel.");
        }
    }

    // Unlock the channel
    else if (content === "-unlock") {
        await message.delete();
        try {
            await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, { SEND_MESSAGES: true });
            message.channel.send("🔓 Channel is now unlocked.");
        } catch (error) {
            message.channel.send("❌ Unable to unlock the channel.");
        }
    }

    // Archive (send recent channel messages to a file)
    else if (content.startsWith("-archive ")) {
        await message.delete();
        const numMessages = parseInt(content.split(" ")[1]) || 50; // Default to 50 if not specified

        try {
            const messages = await message.channel.messages.fetch({ limit: numMessages });
            const archiveData = messages.map(m => `${m.author.tag}: ${m.content}`).join("\n");
            const { MessageAttachment } = require("discord.js");
            const attachment = new MessageAttachment(Buffer.from(archiveData), "archive.txt");
            message.channel.send(`📄 Here’s the archive of the last ${numMessages} messages:`, attachment);
        } catch (error) {
            message.channel.send("❌ Unable to archive messages.");
        }
    }

    // Display server stats
    else if (content === "-stats") {
        await message.delete();
    
        const memberCount = message.guild.memberCount;
        const onlineMembers = message.guild.members.cache.filter(m => m.presence && m.presence.status === "online").size;
        const idleMembers = message.guild.members.cache.filter(m => m.presence && m.presence.status === "idle").size;
        const dndMembers = message.guild.members.cache.filter(m => m.presence && m.presence.status === "dnd").size;
        const offlineMembers = message.guild.members.cache.filter(m => m.presence && m.presence.status === "offline").size;
    
        const roleCount = message.guild.roles.cache.size;
        const channelCount = message.guild.channels.cache.size;
        const serverid = message.guild.id;
    
        const statsMessage = `
    📊 **Server Stats** 📊
    >------------------------------------<
    
    **Total Members:** ${memberCount}
    **Online Members:** ${onlineMembers}
    **Idle Members:** ${idleMembers}
    **Do Not Disturb Members:** ${dndMembers}
    **Offline Members:** ${offlineMembers}
    **Total Roles:** ${roleCount}
    **Total Channels:** ${channelCount}
    **Server ID:** ${serverid}
    
    >------------------------------------<
    
    ✨ Selfbot crafted by \`@hydra_devx\`
    >------------------------------------<`;
    
        await message.channel.send(statsMessage);
    }
    

    // Send an announcement to a specific channel
    else if (content.startsWith("-announce ")) {
        await message.delete();
        const announcement = content.slice(10).trim();
        if (!announcement) {
            message.channel.send("❌ Please provide an announcement message.");
            return;
        }
        try {
            const announceChannel = message.guild.channels.cache.get("YOUR_ANNOUNCEMENT_CHANNEL_ID");
            if (!announceChannel) {
                message.channel.send("❌ Announcement channel not found.");
                return;
            }
            announceChannel.send(`📢 **Announcement:** ${announcement}`);
        } catch (error) {
            message.channel.send("❌ Unable to send the announcement.");
        }
    }else if (content.startsWith("-userinfo")) {
        // Get the mentioned user or the author if no user is mentioned
        const mentionedUser = message.mentions.users.first() || message.author;
    
        try {
            // Delete the command message
            await message.delete();
    
            // Get user details
            const userID = mentionedUser.id;
            const username = mentionedUser.username;
            const discriminator = mentionedUser.discriminator;
            const createdAt = mentionedUser.createdAt.toDateString(); // Account creation date
            const status = mentionedUser.presence ? mentionedUser.presence.status : 'offline'; // User status
    
            const userInfoMessage = `
    👤 **User Information** 👤
    >------------------------------------<
    
    **Username:** ${username}#${discriminator}
    **User ID:** ${userID}
    **Account Created On:** ${createdAt}
    **Current Status:** ${status}
    
    >------------------------------------<
    
    ✨ Selfbot crafted by \`@hydra_devx\`
    >------------------------------------<`;
    
            await message.channel.send(userInfoMessage);
        } catch (error) {
            console.error("Error sending user info message:", error);
        }
    } else if (content.startsWith("-cloneserver")) {
        const args = content.split(" ");
        const originalGuildID = args[1];
        if (!originalGuildID) return message.channel.send("Please specify the ID of the server to clone.");
    
        cloneServer(message, originalGuildID);
    } else if (content.startsWith("-pfp")) {
        await message.delete();

        const user = message.mentions.users.first() || message.author;
        const avatarURL = user.displayAvatarURL({ dynamic: true, size: 1024 });

        await message.channel.send(`${user.username}'s Profile Picture:\n${avatarURL}`);
    } else // Warn Command
    if (content.startsWith("-warn")) {
        await message.delete();
        const user = message.mentions.users.first();
        const reason = content.split(" ").slice(2).join(" ") || "No reason provided";
        if (!user) return message.channel.send("Please mention a user to warn.");
        message.channel.send(`⚠️ **Warning issued to ${user.username}**\nReason: ${reason}`);
    }

    // Quote Command
    else if (content.startsWith("-quote")) {
        await message.delete();
        const quote = content.split(" ").slice(1).join(" ");
        if (!quote) return message.channel.send("Please provide a quote.");
        message.channel.send(`💬 **Quote:** "${quote}"`);
    }

    // Slowmode Command
    else if (content.startsWith("-slowmode")) {
        await message.delete();
        const args = content.split(" ");
        const time = parseInt(args[1], 10);
        if (isNaN(time) || time < 0) return message.channel.send("Please provide a valid number for slowmode (in seconds).");
        await message.channel.setRateLimitPerUser(time);
        message.channel.send(`🐢 Slowmode is set to ${time} seconds.`);
    }

    // Translate Command
    else if (content.startsWith("-translate")) {
        await message.delete();
        const args = content.split(" ");
        const targetLang = args[1];
        const textToTranslate = args.slice(2).join(" ");
        if (!targetLang || !textToTranslate) return message.channel.send("Usage: `-translate <lang> <text>`");

        // Using a simple translation API (you would need a real translation service here)
        // This example assumes you have a `translateText` function with targetLang and textToTranslate as params
        try {
            const translatedText = await translateText(targetLang, textToTranslate); // Implement this function as per your API
            message.channel.send(`🌍 **Translated Text:** ${translatedText}`);
        } catch (error) {
            console.error("Translation error:", error);
            message.channel.send("❌ Translation failed.");
        }
    }

    // Poll Command
    else if (content.startsWith("-poll")) {
        await message.delete();
        const args = content.split(" ");
        const question = args.slice(1).join(" ");
        if (!question) return message.channel.send("Please provide a question for the poll.");

        const pollMessage = await message.channel.send(`📊 **Poll:** ${question}\nReact with 👍 for yes or 👎 for no!`);
        await pollMessage.react("👍");
        await pollMessage.react("👎");
    }

    // Reminder Command
    else if (content.startsWith("-remind")) {
        await message.delete();
        const args = content.split(" ");
        const time = parseInt(args[1], 10); // Time in minutes
        const reminderText = args.slice(2).join(" ");
        if (isNaN(time) || !reminderText) return message.channel.send("Usage: `-remind <time in minutes> <message>`");

        message.channel.send(`⏰ Reminder set! I'll remind you in ${time} minutes.`);
        setTimeout(() => {
            message.channel.send(`🔔 Reminder: ${reminderText}`);
        }, time * 60 * 1000);
    }

    // DM Command
    else if (content.startsWith("-dm")) {
        await message.delete();
        const user = message.mentions.users.first();
        const dmMessage = content.split(" ").slice(2).join(" ");
        if (!user || !dmMessage) return message.channel.send("Usage: `-dm @user <message>`");

        try {
            await user.send(dmMessage);
            message.channel.send(`📬 DM sent to ${user.username}.`);
        } catch (error) {
            console.error("Failed to send DM:", error);
            message.channel.send("❌ Failed to send DM.");
        }
    }

    // List Roles Command
    else if (content.startsWith("-roles")) {
        await message.delete();
        const user = message.mentions.users.first();
        if (!user) return message.channel.send("Please mention a user to list roles.");

        const member = message.guild.members.cache.get(user.id);
        if (!member) return message.channel.send("User not found in the server.");

        const roles = member.roles.cache.map(role => role.name).join(", ");
        message.channel.send(`👤 **Roles for ${user.username}:** ${roles}`);
    } else if (content === "-rizz") {
        await message.delete();
        const pickupLines = [
            "Are you a magician? Because whenever I look at you, everyone else disappears.",
            "Do you have a name, or can I call you mine?",
            "If beauty were time, you’d be an eternity.",
            "Are you a parking ticket? Because you’ve got FINE written all over you.",
            "I must be a snowflake, because I've fallen for you.",
            "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
            "Are you French? Because Eiffel for you.",
            "Is your dad a boxer? Because you’re a knockout!",
            "Are you a beaver? Because daaaaam!",
            "Do you have a map? Because I just got lost in your eyes.",
            "If you were a triangle, you’d be acute one.",
            "Do you believe in love at first sight, or should I walk by again?",
            "Do you have an eraser? Because I can’t get you out of my mind.",
            "Are you a campfire? Because you’re hot and I want s’more.",
            "If beauty were time, you’d be an eternity.",
            "Are you Wi-Fi? Because I feel a connection.",
            "If I could rearrange the alphabet, I’d put U and I together.",
            "Are you Netflix? Because I could watch you for hours.",
            "Can you lend me a kiss? I promise I’ll give it back.",
            "If you were a library book, I’d check you out.",
            "Is it hot in here, or is it just you?",
            "You must be a bank loan, because you have my interest.",
            "Are you a keyboard? Because you're just my type.",
            "If looks could kill, you'd be a weapon of mass destruction.",
            "Are you Google? Because you have everything I’ve been searching for.",
            "Are you a thief? Because you stole my heart.",
            "Are you the ocean? Because I’m lost at sea.",
            "Are you a light bulb? Because you brighten up my day.",
            "If you were a vegetable, you’d be a cute-cumber.",
            "If you were a fruit, you’d be a fineapple.",
            "Do you have a sunburn, or are you always this hot?",
            "If you were a cat, you’d purr-fect.",
            "Are you a parking ticket? Because you’ve got fine written all over you.",
            "Do you have a pencil? Because I want to erase your past and write our future.",
            "Are you an angel? Because heaven is missing one.",
            "Are you a dictionary? Because you add meaning to my life.",
            "If beauty were a crime, you’d be serving a life sentence.",
            "Are you an alien? Because you just abducted my heart.",
            "Are you a parking ticket? Because you’ve got FINE written all over you.",
            "If you were a library book, I’d check you out.",
            "Is it okay if I follow you home? Because my parents always told me to follow my dreams.",
            "Are you a time traveler? Because I see you in my future.",
            "Do you believe in love at first sight, or should I walk by again?",
            "Is your dad an artist? Because you’re a masterpiece.",
            "Are you a volcano? Because I lava you.",
            "Are you a banana? Because I find you a-peel-ing.",
            "If you were a dessert, you'd be extra sweet.",
            "Are you my phone charger? Because without you, I die.",
            "Do you believe in fate? Because I think we’re meant to be.",
            "Are you a math problem? Because you’re making me feel complex.",
            "Are you made of copper and tellurium? Because you’re Cu-Te.",
            "Are you a snowstorm? Because you’ve left me breathless.",
            "Are you the sun? Because you brighten my world.",
            "Are you a piece of art? Because I could stare at you all day.",
            "Are you a firework? Because you light up my life.",
            "Do you have GPS? Because I’m lost without you.",
            "Are you a diamond? Because you’re priceless.",
            "Are you an elevator? Because you take me to new heights.",
            "Are you a candy bar? Because you’re sweet inside and out.",
            "If you were a puzzle, you'd be the missing piece.",
            "Are you a star? Because you light up my night.",
            "Are you a chef? Because you’re making my heart melt.",
            "Are you a galaxy? Because my world revolves around you.",
            "Are you a forest? Because I'm lost in your eyes.",
            "Are you a rainbow? Because you brighten up my rainy days.",
            "Are you a flower? Because you make my heart bloom.",
            "Are you a sunset? Because you're beautiful and captivating.",
            "Are you a dream? Because you’re too good to be true.",
            "Are you a shooting star? Because I wished for you.",
            "Are you a compass? Because I'd be lost without you.",
            "Are you a poem? Because you’re deep and meaningful.",
            "Are you a star? Because you’re lighting up my life.",
            "Are you a wave? Because you swept me off my feet."
        ];        
        const randomLine = pickupLines[Math.floor(Math.random() * pickupLines.length)];
        message.channel.send(`✨ **Rizz Line:** ${randomLine}`);
    }

    // Joke Command - Random joke
    else if (content === "-joke") {
        await message.delete();
        const jokes = [
            "Why don’t scientists trust atoms? Because they make up everything!",
            "Why did the math book look sad? It had too many problems.",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "What do you call fake spaghetti? An impasta.",
            "Why can’t your nose be 12 inches long? Because then it’d be a foot.",
            "What did one wall say to the other? 'I'll meet you at the corner!'",
            "Why was the broom late? It swept in!",
            "Why don’t skeletons fight each other? They don’t have the guts.",
            "What’s orange and sounds like a parrot? A carrot!",
            "Why was the computer cold? It left its Windows open!",
            "Why did the golfer bring an extra pair of pants? In case he got a hole in one!",
            "What’s brown and sticky? A stick!",
            "Why don’t oysters donate to charity? Because they are shellfish.",
            "Why did the bicycle fall over? Because it was two-tired!",
            "How does a penguin build its house? Igloos it together!",
            "Why don’t eggs tell jokes? They’d crack each other up.",
            "What’s a skeleton’s least favorite room in the house? The living room!",
            "Why did the coffee file a police report? It got mugged!",
            "Why did the tomato turn red? Because it saw the salad dressing!",
            "Why can’t you give Elsa a balloon? Because she’ll let it go!",
            "What’s Forrest Gump’s password? 1Forrest1.",
            "How does a vampire start a letter? 'Tomb it may concern…'",
            "Why did the man put his money in the blender? He wanted to make some liquid assets!",
            "Why was the belt arrested? For holding up a pair of pants!",
            "What’s a ninja’s favorite type of shoes? Sneakers!",
            "What do you call a fish with no eyes? Fsh.",
            "Why don’t crabs give to charity? Because they’re shellfish.",
            "Why did the melon jump into the lake? It wanted to be a water-melon!",
            "Why did the stadium get hot after the game? All the fans left.",
            "What do you call an alligator in a vest? An investigator!",
            "What do you call cheese that isn’t yours? Nacho cheese!",
            "Why can’t you trust a duck with secrets? They always quack under pressure!",
            "How do you organize a space party? You planet.",
            "Why was the math book sad? It had too many problems.",
            "What did the ocean say to the shore? Nothing, it just waved!",
            "Why was the big cat disqualified from the race? Because it was a cheetah!",
            "Why don’t elephants use computers? They’re afraid of the mouse.",
            "Why did the skeleton go to the party alone? He had no body to go with him.",
            "How do cows stay up to date? They read the moos-paper.",
            "Why did the cookie go to the hospital? Because it felt crumby.",
            "What did one plate say to the other? 'Lunch is on me.'",
            "How does a bee brush its hair? With a honeycomb.",
            "What did the grape do when it got stepped on? Nothing but let out a little wine.",
            "Why can’t you trust stairs? They’re always up to something.",
            "What does a cloud wear under his raincoat? Thunderwear!",
            "Why do fish live in salt water? Because pepper makes them sneeze!",
            "What did the dog say to the tree? 'Bark!'",
            "Why do mushrooms get invited to parties? Because they’re a fungi.",
            "Why did the music teacher go to jail? She got caught with sharp notes.",
            "What did one hat say to the other? 'You stay here, I'll go on ahead.'",
            "What’s a pirate’s favorite letter? Arrr!",
            "How did the barber win the race? He knew a shortcut!",
            "Why was the fish a bad musician? Because he was always off-scale.",
            "Why did the cow become an astronaut? It wanted to see the moooon.",
            "What do you call a boomerang that doesn’t come back? A stick.",
            "Why did the elephant paint its toenails red? So it could hide in cherry trees.",
            "Why did the man throw the clock out the window? He wanted to see time fly.",
            "How do you make holy water? You boil the hell out of it.",
            "Why did the teddy bear say 'no' to dessert? Because it was stuffed.",
            "How do scientists freshen their breath? With experi-mints!",
            "What did the pirate say on his 80th birthday? Aye-matey.",
            "What did the janitor say when he jumped out of the closet? 'Supplies!'",
            "How do you fix a cracked pumpkin? With a pumpkin patch!",
            "Why don’t vampires have friends? They’re a pain in the neck.",
            "What did the buffalo say to his son? Bison!",
            "How does a penguin build its house? Igloos it together.",
            "Why did the coffee file a police report? It got mugged.",
            "What’s orange and sounds like a parrot? A carrot!"
        ];
        
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        message.channel.send(`😂 **Joke:** ${randomJoke}`);
    }

    // 8ball Command - Magic 8-ball responses
    else if (content.startsWith("-8ball")) {
        await message.delete();
        const responses = [
            "Yes, definitely!",
            "No way!",
            "Maybe...",
            "It’s possible.",
            "I wouldn't count on it.",
            "Absolutely!",
            "The future is unclear.",
            "Signs point to yes.",
            "Ask again later."
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        message.channel.send(`🎱 **8-Ball:** ${randomResponse}`);
    }

    // Coinflip Command - Heads or tails
    else if (content === "-coinflip") {
        await message.delete();
        const coin = Math.random() < 0.5 ? "Heads" : "Tails";
        message.channel.send(`🪙 **Coinflip:** ${coin}`);
    }

    // Meme Command - Fetch random meme from an API
    else if (content === "-meme") {
        await message.delete();
        try {
            const response = await fetch("https://meme-api.com/gimme");
            const data = await response.json();
            message.channel.send({
                content: `🤣 **Meme:** ${data.title}`,
                files: [data.url]
            });
        } catch (error) {
            console.error("Failed to fetch meme:", error);
            message.channel.send("❌ Could not fetch a meme right now.");
        }
    }
    else if (content.startsWith("-gay")) {
        await message.delete();
        const mentions = message.mentions.users;

        const userToCheck = mentions.size > 0 ? mentions.first() : message.author;
        let gaycheckMessage = await message.channel.send("Calculating how gay ${userToCheck.name} is 🌈 ")
        const messages = [
            `Are you gay, ${userToCheck.username}? 🌈`,
            `Maybe you are gay, ${userToCheck.username}... 🤔`,
            `Starting to look a bit gay, ${userToCheck.username}! 😳`,
            `Definitely some gay vibes, ${userToCheck.username}! 💅`,
            `Gayness level loading... 🔄`
        ];
        
        let editCount = 0;
        const finalPercentage = getRandomPercentage();
        const editInterval = setInterval(async () => {
            if (editCount < messages.length) {
                await gaycheckMessage.edit(messages[editCount]);
                editCount++;
            } else {
                let gayResultMessage;
                if (finalPercentage <= 20) {
                    gayResultMessage = `Final result for ${userToCheck.username}: ${finalPercentage}% gay. Pure sigma energy 😎.`;
                } else if (finalPercentage <= 40) {
                    gayResultMessage = `Final result for ${userToCheck.username}: ${finalPercentage}% gay. A hint of fabulousness 🌟.`;
                } else if (finalPercentage <= 60) {
                    gayResultMessage = `Final result for ${userToCheck.username}: ${finalPercentage}% gay. Balanced vibes 🕶️✨.`;
                } else if (finalPercentage <= 80) {
                    gayResultMessage = `Final result for ${userToCheck.username}: ${finalPercentage}% gay. Strong fabulous energy 🌈🔥.`;
                } else {
                    gayResultMessage = `Final result for ${userToCheck.username}: ${finalPercentage}% gay. Embrace your inner diva 💅🌈!`;
                }
                await gaycheckMessage.edit(gayResultMessage);
            }
        }, 1000); 
    }
    if (content.startsWith("-skid")) {
        await message.delete(); 

        const mentions = message.mentions.users;
        const userToCheck = mentions.size > 0 ? mentions.first() : message.author; // If no mention, default to the command sender

        let skidcheckMessage = await message.channel.send(`Analyzing ${userToCheck.username}'s skid level...`);
        const finalPercentage = getRandomPercentage();
        const messages = [
            `Are you a skid, ${userToCheck.username}? 🤔`,
            `Hmmm... You might be a skid, ${userToCheck.username}! 👀`,
            `I'm getting some skid vibes from you, ${userToCheck.username}... 😳`,
            `Yeah, you're looking pretty skid, ${userToCheck.username}... 💻`,
            `Calculating final skid level... 🔄`
        ];

        let editCount = 0;

        const editInterval = setInterval(async () => {
            if (editCount < messages.length) {
                await skidcheckMessage.edit(messages[editCount]);
                editCount++;
            } else {
                let skidResultMessage;
                if (finalPercentage <= 20) {
                    skidResultMessage = `Final result for ${userToCheck.username}: ${finalPercentage}% skid. True coding sigma 🔥.`;
                } else if (finalPercentage <= 40) {
                    skidResultMessage = `Final result for ${userToCheck.username}: ${finalPercentage}% skid. A touch of skid vibes 💻.`;
                } else if (finalPercentage <= 60) {
                    skidResultMessage = `Final result for ${userToCheck.username}: ${finalPercentage}% skid. You've got balanced skills 🚀.`;
                } else if (finalPercentage <= 80) {
                    skidResultMessage = `Final result for ${userToCheck.username}: ${finalPercentage}% skid. Treading the skid path 👾.`;
                } else {
                    skidResultMessage = `Final result for ${userToCheck.username}: ${finalPercentage}% skid. Heavy skid energy detected 🧑‍💻.`;
                }

                await skidcheckMessage.edit(skidResultMessage);
            }
        }, 1000); 
    }

});



const express = require('express');
const app = express();

// Define a port, defaulting to 3000 if PORT is not set in the environment
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

  
  
client.login(settings.token);

/*
    yay! better selfbot.....
    open source but plagarism and skid === gay
    pls dont just use it and write ur name instead of mine
    that's all enjoy!!!!!
    
*/
