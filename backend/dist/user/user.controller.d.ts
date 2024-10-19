import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';
export declare class UserController {
    private readonly userService;
    private readonly authService;
    constructor(userService: UserService, authService: AuthService);
    create(createUserDto: CreateUserDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateUserDto: UpdateUserDto): any;
    remove(id: string): any;
    login(loginDto: {
        email: string;
        password: string;
    }): Promise<{
        accessToken: string;
    }>;
}
