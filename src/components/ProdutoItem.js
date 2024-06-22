import React from 'react';

function produtoItem({ produto }) {
    const valor = produto.valor ? produto.valor.toFixed(2) : '';
    return (
        <tr>
            <td>{produto.nome}</td>
            <td>{valor}</td>
        </tr>
    );
}

export default produtoItem;