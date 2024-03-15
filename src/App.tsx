import styles from './App.module.css';
import {
  AutocompleteInputStore,
  AutocompleteInputView,
} from './components/AutocompleteInput';
import {
  TextWithButtonsStore,
  TextWithButtonsView,
} from './UI/TextWithButtons';

function App() {
  const firstStore = new TextWithButtonsStore('', undefined, [
    {
      text: 'Clear',
      onClick: () => {
        firstStore.setValue('');
      },
    },
    {
      text: 'Hello world!',
      onClick: () => {
        firstStore.setValue('Hello world!');
      },
    },
  ]);
  const secondStore = new TextWithButtonsStore(
    '',
    [
      {
        text: 'Number',
        onClick: () => {
          const number = Number(secondStore.value);
          if (!Number.isNaN(number)) {
            alert(number);
          }
        },
      },
    ],
    [
      {
        text: 'Alert',
        onClick: () => {
          alert(secondStore.value);
        },
      },
    ]
  );
  const firstAutoStore = new AutocompleteInputStore(3);
  const secondAutoStore = new AutocompleteInputStore(10);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Syntellect</h1>
      <div className={styles.block}>
        <ul className={styles.list}>
          <li className={styles.list__item}>Инпут с 2 кнопками справа;</li>
          <li className={styles.list__item}>
            При нажатии на первую кнопку очищается содерживое в инпуте;
          </li>
          <li className={styles.list__item}>
            При нажатии на вторую кнопку текст в инпуте меняется на 'Hello
            world!'.
          </li>
        </ul>
        <TextWithButtonsView store={firstStore} />
      </div>
      <div className={styles.block}>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            Инпут с 1 кнопкой справа и 1 кнопкой слева;
          </li>
          <li className={styles.list__item}>
            При нажатии на кнопку справа вызывается alert с текстом в инпуте;
          </li>
          <li className={styles.list__item}>
            При нажатии на кнопку слева проверяем, что в инпуте введено число и
            если это так, то выводим число через alert;
          </li>
        </ul>
        <TextWithButtonsView store={secondStore} />
      </div>
      <div className={styles.block}>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            Текстовый инпут, который позволяет выводить подсказки при наборе
            текста.
          </li>
          <li className={styles.list__item}>
            Максимальное кол-во подсказок - 3.
          </li>
        </ul>
        <AutocompleteInputView store={firstAutoStore} />
      </div>
      <div className={styles.block}>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            Текстовый инпут, который позволяет выводить подсказки при наборе
            текста.
          </li>
          <li className={styles.list__item}>
            Максимальное кол-во подсказок - 10.
          </li>
        </ul>
        <AutocompleteInputView store={secondAutoStore} />
      </div>
    </main>
  );
}

export default App;
