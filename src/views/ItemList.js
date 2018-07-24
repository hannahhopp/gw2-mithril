import m from "mithril";

import Item from "../models/Item";

export default {
    oninit : Item.loadList,

    view : () => {
        return m(".item-list", Item.list.map((item) => {
            return m("img.icon", { 
                src : item.icon, 
                class : item.rarity 
            });
        }));
    }
}

// Rarities: Junk (grey), Basic (white), Fine (light blue), Masterwork (green), Rare (yellow), Exotic (orange), Ascended (fuschia), Legendary (purple)