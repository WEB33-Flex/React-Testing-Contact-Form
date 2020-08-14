import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import ContactForm from "../components/ContactForm";

test("ContactForm accepts user data and renders it on the page", async () => {

    render(<ContactForm />);
})