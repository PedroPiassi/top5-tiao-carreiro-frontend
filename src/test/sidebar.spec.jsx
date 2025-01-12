import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { loadAuth } from "../redux/slices/authSlice";
import { MemoryRouter } from "react-router-dom";
import SideBar from "../components/menus/sideBar";
import "@testing-library/jest-dom";

// Simulando localStorage para os testes
beforeAll(() => {
  localStorage.setItem("user", JSON.stringify({ role: "admin" }));
});

describe("SideBar", () => {
  it("should render sidebar", () => {
    store.dispatch(loadAuth());

    render(
      <Provider store={store}>
        <MemoryRouter>
          <SideBar />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Pendentes")).toBeInTheDocument();
    expect(screen.getByText("Aprovadas")).toBeInTheDocument();
    expect(screen.getByText("Reprovadas")).toBeInTheDocument();
  });
});
