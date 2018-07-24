import m from "mithril";

import Item from "../models/Item";

export default {
    oninit : Item.loadList,

    view : () => {
        return m(".item-list", Item.list.map(item => {
            return m("img.icon", { src : item.icon });
        }));
    }
}