const withCSS = require('@zeit/next-css');
const fetch = require('isomorphic-unfetch');

module.exports = withCSS({
    exportPathMap: async function () {
        const paths = {
            "/": { page: "/" },
            "/about": { page: "/about" },
            "/lugnews": { page: "/lugNews" }
        }

        const res = await fetch('https://apdr.ir/api/lugs');
        const data = await res.json();
        const lugs = data.lugs;
        lugs.forEach(lug => {
            paths[`/lug/${lug.id}`] = { page: '/lug/[id]', query: { id: lug.id } };
        });

        return paths;
    },
    assetPrefix: '',

    webpack: function (config) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[name].[ext]'
                }
            }
        })
        return config
    }
})