import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx'; 
import styles from './styles.module.css';

const HeaderComponent = () => {
  return (
    <div className={clsx(styles.container, 'dark-mode')}>
      <h1 className={styles.title}>
        <span className={styles.gradientText}>Damian_Dev_Web</span> Cursos y Guías para todxs
      </h1>
      <h2 className={styles.subtitle}>Encuentra todas las guías de los cursos que dicto en un solo lugar</h2>
      <Link
        className={styles.button}
        to="/docs/intro">
        Ingresar a las guías
      </Link>
    </div>
  );
};

export default HeaderComponent;