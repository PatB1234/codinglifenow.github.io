#https://discord.com/api/oauth2/authorize?client_id=846067401664495648&scope=bot&permissions=68608

import discord 
import asyncio

bot = discord.Client()
@bot.event
async def on_message(message):
    print(message.content)
    if (message.content == "Hello Bot"):
        await message.channel.send("Hello YT!")
        await message.channel.send(file=discord.File("Website/DIY.jpg"))

bot.run('Your Token')