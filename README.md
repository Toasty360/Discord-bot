-   Create cloudflare account
-   Install/setup `wrangler`
-   Fork || `download` the code.
-   Create wrangler.toml file and update the values.
-   run `npm install`
-   run `wrangler dev` [your code will run on `http://localhost:8787/`]
-   visit `http://localhost:8787/register` to register your slash commands
-   visit `https://discord.com/oauth2/authorize?client_id=<BOT-APPLICATION-ID>`. Then add bot to your discord application or any servers.
-   Run any slash command.
-   visit `https://discord.com/developers/active-developer` to claim your badge. Wait for some time if it doesn't appear on the website.

##### wrangler.toml

```wrangler.toml
name = "discord-bot"
main = "src/index.js"
compatibility_date = "2024-11-06"
compatibility_flags = ["nodejs_compat"]


[observability]
enabled = true

[vars]
DISCORD_TOKEN="<BOT-TOKEN>"
DISCORD_APPLICATION_ID="<BOT-APPLICATION-ID>"
DISCORD_PUBLIC_KEY="<YOUR-PUBLIC-KEY>"
```
