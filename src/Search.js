import React from 'react';

import Banner from './Banner';
import SearchItem from './SearchItem';
import Pagination from './Pagination';

export default function Search() {
  return (
    <>
      <Banner />
      <section className="search-container my-2">
        <form onSubmit={(e) => { e.stopPropagation(); }}>
          <label>Ordenar por:</label>
          <select className="sort-by">
            <option>Nome</option>
          </select>

          <label htmlFor="up-sort">
            Crescente
            <i className="fas fa-sort-amount-down-alt ml-1" />
          </label>
          <input id="up-sort" type="radio" name="sort" />

          <label htmlFor="down-sort">
            Decrescente
            <i className="fas fa-sort-amount-up ml-1" />
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
