'use strict';

var linkedinStrategy = require('passport-linkedin-oauth2').Strategy,
    settings = require('../../config'),
    findOrCreateOAuth = require('./_findOrCreateOAuth');

/**
 * Strategy Linkedin
 */
module.exports = function (passport) {
    passport.use('linkedin',
        new linkedinStrategy(
            {
                clientID: settings.linkedinStrategy.clientID,
                clientSecret: settings.linkedinStrategy.clientSecret,
                callbackURL: settings.linkedinStrategy.callbackURL,
                scope: ['r_emailaddress', 'r_basicprofile'],
                passReqToCallback: true,
                state: true
            },
            function (req, token, refreshToken, profile, done) {
                findOrCreateOAuth(req, token, refreshToken, profile, done);
            }
        )
    );
};