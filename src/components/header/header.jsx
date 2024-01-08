import classNames from 'classnames';
import styles from './header.module.scss';

import { useEffect, useState } from 'react';
import image from '../../assets/header.jpg';

export const Header = ({ setSearch }) => {
  const [isTyping, setIsTyping] = useState(false);
  const [searchedValue, setSearchedValue] = useState('');

  const handleSearch = (e) => {
    setIsTyping(true);
    setSearchedValue(e.target.value);
  };

  useEffect(() => {
    const getData = setTimeout(() => {
      if (isTyping) setSearch(searchedValue);
      setIsTyping(false);
    }, 500);

    return () => clearTimeout(getData);
  }, [isTyping, setSearch, searchedValue]);

  return (
    <header className={styles.header} id={'header'}>
      <div className={classNames('container', styles.container)}>
        <h1 className={styles.title}>
          <span>Белорусский Государственный Университет</span>
          <span>Информатики и Радиоэлектроники</span>
        </h1>
        <img className={styles.image} src={image} alt='' />
        <p>
          БГУИР - это большая и дружная семья - более 16 тысяч талантливых
          <span>студентов, свыше 900 преподавателей</span> и тысячи успешных выпускников, занимающих
          высокие должности.
        </p>
        <input
          placeholder='Поиск'
          className={styles.search}
          type='search'
          onChange={handleSearch}
        />
      </div>
    </header>
  );
};
