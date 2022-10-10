import { test, request, expect } from '@playwright/test';
import { UserController } from '../../api/controllers/user.controller';

import { deleteUserData } from '../../fixtures/api/deleteUserData';

test("Delete user", async () => {
    const apiContext = await request.newContext({baseURL: 'https://petstore.swagger.io/v2'});
    const userController = new UserController(apiContext);

    const deleteUserResponse = await userController.deleteUser(deleteUserData.username);

    expect(await deleteUserResponse.ok()).toBeTruthy();
    const deleteResponseJson = await deleteUserResponse.json();
    console.log(deleteResponseJson);
    return deleteResponseJson;
});