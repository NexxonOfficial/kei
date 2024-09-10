import { Discord, SlashGroup, Slash } from "discordx";
import { EnableIfDisabled } from '../../backend/queries.ts'

@Discord()
@SlashGroup({name: "threads", description: "The Thread Group Parent"})
@SlashGroup("threads")
@SlashGroup({name: "setup", description: "The Thread Subgroup Setups", root: "threads"})

class Setup {
    @Slash({description: "Enable automatic thread creation in specified channels"})
    @SlashGroup("setup", "threads")
    enable() {
        
    }
}