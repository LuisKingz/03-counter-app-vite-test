import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../CounterApp";

describe("Pruebas en CounterApp", () => {
  const value = 100;

  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp number={value} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el valor inicial de 100", () => {
    render(<CounterApp number={value} />);
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(
      "100"
    );
    // expect(screen.getByText(value)).toBeTruthy();
  });

  test('debe de incrementar con el boton +1',() =>{
    render(<CounterApp number={value} />)
    fireEvent.click( screen.getByText('+1'))
    expect(screen.getByText('101')).toBeTruthy();
  });

  test('debe decrementar con el boton -1', ()=>{
    render(<CounterApp number={value}/>);
    fireEvent.click( screen.getByText('-1'));
    // screen.debug();
    expect( screen.getByText('99')).toBeTruthy();
  });

  test('debe de funcionar el boton de reset',()=>{
    render(<CounterApp number={value}/>);
    fireEvent.click( screen.getByText('+1'));
    fireEvent.click( screen.getByText('+1'));
    fireEvent.click( screen.getByText('+1'));
    // fireEvent.click( screen.getByText('reset'));
    fireEvent.click(screen.getByRole('button',{ name:'btn-reset'}));
    // screen.debug()
    expect( screen.getByText('100')).toBeTruthy();
    // expect( screen.getByText('100')).toBeTruthy();

  })
});
