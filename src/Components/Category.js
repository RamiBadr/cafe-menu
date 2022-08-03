import React, { useContext} from 'react';
import data from '../data/data';
import context from '../storage/context';
import styles from './Category.module.css';

const Category = () => { 
  // get categories from data
  const datacCategories = new Set(data.map(item => item.category));

  // all categories array 
  const categories = ['all', ...datacCategories];

  const {category, setCategory} = useContext(context);

  const chooseCategory = (e) => {
    setCategory(e.target.textContent);
  }
 
  return (
    <div className={styles.btnContainer}>
        {categories.map((category, index) => 
          <button key={index} onClick={chooseCategory}  className={styles.filterBtn}>{category}</button>
        )}
    </div>
  )
}

export default Category