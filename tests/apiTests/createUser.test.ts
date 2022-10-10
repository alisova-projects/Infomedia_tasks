import { test, request, expect } from '@playwright/test';
import { UserController } from '../../api/controllers/user.controller';

import { createUserData } from '../../fixtures/api/createUserData';
    
test("Creation of a new user", async () => {
    const apiContext = await request.newContext({ baseURL: 'https://petstore.swagger.io' });
    const userController = new UserController(apiContext);

    const createUserResponse = await userController.createNewUser(createUserData);
    console.log(await createUserResponse.json());
    expect(createUserResponse.ok()).toBeTruthy();
});


