import { render, screen } from "@testing-library/react";
import { CounterApp } from "../CounterApp";

describe("Pruebas en CounterApp", () => {
  const value = 100;

  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp number={value} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el valor inicial de 100", () => {
    render(<CounterApp number={value} />);
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      value
    );
  });
});
