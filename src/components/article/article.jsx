import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useEffect, useRef, useState } from 'react';
import styles from './article.module.scss';

library.add(faArrowRight);

export const modifyText = (title, search) => {
  const regexp = new RegExp(`${search}`, 'gi');
  const searchWords = title.match(regexp);
  let key = 0;

  return title.split(regexp).map((word, idx) => {
    key += 1;

    return (
      <Fragment key={key}>
        {word}
        {searchWords?.[idx] && <span>{searchWords[idx]}</span>}
      </Fragment>
    );
  });
};

export const Article = ({ data, search }) => {
  const { title, text, src, date } = data;

  const modifyedTitle = modifyText(title, search);
  const modifyedText = modifyText(text, search);

  const imgRef = useRef();
  const [height, setHeight] = useState();

  useEffect(() => {
    const changeImgHeight = () => {
      if (imgRef.current) setHeight(getComputedStyle(imgRef.current.nextSibling).height);
    };

    window.addEventListener('resize', changeImgHeight);
    changeImgHeight();

    return () => {
      window.removeEventListener('resize', changeImgHeight);
    };
  }, [setHeight]);

  if (search && modifyedTitle.length < 2 && modifyedText.length < 2) return null;


  return (
    <article className={styles.article}>
      <img style={{ height }} ref={imgRef} className={styles.img} src={src} alt={title} />
      <div className={styles.text}>
        <h2>{modifyedTitle}</h2>
        <p>{modifyedText}</p>
        <div className={styles.info}>
          <span className={styles.date}>{date}</span>
          <button className={styles.btn} type='button'>
            Подробнее
            <FontAwesomeIcon className={styles.icon} icon='fa-solid fa-arrow-right' size='1x' />
          </button>
        </div>
      </div>
    </article>
  );
};
