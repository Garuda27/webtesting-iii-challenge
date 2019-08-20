// Test away!

import React from 'react';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Controls from './Controls';

describe('<Controls />', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Controls />);

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('toggle closed and locked states', () => {
        render(<button></button>)
    })

    it('lock disabled if the gate is open', () => {
        const closed = false;

        const { getByText } = render(<Controls closed={closed} />)
        const locked = getByText(/Lock Gate/i).closest('button')

        expect(locked).toBeDisabled()

    })

    it('invoke function if unlock or lock gate is clicked', () => {
        const mockFunc = jest.fn();
        const locked = true;
        const closed = true;

        const { getByText } = render(
            <Controls toggleLocked={mockFunc} locked={locked} closed={closed} />)

        const button = getByText(/Unlock Gate/i)
        fireEvent.click(button);

        expect(mockFunc).toHaveBeenCalled();
    })

    it('close button disabled', () => {
        const locked = true;

        const { getByText } = render(<Controls locked={locked} />)
        const closed = getByText(/close Gate/i).closest('button')

        expect(closed).toBeDisabled()

    })

}); 