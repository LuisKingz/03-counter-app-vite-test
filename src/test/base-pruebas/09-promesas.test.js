import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe('pruebas en 09-promesas', () => { 
    test('getHeroeByIdAsync debe de retornar un heroe', (done) => { 
        const id = 1;

        getHeroeByIdAsync(id)
            .then(hero =>{
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })
                done();
            });

     });
    //  LA FUNCION done() SE USA PARA ESPERAR LA PROMESA Y ESTA PUEDA SER COMPLETADA 
    test('getHeroeByIdAsync debe de retornar un error si un heroe no existe', (done) => { 
        const id = 100;

        getHeroeByIdAsync(id)
            // .then(hero =>{
            //     expect(hero).toBeFalsy();
            // })
            .catch(error => {
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`)
                done();
            })

     })
 })