import { Button } from '../Button';
import { TextInputView } from '../TextInput';
import styles from './TextWithButtons.module.css';
import { TextWithButtonsStore } from './TextWithButtons.store';

interface TextWithButtonsProps {
  store: TextWithButtonsStore;
}

export const TextWithButtonsView = ({ store }: TextWithButtonsProps) => {
  return (
    <fieldset className={styles.textWithButtons}>
      {store.leftButtons.length > 0 && (
        <div className={styles.leftButtons}>
          {store.leftButtons.map((button, i) => (
            <Button key={button.text + i} {...button} />
          ))}
        </div>
      )}
      <TextInputView store={store.textInput} />
      {store.rightButtons.length > 0 && (
        <div className={styles.rightButtons}>
          {store.rightButtons.map((button, i) => (
            <Button key={button.text + i} {...button} />
          ))}
        </div>
      )}
    </fieldset>
  );
};
