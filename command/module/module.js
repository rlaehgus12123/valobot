const axios = require("axios");
const cheerio = require("cheerio");

const data = {
    rank: async (players_name, players_tag) => {
        return new Promise(function(resolve, reject) {
            let encoded = encodeURIComponent(`#`)
            let encoded_name = encodeURI(`${players_name}`) + encoded + encodeURI(`${players_tag}`)

            const getHtml = async () => {
                try {
                    return axios.get(`https://tracker.gg/valorant/profile/riot/${encoded_name}/overview?playlist=competitive`).catch(function (error) {
                        if (error.response) {
                            resolve(error.response.status)
                        }
                      });
                } catch (error) {
                    console.error(error);
                }
            };

            getHtml()
            .then((html) => {
                try {
                const $ = cheerio.load(html.data);
                const data = {
                    user_info: {
                        nickname: `${players_name}#${players_tag}`,
                        profile_url: `https://tracker.gg/valorant/profile/riot/${encoded_name}/overview?playlist=competitive`,
                        profile_image: $('#app > div.trn-wrapper > div.trn-container > div > main > div.content.no-card-margin > div.ph > div.ph__container > div.ph-avatar > svg > image').attr('href')
                    },
                    record: {
                        lank: $('#app > div.trn-wrapper > div.trn-container > div > main > div.content.no-card-margin > div.site-container.trn-grid.trn-grid--vertical.trn-grid--small > div.trn-grid.container > div.area-main > div.segment-stats.area-main-stats.card.bordered.header-bordered.responsive > div.highlighted.highlighted--giants > div.highlighted__content > div > div > div:nth-child(2) > span.stat__value').text(),
                        winrate: $('#app > div.trn-wrapper > div.trn-container > div > main > div.content.no-card-margin > div.site-container.trn-grid.trn-grid--vertical.trn-grid--small > div.trn-grid.container > div.area-main > div.segment-stats.area-main-stats.card.bordered.header-bordered.responsive > div.giant-stats > div:nth-child(4) > div > div.numbers > span.value').text(),
                        avgscore: $('#app > div.trn-wrapper > div.trn-container > div > main > div.content.no-card-margin > div.site-container.trn-grid.trn-grid--vertical.trn-grid--small > div.trn-grid.container > div.area-main > div.segment-stats.area-main-stats.card.bordered.header-bordered.responsive > div.main > div:nth-child(6) > div > div.numbers > span.value').text(),
                        kd: $('#app > div.trn-wrapper > div.trn-container > div > main > div.content.no-card-margin > div.site-container.trn-grid.trn-grid--vertical.trn-grid--small > div.trn-grid.container > div.area-main > div.segment-stats.area-main-stats.card.bordered.header-bordered.responsive > div.giant-stats > div:nth-child(2) > div > div.numbers > span.value').text(),
                        avgdmg: $('#app > div.trn-wrapper > div.trn-container > div > main > div.content.no-card-margin > div.site-container.trn-grid.trn-grid--vertical.trn-grid--small > div.trn-grid.container > div.area-main > div.segment-stats.area-main-stats.card.bordered.header-bordered.responsive > div.giant-stats > div:nth-child(1) > div > div.numbers > span.value').text(),
                        headshot: $('#app > div.trn-wrapper > div.trn-container > div > main > div.content.no-card-margin > div.site-container.trn-grid.trn-grid--vertical.trn-grid--small > div.trn-grid.container > div.area-main > div.segment-stats.area-main-stats.card.bordered.header-bordered.responsive > div.giant-stats > div:nth-child(3) > div > div.numbers > span.value').text(),
                        avgkills: $('#app > div.trn-wrapper > div.trn-container > div > main > div.content.no-card-margin > div.site-container.trn-grid.trn-grid--vertical.trn-grid--small > div.trn-grid.container > div.area-main > div.segment-stats.area-main-stats.card.bordered.header-bordered.responsive > div.main > div:nth-child(7) > div > div.numbers > span.value').text(),
                        image: $('#app > div.trn-wrapper > div.trn-container > div > main > div.content.no-card-margin > div.site-container.trn-grid.trn-grid--vertical.trn-grid--small > div.trn-grid.container > div.area-main > div.segment-stats.area-main-stats.card.bordered.header-bordered.responsive > div.highlighted.highlighted--giants > div.highlighted__content > div > div > img').attr('src'),
                    },
                    normal: {
                        // winrate: $('#app > div.trn-wrapper > div.trn-container > div > main > div.content.no-card-margin > div.site-container.trn-grid.trn-grid--vertical.trn-grid--small > div.trn-grid.container > div.area-main > div.segment-stats.area-main-stats.card.bordered.header-bordered.responsive > div.giant-stats > div:nth-child(4) > div > div.numbers > span.value').text(),
                        // avgscore: $('').text(),
                        // kd: $('').text(),
                        // avgdmg: $('').text(),
                        // headshot: $('').text(),
                        // avgkills: $('').text(),
                    },
                    updata: {
                    //   lastupadata: $('').text(),
                    }
                };
                resolve(data)
            } catch(err) {
                
            }
            })
        })
    },
}

module.exports = {
    data,
}