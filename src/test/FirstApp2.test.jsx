import { render,screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp"

describe('pruebas en firstApp', () => { 
    const title = "hola soy un titulo";
    const subTitle = "Hola soy un nuevo subtitulo";

    test('debe de hacer match con el snapshot', () => { 

        const { container } = render(<FirstApp title={ title }  />)
        expect(container).toMatchSnapshot()

     });

     test('debe de mostrar el mensaej "Hola soy un titulo"', () => { 
        render(<FirstApp title={ title } />)
        expect(screen.getByText(title)).toBeTruthy()
      });

      test('debe de mstrar el titulo en un h1', () => { 
        render(<FirstApp title= { title } />)
        expect(screen.getByRole('heading', { level:2 }).innerHTML).toContain(title)
       })

       test('debe de mostrar el subtitulo enviado por props', () => { 
        render(<FirstApp title={ title } subTitle={ subTitle } />)
        //expect(screen.getAllByText(subTitle).length).toBe(2)
        })
 })