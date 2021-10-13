import Button from './Button'
import { render, screen } from '@testing-library/react';


describe('Button.js', () => {
    test('deve renderizar o botão sem erros', () => {
        render(<Button text='Entrar' onChange={() => {}} />)
        expect(screen.getByText('Entrar')).toBeInTheDocument()
    })
})


