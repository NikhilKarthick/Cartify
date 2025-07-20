import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import Login from "../pages/Login";

describe("Login Page", () => {
  const setup = (fromRegister = false) => {
    const mockOnLoginSuccess = vi.fn();

    render(
      <MemoryRouter
        initialEntries={[
          {
            pathname: "/login",
            state: fromRegister ? { fromRegister: true } : {},
          } as unknown as string,
        ]}
      >
        <Routes>
          <Route path="/login" element={<Login onLoginSuccess={mockOnLoginSuccess} />} />
          <Route path="/register" element={<div>Register Page</div>} />
          <Route path="/home" element={<div>Home Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    return {
      mockOnLoginSuccess,
    };
  };

  it("renders login form", () => {
    setup();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /sign in/i })).toBeInTheDocument();
  });

  it("shows error on invalid credentials", async () => {
    setup();

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "wrong@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "wrongpass" },
    });
    fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

    expect(await screen.findByText(/invalid email or password/i)).toBeInTheDocument();
  });

  

  it("calls onLoginSuccess with initials on confirm", async () => {
    const { mockOnLoginSuccess } = setup();

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "ab@gmail.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "ab" },
    });
    fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

    const confirmButton = await screen.findByRole("button", { name: /go to home/i });
    fireEvent.click(confirmButton);

    await waitFor(() => {
      expect(mockOnLoginSuccess).toHaveBeenCalledWith("A");
    });
  });

  it("navigates to register page", () => {
    setup();

    fireEvent.click(screen.getByRole("button", { name: /register/i }));
    expect(screen.getByText("Register Page")).toBeInTheDocument();
  });
 it("displays 'Go to Home' button on successful login", async () => {
  setup();

  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: "ab@gmail.com" },
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: "ab" },
  });
  fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

  const confirmButton = await screen.findByRole("button", { name: /go to home/i });

  expect(confirmButton).toBeInTheDocument();
});


 

});
