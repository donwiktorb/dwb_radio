### Fivem script for discord radio. 👋

### Need help or searching for fivem stuff?

➡️ [Join discord here](https://discord.gg/txsweyv)

How to setup video [Youtube](https://youtu.be/tHNbnjVfKMo).

### BOT SETUP
- Create new discord where you need to make Waiting channel on top and hidden 1 2 3 4... channels then continue these steps
- Next you have to setup discord.js bot, download and install [Node js](https://nodejs.org/en/download/)
 - If you are using linux then you should follow these steps:
 - Nodejs
  ```
    sudo apt-get install npm
    cd /opt/
    wget https://nodejs.org/dist/v12.19.0/node-v12.19.0-linux-x64.tar.xz
    tar xf node-v12.19.0-linux-x64.tar.xz
    mv node-v12.19.0-linux-x64 nodejs
    rm node-v12.19.0-linux-x64.tar.xz
  ```
  - Installing bot
    - Create bot on [Discord Dev](https://discord.com/developers/applications) by creating new application (copy client id and save it for later) and clicking add bot, then copy the token
    - Edit config.js channel with the same channelid as the webhook and bottom line with token you have generated from Discord
    ```
      client.login('BOT TOKEN');
    ```
    - Put radio.js with package.json in some directory ex. /home/bot/ then execute these in console
     - Using linux
     ```
        cd BOT DIRECTORY ex. /home/bot/
        npm install
        /opt/nodejs/bin/node radio.js
     ```
     - Using windows
     ```
        cd BOT DIRECTORY ex. /home/bot/
        npm install
        node radio.js
     ```
    - Invite bot to your discord by https://discord.com/oauth2/authorize?client_id=THEBOTCLIENTIDEDITTHIS&scope=bot&permissions=8
    
### SCRIPT SETUP
  - Edit dwb_radio config.lua, change the webhook to one generated on Discord Server Settings - Integrations, then put script into fivem resources folder and start it in server.cfg

### HOW TO USE
- If you have everything installed and configured, join discord channel that you created on top named Waiting room or something and type /radio [channel number]
