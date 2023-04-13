import { Strategy } from 'passport';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField : 'name'});
  }

  async validate(): Promise<any> {
    const user = await this.authService.validateUser();
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}