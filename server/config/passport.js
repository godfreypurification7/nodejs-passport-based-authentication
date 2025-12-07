const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/user.model");

// Configure the JWT strategy
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY; // Use the same secret key as used for signing

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    console.log("JWT Payload:", jwt_payload); // Debugging line

    try {
      const user = await User.findById(jwt_payload.id);

      if (user) {
        return done(null, user);
      } else {
        console.warn(`JWT failed: User ID ${jwt_payload.id} not found.`);
        return done(null, false);
      }
    } catch (err) {
      console.error("Error during Passport JWT verification:", err);
      return done(err, false);
    }
  })
);
