import React from 'react';
import styles from './button.module.scss';

const Button = ({title}: {title: string}) => {
    return (
        <div>
             <button className={styles.btn}>
                {title}
            </button>
        </div>
    );
};

export default Button;