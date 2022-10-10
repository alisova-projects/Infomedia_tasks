import { APIRequestContext, expect, request } from '@playwright/test';
import { CreateUserModel } from '../../api/models/createUser.model';

export class UserController {
    apiContext: APIRequestContext;

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext;
    }

    async createNewUser( createUserModel: CreateUserModel ) {
        return await this.apiContext.post('/v2/user', { data: createUserModel });
    }

    async loginUser(loginUserModel: any) {
        return await this.apiContext.get('/v2/user/login', loginUserModel);
    }

    async deleteUser(username: string ) {
        return await this.apiContext.delete(`/v2/user/${username}`);
    }
}