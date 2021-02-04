const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '!!';
const token = 'Nzg0NTA2MzY1OTgwMDQ5NDI4.X8qSfQ.BiZ32t4wTZ2Cu034M7ib8NSJiYQ';
 
bot.on('ready', () => {
    console.log(`${bot.user.tag} successfully logged in to v1.3.6!`)
    bot.user.setActivity('your server.', ({type: "WATCHING"}))
})
 
bot.on('message', message => {
    let msg = message;
    if(msg.content === `${prefix}hi`){
        msg.channel.send(`Hello ${message.author.tag}`)
        console.log(`${message.author.tag} used command hi.`)
    }
    if(msg.content === `${prefix}help`){
        msg.channel.send('Hi user. This is the help menu for v1.3.6.')
        msg.channel.send('It might take a while for all 11 commands for this bot.')
        msg.channel.send('1. ping -> Pong!')
        msg.channel.send('2. add -> Submit a request for a new command.')
        msg.channel.send('3. dm-me -> Checks your DMs.')
        msg.channel.send('4. credits -> Credits.')
        msg.channel.send('5. minecraft -> Minecraft servers.')
        msg.channel.send('6. support -> Support me!')
        msg.channel.send('7. internet -> Improve your Internet.')
        msg.channel.send('8. money -> Free money!')
        msg.channel.send('9. changelog -> Changelog.')
        msg.channel.send('10. bug -> Use to see how to submit a bug report.')
        msg.channel.send('11. invite -> Invite to the bot and my server.')
        msg.channel.send('If you need more help, please join my support server: https://discord.gg/9j4FPHKXCd')
        console.log(`${message.author.tag} used command help.`)
    }
    if(msg.content === `${prefix}ping`){
        msg.channel.send('Pong!')
        console.log(`${message.author.tag} used command ping.`)
    }
    if(msg.content === `${prefix}add`){
        msg.channel.send('To add a command, fill out this form: https://forms.gle/SxPuK7xHukwPMSvPA.')
        console.log(`${message.author.tag} used command add. Check your DMs.`)
    }
    if(msg.content === `${prefix}dm-me`){
        msg.channel.send(`${message.author.tag}, check your DMs.`)
        msg.author.send("You can now DM me commands!")
        console.log(`${message.author.tag} used command dm-me.`)
    }
    if (msg.content === `${prefix}credits`){
        msg.channel.send("Thanks to YouTube (video 0pNgkYc2j7Q) for instructions and VSCode for programming interface.")
        console.log(`${message.author.tag} used command credits.`)
    }
    if (msg.content === `Strongoli`){
        msg.channel.send("That's me!")
    }
    if (msg.content === `${prefix}2fa`){
        msg.channel.send("I have DM'ed you instructions. I'm slow, give me some time. There are 10 messages total.")
        msg.author.send("Step 1: Have a phone/tablet/etc, or BlueStacks installed on your device.")
        msg.author.send("Step 2: On desktop or web, go to the gear icon in the bottom left corner next to your username.")
        msg.author.send('Step 3: Click on "Enable 2-Factor Authentication".')
        msg.author.send("Step 4: Select a method of 2FA.")
        msg.author.send("If you have a carrier SMS number, you can select phone. Enter your phone number and enter the number sent to you by Discord. That's it!")
        msg.author.send("If you don't have a carrier SMS number or using BlueStacks, you can select Authenticator App.")
        msg.author.send("First, Download a TOTP app, like Google Authenticator.")
        msg.author.send("Then, select the option, then scan the barcode or manually enter the code.")
        msg.author.send("Enter the code displayed on the app. If it doesn't work, try scanning the barcode or entering the code again by hitting Back.")
        msg.author.send("Finally, save the backup codes somewhere in case you lose your device or the app doesn't work. That's it!")
        console.log(`${message.author.tag} learned how to enable 2FA.`)
    }
    if (msg.content === `${prefix}support`){
        msg.channel.send("One way to support me is to donate. Check your DM's for ways to donate.")
        msg.channel.send("Another way to support me is to invite the bot to all of your other servers. Use link https://cb.run/MDP2 and invite away!")
        msg.author.send("Donation:")
        msg.author.send("Cash App: $idontgiveescheat")
        msg.author.send("Ping me for crypto donations.")
        console.log(`${message.author.tag} asked how to support you.`)
    }
    if (msg.content === `${prefix}internet`){
        msg.channel.send("Your internet is slow? I can help you!")
        msg.channel.send("One way to speed up your internet is by changing your DNS (which finds the websites you want on the Web). Use link https://warp.plus/FnFSi for PC, Mac, or mobile.")
        msg.channel.send("Another way is to use a VPN (Virtual Private Network). Use link https://windscribe.com/?friend=slo2c1eb for 10 GB of free data w/ verified email.")
        console.log(`${message.author.tag} wanted faster Internet.`)
    }
    if (msg.content === `${prefix}money`){
        msg.channel.send("Make free bitcoin with CryptoTab! Use link https://cryptotabbrowser.com/16348933 and start mining!")
        console.log(`${message.author.tag} wanted free money.`)
    }
    if (msg.content === `${prefix}changelog`){
        msg.channel.send("Changelog for v1.3.6:")
        //msg.channel.send("Removed key. All further applications will have the key attached to the link. Also removed admin. All info will be sent in <#782023417762545684>. Finally, removed minecraft.")
        //msg.channel.send("Fixed bug with dm-me command where it says 'Undefined, check your DMs.'")
        //msg.channel.send("Changed prefix to !!")
        msg.channel.send("Added Easter Egg!")
        console.log(`${message.author.tag} looked at the changelog.`)
    }
    if (msg.content === `${prefix}whatismyname`){
        if (`${message.author.tag}` === "!₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿#0655"){
            message.channel.send("You are Jacob.")
        }
        else {
            msg.channel.send("I dunno")
        }
    }
    if (msg.content === `${prefix}bug`){
        msg.channel.send("You found a bug? Great!")
        msg.channel.send("DM me (<@744327841650573432>) with the information I sent you.")
        msg.author.send("Send me a photo with the command and actual result. I will try to fix it.")
        console.log(`${message.author.tag} found a bug.`)
    }
    if (msg.content === `${prefix}log-debate chat`){
        msg.channel.send("A new debate has been logged. Please go to <#798996035803283476> to start a debate.")
        console.log("New text debate started in #live-debate.")
    }
    if (msg.content === `${prefix}log-debate voice`){
        msg.channel.send("A new debate has been logged. Please go to https://discord.gg/fGta2yZ6hX to start a debate.")
        console.log("New voice debate started in the voice channel Live Debate.")
    }
    if (msg.content === `${prefix}minecraft`){
        msg.channel.send(`Hello ${message.author.tag}! Here are my Minecraft servers:`)
        msg.channel.send("Java 1.16.5 Survival: idontgiveescheat1.aternos.me @ Port 37618")
        msg.channel.send("Java 1.16.5 PvP: jacob5257.aternos.me @ Port 38180")
        msg.channel.send("Java 1.16.5 Creative: idontgiveescheat2.aternos.me @ Port 64407")
        msg.channel.send("Message <@744327841650573432> for help.")
        msg.channel.send("Bedrock Survival Server: mc.doge.land @ Port 28094")
        msg.channel.send("Message <@696012365866598441> for help.")
        msg.channel.send("If you want your server here, message <@744327841650573432>.")
        msg.channel.send("If you want to chat about Minecraft and a bunch of other things, join our Discord server: https://discord.gg/fMKv39taVy")
        console.log(`${message.author.tag} queried Minecraft servers.`)
    }
    if (msg.content === `${prefix}invite`){
        msg.channel.send("Here's the invite link to the best bot in Discord (I think): https://cb.run/MDP2")
        msg.channel.send("Here's the invite link to the best server in Discord (I think): https://discord.gg/9j4FPHKXCd")
        console.log(`${message.author.tag} requested an invite.`)

    }
    if (msg.content === `${prefix}easteregg`){
        msg.channel.send(`Congratulations, you have found an easter egg!`)
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Congratulations!')
            //.setURL('https://discord.js.org/')
            .setAuthor('You found an easter egg!')//, 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
            .setDescription('It is the first embed of the bot!')
            //.setThumbnail('https://i.imgur.com/wSTFkRM.png')
            //.addFields(
              //  { name: 'Regular field title', value: 'Some value here' },
                //{ name: '\u200B', value: '\u200B' },
                //{ name: 'Inline field title', value: 'Some value here', inline: true },
               // { name: 'Inline field title', value: 'Some value here', inline: true },
            //)
            //.addField('Inline field title', 'Some value here', true)
            //.setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('Bot designed by !₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿₿#1187')//, 'https://i.imgur.com/wSTFkRM.png');

        msg.channel.send(exampleEmbed);
    }
})
 
bot.login(token);