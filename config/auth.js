// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '1179530838753184', // your App ID
        'clientSecret'    : 'c9e645ae02bde253893d86d9270e156c', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'        : 'MJ2MCYarm0eHsxadXwT1GY7J9',
        'consumerSecret'     : 'rUB9jHqQjAQeQF4TbamUXvDLWrL8ai6afl7kSt3PmxKlSGQp0f',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '906792644102-m02tgk2pt62b1ljtmpeunhg6ufqilgta.apps.googleusercontent.com',
        'clientSecret'     : '7nx0lHN8ZRJkxYIZdmyLsJ8u',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};
