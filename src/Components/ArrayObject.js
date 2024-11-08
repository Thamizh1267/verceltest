import React from 'react'

const Array = ['Apple', 'Banana', 'Orange', 'Mango'];
const object = {};

function ArrayObject(props) {
      Array.forEach((element, index) => {
        object[index] = element;
    });

    console.log(object);
    return (
        <div>
            <h1>Array Of Object {Array.element}</h1>

        </div>
    )
}

export default ArrayObject;
