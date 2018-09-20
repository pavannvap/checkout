import React, { Component } from 'react';
import HeaderComp from '../components/common/Header';
import FooterComp from '../components/common/Footer';

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <HeaderComp />
          content
        <FooterComp />
       </div>
    );
  }
}
