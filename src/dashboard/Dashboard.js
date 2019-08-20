// Test away

import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import renderer from 'react-test-renderer'; 
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Dashboard />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

    it("buttons text changes", () => {
        const { getByText, queryByText } = render(<Dashboard />);
        expect(queryByText(/open gate/i)).toBeFalsy();
        fireEvent.click(getByText(/close Gate/i));
        expect(queryByText(/open gate/i)).toBeTruthy();
      });

}); 