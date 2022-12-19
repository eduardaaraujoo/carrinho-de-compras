import React from 'react';
import Produtos from './Produtos';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Produtos</h2>
      <div className="row">
        {products.map((product) => (
          <Produtos key={product.id} product={product} onAdd={onAdd}></Produtos>
        ))}
      </div>
    </main>
  );
}
