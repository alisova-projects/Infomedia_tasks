import { test, request, expect } from '@playwright/test';
import { UserController } from '../../api/controllers/user.controller';

import { loginUserData } from '../../fixtures/api/loginUserData';

test("Login user", async () => {
    const apiContext = await request.newContext({baseURL: 'https://petstore.swagger.io/v2'});
    const userController = new UserController(apiContext);

    const loginUserResponse = await userController.loginUser(loginUserData);

        expect(await loginUserResponse.ok()).toBeTruthy();
        const loginResponseJson = await loginUserResponse.json();
        console.log(loginResponseJson);
        return loginResponseJson;
});