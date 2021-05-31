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
        const { getByTestId } = render(<TodoList />);
        //find button
        const fieldNode = await waitFor(() => getByTestId('form-field') as HTMLInputElement);

        //Type in input
        fireEvent.change(fieldNode, { target: { value: 'testing' } });

        expect(fieldNode.value).toEqual('testing');
    })
})