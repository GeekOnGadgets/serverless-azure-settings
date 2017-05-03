import Settings from './src/Settings/Settings'

module.exports.settings = (event, context, callback) => {
    let settings = new Settings();

    const response = {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(settings.dev()),
    };
    callback(null, response);
}