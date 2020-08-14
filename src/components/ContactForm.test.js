import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import ContactForm from "../components/ContactForm";

test("ContactForm accepts user data and renders it on the page", async () => {
  render(<ContactForm />);

  const firstNameInput = screen.getByLabelText(/first name*/i);
  const lastNameInput = screen.getByLabelText(/last name*/i);
  const emailInput = screen.getByLabelText(/email*/i);
  const messageInput = screen.getByLabelText(/message/i);

  fireEvent.change(firstNameInput, { target: { value: "Jose" } });
  fireEvent.change(lastNameInput, { target: { value: "Robles" } });
  fireEvent.change(emailInput, { target: { value: "jose@email.com" } });
  fireEvent.change(messageInput, { target: { value: "Hello World!" } });

  const submitBtn = screen.getByRole("button", { type: /submit/i });

  await act(async () => {
    fireEvent.click(submitBtn);
  });
});
