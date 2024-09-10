import { ArgsOf, Discord, On } from "discordx";
import { ValidateThreadExistence } from "../backend/queries.ts";

@Discord()
class GuildCreate {
    @On({event: "guildCreate"})
    async guildCreate(guildInfo: ArgsOf<"guildCreate">) {
        ValidateThreadExistence(parseInt(guildInfo[0].id as string))
    }
}