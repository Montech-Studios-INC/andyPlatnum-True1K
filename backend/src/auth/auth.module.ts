import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { Auth0Strategy } from './strategies/auth0.strategy';
import { TwitterStrategy } from './strategies/twitter.strategy';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PassportModule.register({ session: true }), ConfigModule],
  // imports: [PassportModule.register({ defaultStrategy: 'auth0' }), ConfigModule],
  providers: [TwitterStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
