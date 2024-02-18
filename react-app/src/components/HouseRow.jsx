/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import currencyForamtter from "../helpers/currencyFormatter";
import styles from './HouseRow.module.css';

function HouseRow ({house, selectHouse}){

    return(
        <tr onClick={()=> selectHouse(house)} className={styles.tr_HR}>
            <td className={styles.address}>{house.address}</td>
            <td className={styles.country}>{house.country}</td>
            <td className={styles.price}>{currencyForamtter.format(house.price)}</td>
        </tr>
    );

}

export default HouseRow;