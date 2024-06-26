import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
  it('should have Docs text', () => {
    render(<Home />) // ARRANGE

    const myElem = screen.getByText('Docs') // ACT

    expect(myElem).toBeInTheDocument() // ASSERT
  })
})