import React from 'react';

export default function Basket(props) {
  const { cartItems: precoCarrinho, onAdd: adicionarItem, onRemove: removerItem } = props;
  const precoItens = precoCarrinho.reduce((a, c) => a + c.qty * c.price, 0);
  const taxaEntrega = precoItens > 2000 ? 0 : 20;
  const valorTotal = precoItens + taxaEntrega;
  return (
    <aside className="block col-1">
      <h2>Meu carrinho</h2>
      <div>
        {precoCarrinho.length === 0 && <div>Seu carrinho está vazio.</div>}
        {precoCarrinho.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => removerItem(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => adicionarItem(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qtd} x R${precoItens.toFixed(2)}
            </div>
          </div>
        ))}

        {precoCarrinho.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Preço dos itens:</div>
              <div className="col-1 text-right">R${precoItens.toFixed(2)}</div>
            </div>
 
            <div className="row">
              <div className="col-2">Taxa de entrega:</div>
              <div className="col-1 text-right">
                R${taxaEntrega.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Preço total:</strong>
              </div>
              <div className="col-1 text-right">
                <strong>R${valorTotal.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Finalizado!')}>
               <b> Finalizar compra! </b>
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
