import React from 'react';
import tachyons from 'tachyons';

export default function Footer() {
   
    return (
        <div className="tc fixed bg-white left-0 pa3 w-100 bottom-0">
            <small>Parrot News ©{(new Date().getFullYear())} </small>
        </div>
    )
}
