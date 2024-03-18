# Тестовое задание

Результат [gh-pages](https://mosey-san.github.io/syntellect-app/)

Необходимо разработать два компонента-инпута.

## инпут с кнопками
Текстовый инпут, который позволяет настраивать и выводить разное кол-во кнопок слева и справа от самого инпута. Для кнопок должна быть возможность настроить `текст` и `колбек функцию`, которая вызывается при нажатии на кнопку.

В основном компоненте приложения нужно сделать два инпута для тестирования:

```
инпут с 2 кнопками справа;
При нажатии на первую кнопку очищается содерживое в инпуте;
При нажатии на вторую кнопку текст в инпуте меняется на 'Hello world!';
```
```
инпут с 1 кнопкой справа и 1 кнопкой слева;
При нажатии на кнопку справа вызывается alert с текстом в инпуте;
При нажатии на кнопку слева проверяем, что в инпуте введено число и если это так, то выводим число через alert;
```
	
## инпут-автокомплит

Текстовый инпут, который позволяет выводить подсказки при наборе текста. Подсказки выводятся под инпутом в виде выпадающего списка. В подсказках должно выводиться `наименование`, `полное наименование` и `флаг`. При выборе подсказки, значение из неё проставляется в инпут.

Для получения подсказок в тестовом проекте есть асинхронная функция имитирующая API - `apiService/getCountryByName`. Подсказки могут дублироваться и ответ от api сервиса может быть разным - это нужно учитывать.

инпут должен иметь настройку максимального кол-ва выводимых подсказок.

В основном компоненте приложения нужно сделать два инпута для тестирования:
```
Максимальное кол-во подсказок - 3
```
```
Максимальное кол-во подсказок - 10
```

## Требования:
- использовать минимум сторонних библиотек и зависимостей
- использовать [MobX](https://mobx.js.org/)
- использовать MVVM подход при реализации инпутов
- переиспользовать общие части инпутов, если такие будут
- стилизацией можно не заморачиваться, но если все будет сделано красиво - это только плюс
