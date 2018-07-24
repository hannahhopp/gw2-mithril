import m from "mithril";

const Item = {
    list : [],

    loadList : () => {
        return m.request({
        method : "GET",
        url : "https://api.guildwars2.com/v2/items",
        })
        .then(res => {
            for (let i = 0; i < 250; i++) {
                const rand = Math.round(Math.random() * 50000);
                m.request({
                    method : "GET",
                    url : `https://api.guildwars2.com/v2/items/${res[rand]}`
                })
                .then(res => Item.list.push(res));
            }
        })
        .catch(err => console.err(err));
    },
}

export default Item;