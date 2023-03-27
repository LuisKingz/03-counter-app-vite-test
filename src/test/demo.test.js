describe("pruebas en nuevo componente", () => {
  test("esta prueba no debe de fallar", () => {
    // 1.- INICIALIZACION
    const message = "Hola mundo";
    // 2.- ESTIMULO
    const message2 = message.trim();
    // 3.- OBSERVAR EL COMPORTAMIENTO... ESPERANDO
    expect(message).toBe(message2);
  });
});
