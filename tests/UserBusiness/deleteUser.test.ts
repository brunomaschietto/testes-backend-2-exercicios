import { UserBusiness } from "../../src/business/UserBusiness";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { TokenManagerMock } from "../mocks/TokenManagerMock";
import { HashManagerMock } from "../mocks/HashManagerMock";
import { DeleteInputDTO } from "../../src/dtos/userDTO";

describe("delete", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  );

  test("Deve deletar um Usuário pelo id", async () => {
    const input: DeleteInputDTO = {
      idToDelete: "id-mock",
      token: "token-mock-admin",
    };

    const response = await userBusiness.delete(input);
    expect(response).toEqual({ message: "Usuário deletado com sucesso" });
  });
});
