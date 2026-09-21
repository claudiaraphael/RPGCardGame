/* 

"""3 separate parts, Entities, Components, and Systems. 

The Entities are the things in your game, and they just have Ids, and a list of components. This is a great way to use composition over inheritance.

The Components are PURELY data. There should be no logic, (I cheat and use helpers for some, e.g. getting a rectangle from a sprite or whatever).

Then finally the Systems, these process all your logic.

The beautiful part to this is when you're adding new features you very very rarely have to collide with existing features. A sample code flow would be having an "Engine" that contains all of the systems, and entities in an array. Then each game loop, you go through all the systems, and update the the entities. SIMPLE
""""
source: https://www.reddit.com/r/gamedev/comments/tg9ffl/how_do_you_manage_game_state_for_browserbased/
*/


const class Game {

    


    function start() {
        let start = true,
        
    }

    function pause() {
        start(false)
    }

    function save() {
        saved_logs = [slot00[""], slot01[""], slot02[""], slot03[""]]
        saved_log = saved_logs[i]
        return saved_log
    }

    function load_saved(saved_log) {
        console.log("Select the saved game slot:")
        load_saved(saved_log)
    }
}