import { ArgsOf, Discord, On } from "discordx";

@Discord()
class GuildCreate {
    @On({event: "guildCreate"})
    async guildCreate(guildInfo: ArgsOf<"guildCreate">) {

    }
}