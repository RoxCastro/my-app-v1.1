import React, { Component } from 'react';
import HeadTabla from './HeadTabla';
import BodyTabla from './BodyTabla';
import HeadTabla1 from './HeadTabla1';
import BodyTabla1 from './BodyTabla1';

class Tabla extends Component {
  render() {
    return (
      <table className="table">
        <HeadTabla/>
        <BodyTabla/>
        <HeadTabla1/>
        <BodyTabla1/>
      </table>
    );
  }
}


export default Tabla;