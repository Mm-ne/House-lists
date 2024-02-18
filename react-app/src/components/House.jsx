/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from './Houses.module.css';
import currencyForamtter from '../helpers/currencyFormatter';

//When clicking on a house shows a new component(this one) from more information
function House ({house}){

    return(
        <div>
            <div className={styles.container}>
                <img src={house.img} alt="img" className={styles.img}/>
                <div className={styles.title}>
                    <h3>{house.country}</h3>
                    <h4>{house.address}</h4>
                    <span>{currencyForamtter.format(house.price)}</span>
                     <p>This house, situated in a tranquil neighborhood, beckons with its timeless 
                        charm and contemporary allure. A two-story haven, the open-concept living area 
                        boasts hardwood floors and abundant natural light, seamlessly connecting to a modern 
                        kitchen adorned with stainless steel appliances.
                     </p>
                </div>
            </div>
        
           
        </div>
    );

}

export default House; 