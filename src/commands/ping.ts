import { Discord, Slash } from "discordx";
import { CommandInteraction } from "discord.js";

@Discord()
class Example {
  @Slash({ description: "Pings tings", name: "ping" })
  async hello(interaction: CommandInteraction) {
    await interaction.deferReply({ephemeral: true})
    interaction.editReply({content: "Pong!"})
  }
}