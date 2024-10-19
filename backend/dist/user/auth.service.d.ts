import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(email: string, password: string): Promise<{
        accessToken: string;
    }>;
}
