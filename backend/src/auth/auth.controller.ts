import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  @Get('login')
  @UseGuards(AuthGuard('twitter'))
  // @UseGuards(AuthenticatedGuard)
  async login() {
    // This route will redirect to auth0 for authentication
  }

  @Get('callback')
  @UseGuards(AuthGuard('twitter'))
  async callback(@Req() req, @Res() res) {
    // Handle the auth0 callback
    res.redirect('/');
  }

  @Get('logout')
  async logout(@Req() req, @Res() res) {
    req.logout();
    res.redirect('/');
  }
}