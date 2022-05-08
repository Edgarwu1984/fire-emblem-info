import React, { FC } from 'react';
import styles from './Section_title.module.scss';

type SectionTitleProps = {
  text: string;
};

const SectionTitle: FC<SectionTitleProps> = ({ text = 'Section Title' }) => {
  return <h2 className={styles.section_title}>{text}</h2>;
};

export default SectionTitle;
