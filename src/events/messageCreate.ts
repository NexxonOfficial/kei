import { Discord, On, ArgsOf } from "discordx";
import { gThreadOwners } from '../globals/globalData.ts'
import { ChannelType, ThreadAutoArchiveDuration } from "discord.js";

@Discord()
export class MessageCreate {
    @On({event: 'messageCreate'})
    messageCreate(message: ArgsOf<'messageCreate'>) {
        if(message[0].channel.id == "1282836639856594964") {
            if(!gThreadOwners.find(x => x == message[0].author.id)) {
                gThreadOwners.push(message[0].author.id)
                message[0].startThread({
                    name: message[0].content,
                    autoArchiveDuration: ThreadAutoArchiveDuration.OneHour,
                    type: ChannelType.PublicThread,
                    reason: "Auto thread creation for message in support channel."
                })
            }
        }
    }
}