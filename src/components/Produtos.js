import React from 'react';

export default function Produtos(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="pequeno" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>R${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Adicionar ao carrinho</button>
      </div>
    </div>
  );
}
