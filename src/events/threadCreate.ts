import { ThreadChannel, Interaction } from "discord.js";
import { ArgsOf, Discord, On } from "discordx";

@Discord()
export class ThreadCreate {
    @On({event: 'threadCreate'})
    threadCreate(thread: ArgsOf<'threadCreate'>, newlyCreated: boolean) {
        // Needs to go through the pattern recognition to attempt to find a solution for the problem instantly.
        
        
    }
}