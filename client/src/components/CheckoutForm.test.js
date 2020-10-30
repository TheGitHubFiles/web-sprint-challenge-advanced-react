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

    const firstName = screen.getByLabelText(/First name/i)
    const lastName = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)

    fireEvent.change(firstName, { target: { value: 'andrew', name: 'firstName' } })
    fireEvent.change(lastName, { target: { value: 'poppenberg', name: 'lastName' } })
    fireEvent.change(address, { target: { value: '123 dumbdumb st', name: 'address' } })
    fireEvent.change(city, { target: { value: 'duluth', name: 'city' } })
    fireEvent.change(state, { target: { value: 'MN', name: 'state' } })
    fireEvent.change(zip, { target: { value: '55803', name: 'zip' } })

    expect(firstName).toHaveValue('andrew')
    expect(lastName).toHaveValue('poppenberg')
    expect(address).toHaveValue('123 dumbdumb st')
    expect(city).toHaveValue('duluth')
    expect(state).toHaveValue('MN')
    expect(zip).toHaveValue('55803')

    const submitter = screen.getByRole('button')
    fireEvent.click(submitter)

    const newFirstName = await screen.findByText(/andrew/i)
    expect(newFirstName).toBeTruthy()
    const newLastName = await screen.findByText(/poppenberg/i)
    expect(newLastName).toBeTruthy()
    const newAddress = await screen.findByText(/andrewpoppenberg@yahoo.com/i)
    expect(newAddress).toBeTruthy()
    const newCity = await screen.findByText(/duluth/i)
    expect(newCity).toBeTruthy()
    const newState = await screen.findByText(/mn/i)
    expect(newState).toBeTruthy()
    const newZip = await screen.findByText(/55803/i)
    expect(newZip).toBeTruthy()

    const message = await screen.findByText(/You have ordered some plants! Woo-hoo!/)
    expect(message).toBeTruthy()




});
