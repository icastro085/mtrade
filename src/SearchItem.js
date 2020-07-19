import React from 'react';

export default function SearchItem() {
  return (
    <div className="col-3 mb-5">
      <div className="search-item">
        <div className="image">
          {/* <i className="far fa-image" /> */}
          <img alt="produto" src="https://babyshoponline.vteximg.com.br/arquivos/ids/335842-200-200/https---s3-sa-east-1.amazonaws.com-softvar-BabyShop-63325-img_original-151128000-028___vermelho___sapatilha_infantil_klin_princesa_kids_vermelho1.jpg?v=637287831107270000" />
        </div>
        <div className="details">
          <span className="title">
            Product Name Product Name Product Name
          </span>

          <span className="price old mt-3">R$ 13,00</span>
          <span className="price mt-3">R$ 13,00</span>
        </div>

        <a className="buy-button" href="/#/product/buy">
          COMPRAR
          <i className="fas fa-shopping-cart ml-3" />
        </a>
      </div>
    </div>
  );
}
