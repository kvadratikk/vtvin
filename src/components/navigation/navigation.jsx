import classNames from 'classnames';
import styles from './navigation.module.scss';

export const Navigation = () => (
  <nav className={styles.nav}>
    <ul className={classNames('container', styles.list)}>
      <a href='#header'>В начало</a>
      <a href='#articles'>К статьям</a>
      <a href='#end'>В конец</a>
    </ul>
  </nav>
);
