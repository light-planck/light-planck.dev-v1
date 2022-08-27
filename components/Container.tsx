import styles from '../styles/container.module.css';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  large?: boolean;
}

const Container = ({ children, large = false }: Props) => {
  return (
    <div className={large ? styles.large : styles.default}>{children}</div>
  );
};

export default Container;
