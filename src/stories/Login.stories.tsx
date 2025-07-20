import React from "react";
// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import type { Location } from "react-router-dom";
import Login from "../pages/Login";

const meta: Meta<typeof Login> = {
  title: "Pages/Login",
  component: Login,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Login>;


const mockOnLoginSuccess = (initials: string) => {
  console.log("Mock login success with initials:", initials);
};

export const Default: Story = {
  name: "Default Login Page",
  render: () => (
    <MemoryRouter initialEntries={["/login"]}>
      <Routes>
        <Route path="/login" element={<Login onLoginSuccess={mockOnLoginSuccess} />} />
      </Routes>
    </MemoryRouter>
  ),
};

export const ModalAfterRegistration: Story = {
  name: "Modal After Register Redirect",
  render: () => {
    const entry = {
      pathname: "/login",
      state: { fromRegister: true },
      key: "modal-entry",
      search: "",
      hash: "",
    } as Location;

    return (
      <MemoryRouter initialEntries={[entry]}>
        <Routes>
          <Route
            path="/login"
            element={<Login onLoginSuccess={mockOnLoginSuccess} />}
          />
        </Routes>
      </MemoryRouter>
    );
  },
};

export const WithErrorState: Story = {
  name: "Login With Invalid Credentials",
  render: () => {
    const SimulateInvalidLogin = () => {
      React.useEffect(() => {
        setTimeout(() => {
          const email = document.getElementById("email") as HTMLInputElement;
          const password = document.getElementById("password") as HTMLInputElement;
          const form = email?.closest("form");
          if (email && password && form) {
            email.value = "wrong@email.com";
            password.value = "wrongpass";
            email.dispatchEvent(new Event("input", { bubbles: true }));
            password.dispatchEvent(new Event("input", { bubbles: true }));
            form.dispatchEvent(new Event("submit", { bubbles: true }));
          }
        }, 500);
      }, []);
      return null;
    };

    return (
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login onLoginSuccess={mockOnLoginSuccess} />
                <SimulateInvalidLogin />
              </>
            }
          />
        </Routes>
      </MemoryRouter>
    );
  },
};
