import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const products = [
    {
      id: 1,
      card__checkbox: 'fua-gra',
      card__slogan: 'Сказочное заморское яство',
      card__caption: 'Нямушка',
      card__subtitle: 'с фуа-гра',
      card__numberOfservings: 10,
      card__gift: 'мышь в подарок',
      card__approval: '',
      card__volumeAmount: '0,5',
      card__volumeMetrics: 'кг',
      card__please_selected: 'Печень утки разварная с артишоками.',
      holder__itemBackImage: './img/cat.png',

    },
    {
      id: 2,
      card__checkbox: 'fish',
      card__slogan: 'Сказочное заморское яство',
      card__caption: 'Нямушка',
      card__subtitle: 'с рыбой',
      card__numberOfservings: 40,
      card__gift: '2 мыши в подарок',
      card__approval: '',
      card__volumeAmount: '2',
      card__volumeMetrics: 'кг',
      card__please_selected: 'Головы щучьи с чесноком да свежая сёмгушка.',
      holder__itemBackImage: './img/cat.png',
    },
    {
      id: 3,
      card__checkbox: 'chicken',
      card__slogan: 'Сказочное заморское яство',
      card__caption: 'Нямушка',
      card__subtitle: 'с курой',
      card__numberOfservings: 100,
      card__gift: '5 мышей в подарок',
      card__approval: 'заказчик доволен',
      card__volumeAmount: '5',
      card__volumeMetrics: 'кг',
      card__please_selected: 'Филе из цыплят с трюфелями в бульоне.',
      holder__itemBackImage: './img/cat.png',
    },
];

class ProductList extends Component {
  render() {
    console.log(products);
    const productComponents = products.map((product) => (
       <Product 
            key = {'product-' + product.id}
            id = {product.id}
            card__checkbox = {product.card__checkbox}
            card__slogan = {product.card__slogan}
            card__caption = {product.card__caption}
            card__subtitle = {product.card__subtitle}
            card__numberOfservings = {product.card__numberOfservings}
            card__gift = {product.card__gift}
            card__approval = {product.card__approval}
            card__volumeAmount = {product.card__volumeAmount}
            card__volumeMetrics = {product.card__volumeMetrics}
            card__please_selected = {product.card__please_selected}
            holder__itemBackImage = {product.holder__itemBackImage}
        />
   ));
   return ( 
      <div className="page__foreground">
        <main className="holder page__body">
          <h1 className="page__title">Ты сегодня покормил кота?</h1>
        
          <ul className="holder-list row">
            {productComponents}
          </ul> 
        </main>
      </div>
    );
  }
}



class Product extends Component {
  render() {
    return(
    <div className={"holder-list__item " + (this.props.id === 1 ? 'col-md-4 col-sm-12 col-xs-12' : 'col-md-4 col-sm-6 col-xs-12')}>
       <input id={this.props.card__checkbox} type="checkbox" name="first" hidden />
          <label className="card__checkbox" htmlFor={this.props.card__checkbox}>
            <li className="holder__item card">
                <span className="card__slogan">{this.props.card__slogan}</span>
                <span className="card__slogan_selectedHover">Котэ не одобряет?</span>
                <h2 className="card__caption">{this.props.card__caption}</h2>
                <h3 className="card__subtitle">{this.props.card__subtitle}</h3>
                <span className="card__numberOfservings"><strong >{this.props.card__numberOfservings}</strong> порций</span> 
                <span className="card__gift">{this.props.card__gift}</span>
                <span className="card__approval">{this.props.card__approval}</span>
                <div className="card__volume">
                <div className="wrap">
                  <strong className="card__volumeAmount">{this.props.card__volumeAmount}</strong>
                  <span className="card__volumeMetrics">{this.props.card__volumeMetrics}</span>
                </div>
                </div>
                <span className="card__please">Чего сидишь? Порадуй котэ, <a className="card__link" href="#">купи.</a></span>
                <span className="card__please_selected">{this.props.card__please_selected}</span>
                <div className="card__corner-decoration"></div>
            </li>
          </label>
    </div>
    )
  }
}

export default ProductList;
