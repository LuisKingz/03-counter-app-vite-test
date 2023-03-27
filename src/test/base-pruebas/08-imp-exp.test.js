import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe retornar el heroe buscado por ID', () => { 
        const id = 1;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual({id: 1,name: 'Batman', owner: 'DC'}
        )
     });

     test('getHeroeById debe de retornar indefined si no se encuntra el heroe', () => { 
        const id = 500;
        const heroe = getHeroeById(id);
        // expect(heroe).toBe(undefined);

        // VERIFICAR NULL, UNDEFINED, FALSE
        expect(heroe).toBeFalsy();
     });

     test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => { 

        const owner = "DC";

        const heroes = getHeroesByOwner(owner);
        expect(heroes).toHaveLength(3)
        expect(heroes).toEqual( heroes.filter( (heroe) => heroe.owner === owner ))

      })
     test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => { 

        const owner = "Marvel";

        const heroes = getHeroesByOwner(owner);
        expect(heroes).toHaveLength(2)
        expect(heroes).toEqual( heroes.filter( (heroe) => heroe.owner === owner ))

      })
 })