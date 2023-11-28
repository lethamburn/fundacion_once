/**
 * @vitest-environment jsdom
 */
import { describe, expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App", () => {
  test("App renderiza una etiqueta header", () => {
    render(<App />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
  test("El h2 'result' debe renderizar el texto del input", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Type your name!");
    userEvent.type(input, "Antonio");
    waitFor(() => expect(screen.queryByText('Antonio')).toBeInTheDocument())
  });
});
