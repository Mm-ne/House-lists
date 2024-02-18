/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './HousesList.module.css';
import HouseRow from './HouseRow';

function housesList({selectHouse}){
    const houses = [
        {
            id: 1,
            address: "12 Valley of Kings, Geneva",
            country: "Switzerland",
            price: 900000,
            img: "./Public/Houses/House3.avif",
        },
        {
            id: 2,
            address : "Manhatten, Road 55",
            country: "United States of America",
            price: 210000,
            img: "./Public/Houses/House2.jpg",
        },
        {
            id:3,
            address: "Novigrad, Roses Street",
            country: "Nilfgard",
            price: 50000,
            img: "./Public/Houses/House1.jpg",
        },
    ];

    return( 
        <>
            <div>
                <h5>
                    Houses currently on the market
                </h5>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Adresses</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map(h => <HouseRow key={h.id} house={h} selectHouse= {selectHouse} />)}
                </tbody>
            </table>
        </>
    );

}

export default housesList