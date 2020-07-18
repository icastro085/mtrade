import React from 'react';

import Banner from './Banner';
import SearchItem from './SearchItem';
import Pagination from './Pagination';

export default function Search() {
  return (
    <>
      <Banner />
      <section className="search-container">
        <form>
          <label>Ordenar por:</label>
          <select className="sort-by">
            <option>Nome</option>
          </select>

          <label htmlFor="up-sort">
            Crescente
            <i className="fas fa-sort-amount-down-alt ml-2" />
          </label>
          <input id="up-sort" type="radio" name="sort" />

          <label htmlFor="down-sort">
            Decrescente
            <i className="fas fa-sort-amount-up ml-2" />
          </label>
          <input id="down-sort" type="radio" name="sort" />
        </form>
      </section>

      <div className="row mb-5">
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />

        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
      </div>

      <Pagination />

      <br className="clear-both" />
    </>
  );
}
