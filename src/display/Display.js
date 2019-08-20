import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect'
import Display from './Display';
import { render } from '@testing-library/react';
import { AST_True } from 'terser';

describe('<Display />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Display />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('displays if gate is open/closed and if it is locked/unlocked', () => {
      render(<Display/>)
  })

  it("displays 'Closed' if the `closed` prop is `true` ", ()=> {
      const closed = true;

      const {getByText} = render(<Display closed={closed}/>)
      const  closedText = getByText(/closed/i)

      expect(closedText).toBeTruthy()

  })

  it("displays if the `closed` prop is `false` display 'Open' ", ()=> {
    const closed = false;

    const {getByText} = render(<Display closed={closed}/>)
    const  closedText = getByText(/open/i)

    expect(closedText).toBeTruthy()

})

    it("Locked if the `locked` prop is `true` ", ()=> {
    const locked = true;

    const {getByText} = render(<Display locked={locked}/>)
    const  lockedText = getByText(/locked/i)

    expect(lockedText).toBeTruthy()

})

    it("locked prop is false", ()=> {
    const locked = false;

    const {getByText} = render(<Display locked={locked}/>)
    const  lockedText = getByText(/unlocked/i)

    expect(lockedText).toBeTruthy()

})

    it("locked display", () => {
        const locked = true;

        const {getByText} = render(<Display locked={locked}/>)
        const redClass = getByText(/locked/i)

        expect(redClass).toHaveClass('red-led')

    })

    it("closed display", () => {
        const closed = true;

        const {getByText} = render(<Display closed={closed}/>)
        const redClass = getByText(/closed/i)

        expect(redClass).toHaveClass('red-led')

    })

    it("unlocked display", () => {
        const locked = false;
        const {getByText} = render(<Display locked={locked}/>)
        const redClass = getByText(/unlocked/i)
        expect(redClass).toHaveClass('green-led')

    })

    it("open display", () => {
        const closed = false;
        const {getByText} = render(<Display closed={closed}/>)
        const redClass = getByText(/open/i)
        expect(redClass).toHaveClass('green-led')

    })

}); 