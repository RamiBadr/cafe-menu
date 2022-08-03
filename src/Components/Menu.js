import React, { useContext, useEffect } from 'react';
import styles from './Menu.module.css';
import data from '../data/data';
import context from '../storage/context';

const Menu = () => {
  const {filteredItems, setFilteredItems, category} = useContext(context);

  useEffect(() => {
    if (category === 'all') {
      setFilteredItems(data);
    } else {
      setFilteredItems(data.filter((item) => item.category === category));
    }
  }, [category]);

  return (
        <div className={styles.menu}>
        {filteredItems.map(item => {
          
          const {id, title, category, price, img, desc} = item;
      
          return (
            <article key={id} className={styles.menuItem}>
              <img src={img} alt={title} className={styles.photo}/>
              <div className={styles.itemInfo}>
                <header>
                  <h4>{title}</h4>
                  <h4 className={styles.price}>{price} EGP</h4>
                </header>
                <p className={styles.itemText}>{desc}</p>
              </div>
            </article>
          )
        })}
        </div>
  )
}

export default Menu