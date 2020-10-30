import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.queryByText(/Checkout Form/i)
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/First name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)

    fireEvent.change(firstNameInput, { target: { value: 'andrew' } })
    fireEvent.change(lastNameInput, { target: { value: 'poppenberg' } })
    fireEvent.change(addressInput, { target: { value: '123 dumbdumb st' } })
    fireEvent.change(cityInput, { target: { value: 'duluth' } })
    fireEvent.change(stateInput, { target: { value: 'MN' } })
    fireEvent.change(zipInput, { target: { value: '55803' } })

    expect(firstNameInput).toHaveValue('andrew')
    expect(lastNameInput).toHaveValue('poppenberg')
    expect(addressInput).toHaveValue('123 dumbdumb st')
    expect(cityInput).toHaveValue('duluth')
    expect(stateInput).toHaveValue('MN')
    expect(zipInput).toHaveValue('55803')

    const submitter = screen.getByRole('button')
    fireEvent.click(submitter);

    const newFirstName = await screen.findAllByText(/andrew/i)
    expect(newFirstName).toBeTruthy()
    const newLastName = await screen.findAllByText(/poppenberg/i)
    expect(newLastName).toBeTruthy()
    const newAddress = await screen.findAllByText(/123 dumbdumb st/i)
    expect(newAddress).toBeTruthy()
    const newCity = await screen.findAllByText(/duluth/i)
    expect(newCity).toBeTruthy()
    const newState = await screen.findAllByText(/mn/i)
    expect(newState).toBeTruthy()
    const newZip = await screen.findAllByText(/55803/i)
    expect(newZip).toBeTruthy()

    const message = await screen.findAllByText(/You have ordered some plants! Woo-hoo!/)
    expect(message).toBeTruthy();




});
