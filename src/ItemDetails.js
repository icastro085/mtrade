import React, { useEffect } from 'react';

export default function ItemDetails() {
  useEffect(() => {
    console.log(123);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="item-details-container">
      <div className="row">
        <div className="col-6">
          <div className="image">
            <img alt="produto" src="https://babyshoponline.vteximg.com.br/arquivos/ids/335842-200-200/https---s3-sa-east-1.amazonaws.com-softvar-BabyShop-63325-img_original-151128000-028___vermelho___sapatilha_infantil_klin_princesa_kids_vermelho1.jpg?v=637287831107270000" />
          </div>
        </div>

        <div className="col-6 details-container">
          <div className="details">
            <span className="title mb-5">
              Product Name Product Name Product Name
            </span>

            <span className="price old mt-3">R$ 13,00</span>
            <span className="price mt-3">R$ 13,00</span>
          </div>

          <a className="buy-button" href="/#/">
            COMPRAR
            <i className="fas fa-shopping-cart ml-3" />
          </a>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-6">
          <label>Descrição:</label>
          <p className="text-justify color-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse malesuada a nulla vel ullamcorper.
            Phasellus vitae hendrerit mauris.
            Sed varius leo eget dui finibus pulvinar.
            Morbi feugiat finibus dolor vitae vehicula.
            Nullam mauris magna, efficitur vitae hendrerit auctor, semper ac leo.
            Fusce quis dui odio. Sed sollicitudin, nisl ut facilisis malesuada,
            justo tortor efficitur purus, non auctor arcu ligula at arcu.
            Pellentesque est urna, consequat quis vestibulum vitae, varius et sem.
            Quisque iaculis purus vitae dui dictum, quis condimentum ex luctus.
            Quisque vitae magna blandit nisi ullamcorper rutrum.
            Suspendisse malesuada lorem id sapien aliquet, ut tincidunt nulla ultricies.
            Pellentesque elementum id ante blandit ornare.
            Vivamus pharetra, mauris a vehicula suscipit,
            leo augue luctus dui, eget elementum nisi enim sed augue.
            Donec maximus orci a laoreet bibendum. Sed ultricies viverra mi non varius.
          </p>
        </div>

        <div className="col-6">
          <label>Informações adicionais:</label>
          <table>
            <tbody>
              <tr>
                <td className="text-right col-4">Marca:</td>
                <td className="col-9">Dalet</td>
              </tr>

              <tr>
                <td className="text-right">Modelo:</td>
                <td>Vestido</td>
              </tr>

              <tr>
                <td className="text-right">Gênero:</td>
                <td>Feminino</td>
              </tr>

              <tr>
                <td className="text-right">Tipo de comprimento:</td>
                <td>Médio</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
