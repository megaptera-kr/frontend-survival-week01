import { render, screen } from '@testing-library/react'
import { Greeting } from './Greeting'

describe('<Greeting />', () => {
  it('컴포넌트의 props로 입력받은 name을 화면에 출력해야 합니다.', () => {
    // Given
    render(<Greeting name="Sonny" />)

    // When, Then
    expect(screen.getByText(/Hello, Sonny!/)).toBeInTheDocument()
  })
})
