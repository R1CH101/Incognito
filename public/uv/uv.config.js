self.__uv$config = {
    prefix: '/~/uv/',
    bare: 'https://iproxy.apps.lilleycloud.com/bare/',
    encodeUrl: function encode(str) {
        if (!str) return str;
        return encodeURIComponent(btoa(str.toString()));
    },
    decodeUrl: function decode(str) {
        if (!str) return str;
        let [input, ...search] = str.split('?');

        return (
            decodeURIComponent(atob(input))
        );
    },
    handler: '/uv/uv.handler.js',
    client: '/uv/uv.client.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js'
};
