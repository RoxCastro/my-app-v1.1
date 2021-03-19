import React, { Component } from 'react';
import HeadTabla from './HeadTabla';
import BodyTabla from './BodyTabla';
import BodyTabla1 from './BodyTabla1';
import BodyTabla2 from './BodyTabla2';

class Tabla extends Component {
  render() {
    return (
           <table className="table">
        <HeadTabla/>
        <BodyTabla/>
        <ul></ul>
        <BodyTabla1/>
        <ul></ul>
        <BodyTabla2/>
      </table>
    );
      }
}




export default Tabla;