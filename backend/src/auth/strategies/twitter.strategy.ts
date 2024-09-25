import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-twitter';

@Injectable()
export class TwitterStrategy extends PassportStrategy(Strategy, 'twitter') {
  constructor() {
    super({
      consumerKey: process.env.TWITTER_API_KEY,
      consumerSecret: process.env.TWITTER_API_KEY_SECRET,
      callbackURL: 'http://localhost:3002/auth/callback',
      includeEmail: true,
    });
  }

  async validate(token: string, tokenSecret: string, profile: any, done: Function) {
    try {
      const { id, displayName, emails, photos } = profile;
      const user = {
        id,
        name: displayName,
        email: emails?.[0]?.value,
        picture: photos?.[0]?.value,
      };

      done(null, user); // Pass user to request object
    } catch (err) {
      done(err, false);
    }
  }
}
