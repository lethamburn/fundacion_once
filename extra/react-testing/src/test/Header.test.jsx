/**
 * @vitest-environment jsdom
 */
import { describe, expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../components/Header";

describe("Header", () => {
  test("Header debe renderizar una etiqueta heading", () => {
    render(<Header />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
  test("La etiqueta h1 debe de tener el texto correcto", () => {
    render(<Header />);
    expect(screen.getByRole("heading")).toHaveTextContent("Marvel Comics");
  });
  test("La etiqueta img tiene que tener el src correcto", () => {
    render(<Header />);
    expect(screen.getByTestId("logo")).toHaveAttribute(
      "src",
      "https://i.etsystatic.com/26948191/r/il/ebadd6/2894653982/il_fullxfull.2894653982_8psv.jpg"
    );
  });
  test("La etiqueta img tiene que tener el alt correcto", () => {
    render(<Header />);
    expect(screen.getByTestId("logo")).toHaveAttribute("alt", "Marvel logo");
  });
});
