import React, { Component } from 'react';
import ListText from './ListText';
import ImageNike from '../../../Image/nike.jpg'


class BoxList extends Component {
    render() {
        return (
            <div>
                <ul className="text-center mx-auto my-3 p-0">
                    <ListText text = 'Envíos a todo el país' />
                    <ListText text = 'Indumentaria y calzado' />
                    <ListText text = 'Accesorios' />
                </ul>
                <div class="container">
                    <img className="w-100 my-4" src= {ImageNike } alt="Img zapatillas nike" />
                </div>
            </div>

        );
    };
};

export default BoxList;

