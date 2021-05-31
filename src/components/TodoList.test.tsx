import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { TodoList } from './TodoList';

// test('renders learn react link', () => {
//     render(<TodoList />);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });

describe('TodoList', () => {
    it('Should add new task when form has been submitted', async () => {
        //render component
        const { getByTestId, getByText } = render(<TodoList />);
        //find button
        const fieldNode = await waitFor(() => getByTestId('form-field') as HTMLInputElement);

        //value to mock new task
        const newTask = 'testing';

        //Type in input
        fireEvent.change(fieldNode, { target: { value: newTask } });

        expect(fieldNode.value).toEqual(newTask);

        //find button
        const btnNode = await waitFor(() => getByTestId('form-btn') as HTMLButtonElement);

        //click in button
        fireEvent.click(btnNode);

        // //find table
        // const tableNode = await waitFor(() => getByTestId('table'));

        // console.log('table', tableNode.innerHTML)

        const tdNode = await waitFor(() => getByText(newTask));

        expect(tdNode).toBeDefined();
    })
})