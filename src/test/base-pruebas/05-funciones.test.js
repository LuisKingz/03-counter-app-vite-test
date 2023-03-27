import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar un object", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user  = getUser();

    expect(testUser).toEqual(user);

  });



  test('getUsuarioActivo debe de retornar un objecto', () => { 
    const testName = "Luis";

    const user = getUsuarioActivo(testName);
    // expect(testName).toMatch(user.username)
    expect(user).toEqual({
        uid: 'ABC567',
        username: testName
    })

   })

});
