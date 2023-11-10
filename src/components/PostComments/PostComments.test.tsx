import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adiconar 2 comentários na lista', () => {
        render(<PostComment />)

        // Adiciona comentário 1
        fireEvent.change(screen.getByTestId('textArea-comentario'), {
            target:
            { value: 'Muito legal' }})
        fireEvent.click(screen.getByTestId('btn-adicionar-comentario'))        
        
        // adiciona comentário 2
        fireEvent.change(screen.getByTestId('textArea-comentario'),
            {target:
            { value: 'Sensacional' }})
        fireEvent.click(screen.getByTestId('btn-adicionar-comentario'))
        
        // Verifica se há 2 itens na lista
        expect(screen.getAllByTestId('li-comentario')).toHaveLength(2)
    })



});