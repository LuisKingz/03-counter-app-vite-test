import { render } from "@testing-library/react"
import { FirstApp } from "../FirstApp"

describe('Pruebas en FirstApp', () =>{
    test('debe hacer match con el snapshot', () => { 

        const title = "Es un titulo";
        const { container } = render(<FirstApp title={ title }/>);
        expect(container).toMatchSnapshot()

     });

     test('Debe de mostrar el titulo en un h1', () => {         
        const title = "Es un titulo";
        const { container,getByText,getByTestId } = render(<FirstApp title={ title }/>); 
        expect(getByTestId('test-title').innerHTML).toBe(title);
        // expect( getByText(title) ).toBeTruthy();
    });

    test('Debe de mostrar el subtitulo pasado por props', () => { 
        const title = "Es un titulo";
        const subtitulo = "Es un subtitulo";
        const { getByText, } = render(<FirstApp title={ title } subTitle={ subtitulo}/>); 
        expect(getByText(subtitulo)).toBeTruthy();

     })
})