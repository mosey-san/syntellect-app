import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}
