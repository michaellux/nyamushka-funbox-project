import React, { Component } from 'react';
import logo from './logo.svg';
import './reset.css'
import './App.css';

class ProductList extends Component {
  render() {
    return (
   <div className="page__foreground">
      <main className="holder page__body">
        <h1 className="page__title">Ты сегодня покормил кота?</h1>
        
        <ul className="holder__list">
          <input id="fua-gra" type="checkbox" name="first" hidden />
          <label for="fua-gra">
            <li className="holder__item card">
                <span className="card__slogan">Сказочное заморское яство</span>
                <span className="card__slogan_selectedHover">Котэ не одобряет?</span>
                <h2 className="card__caption">Нямушка</h2>
                <h3 className="card__subtitle">c фуа-гра</h3>
                <span className="card__numberOfservings"><strong >10</strong> порций</span> 
                <span className="card__gift">мышь в подарок</span>
                <div className="card__volume">
                <div className="wrap">
                  <strong className="card__volumeAmount">0,5</strong>
                  <span className="card__volumeMetrics">кг</span>
                </div>
                </div>
                <span className="card__please">Чего сидишь? Порадуй котэ, <a className="link" href="#">купи.</a></span>
                <span className="card__please_selected">Печень утки разварная с артишоками.</span>
              </li>
            </label>
            <input id="fish" type="checkbox" name="second" hidden />
            <label for="fish">
          <li className="holder__item card">
              <span className="card__slogan">Сказочное заморское яство</span>
              <span className="card__slogan_selectedHover">Котэ не одобряет?</span>
              <h2 className="card__caption">Нямушка</h2>
              <h3 className="card__subtitle">c рыбой</h3>
              <span className="card__numberOfservings"><strong>40</strong> порций</span>
              <span className="card__gift"><strong>2</strong> мыши в подарок</span>
              <div className="card__volume">
                <div className="wrap">
                  <strong className="card__volumeAmount">2</strong>
                  <span className="card__volumeMetrics">кг</span>
                </div>
              </div>
              <span className="card__please">Чего сидишь? Порадуй котэ, <a className="link" href="#">купи.</a></span>
              <span className="card__please_selected">Головы щучьи с чесноком да свежая сёмгушка.</span>
          </li>
          </label>
          <input id="chicken" type="checkbox" name="third" hidden />
          <label for="chicken">
          <li className="holder__item card">
              <span className="card__slogan">Сказочное заморское яство</span>
              <span className="card__slogan_selectedHover">Котэ не одобряет?</span>
              <h2 className="card__caption">Нямушка</h2>
              <h3 className="card__subtitle">c курой</h3>
              <span className="card__numberOfservings"><strong>100</strong> порций</span>  
              <span className="card__gift"><strong>5</strong> мышей в подарок</span>
              <span className="card__approval">заказчик доволен</span>
              <div className="card__volume">
                <div className="wrap">
                  <strong className="card__volumeAmount">5</strong>
                  <span className="card__volumeMetrics">кг</span>
                </div>
              </div>
              <span className="card__please">Чего сидишь? Порадуй котэ, <a className="link" href="#">купи.</a></span>
              <span className="card__please_selected">Филе из цыплят с трюфелями в бульоне.</span>
          </li>
          </label>
        </ul> 
      </main>
    </div>
    );
  }
}



export default ProductList;
