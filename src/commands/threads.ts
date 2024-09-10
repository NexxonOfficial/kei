import { Discord, SlashGroup, Slash } from "discordx";
import { ThreadsDisable, ThreadsEnable } from '../backend/queries.ts'
import { CommandInteraction } from "discord.js";

@Discord()
@SlashGroup({name: "threads", description: "The Thread Group Parent"})
@SlashGroup("threads")
@SlashGroup({name: "setup", description: "The Thread Subgroup Setups", root: "threads"})

class Setup {
    @Slash({description: "Enable automatic thread creation in specified channels"})
    @SlashGroup("setup", "threads")
    async enable(interaction: CommandInteraction) {
        await interaction.deferReply({ephemeral: true})
        let response: string = await ThreadsEnable(parseInt(interaction.guild!.id as string))

        if(response == "Resolved.") {
            interaction.editReply({content: "Successfully **enabled** threads for you. Everytime a user messages outside of the delay time, a new thread will be opened on their lead message!"})
        } else {
            interaction.editReply({content: response != "" ? response : "There has been an error enabling threads for you at this time. Please try again, or request support in our support server."})
        }
    }

    @Slash({description: "Disable automatic thread creation in specified channels"})
    @SlashGroup("setup", "threads")
    async disable(interaction: CommandInteraction) {
        await interaction.deferReply({ephemeral: true})
        let response: string = await ThreadsDisable(parseInt(interaction.guild!.id as string))

        if(response == "Resolved.") {
            interaction.editReply({content: "Successfully **disabled** threads for you. You will no longer get automated thread creation."})
        } else {
            interaction.editReply({content: response != "" ? response : "There has been an error disabling threads for you at this time. Please try again, or request support in our support server."})
        }
    }
}