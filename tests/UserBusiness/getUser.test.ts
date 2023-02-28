import { UserBusiness } from "../../src/business/UserBusiness";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { TokenManagerMock } from "../mocks/TokenManagerMock";
import { HashManagerMock } from "../mocks/HashManagerMock";
import { GetUserInputDTO } from "../../src/dtos/userDTO";
import { USER_ROLES } from "../../src/types";

describe("login", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  );

  test("Deve retornar um Usuário em f(id)", async () => {
    const input: GetUserInputDTO = {
        token: "token-mock-admin",
        id: "id-mock"
    }
    const response = await userBusiness.getUserById(input)
    expect(response).toEqual({
      id: "id-mock",
      name: "Normal Mock",
      email: "normal@email.com",
      password: "hash-bananinha",
      createdAt: expect.any(String),
      role: USER_ROLES.NORMAL,
    })
  })

});
