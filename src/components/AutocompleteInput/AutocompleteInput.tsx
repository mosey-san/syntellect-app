import { observer } from 'mobx-react-lite';
import { TextInputView } from '../../UI/TextInput';
import { AutocompleteInputModel } from './AutocompleteInput.store';
import styles from './AutocompleteInput.module.css';

interface AutocompleteInputProps {
  store: AutocompleteInputModel;
}

export const AutocompleteInputView = observer(
  ({ store }: AutocompleteInputProps) => {
    return (
      <div className={styles.wrapper}>
        <TextInputView store={store.textInput} />
        {(store.suggestions.length > 0 || store.isLoading) && (
          <ul className={styles.suggestions}>
            {store.isLoading && (
              <div className={styles.loading}>Загрузка...</div>
            )}
            {store.suggestions.map((country, index) => (
              <li
                key={index}
                className={styles.suggestion}
                onClick={() => store.selectCountry(country)}
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className={styles.flag}
                />
                <span className={styles.name}>{country.name}</span>
                <span className={styles.fullName}>{country.fullName}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);
