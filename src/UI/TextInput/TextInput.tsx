import { observer } from 'mobx-react-lite';
import styles from './TextInput.module.css';
import { TextInputStore } from './TextInput.store';

type TextInputProps = {
  store: TextInputStore;
};

export const TextInputView = observer(({ store }: TextInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.setValue(e.target.value);
    store.onChange && store.onChange(e.target.value);
  };

  return (
    <input
      type='text'
      className={styles.input}
      value={store.value}
      onChange={handleChange}
      disabled={store.disabled}
      placeholder={store.placeholder}
      onFocus={store.onFocus}
      onBlur={store.onBlur}
    />
  );
});
