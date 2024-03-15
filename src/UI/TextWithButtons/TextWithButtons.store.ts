import { makeAutoObservable } from 'mobx';
import { ButtonProps } from '../Button';
import { TextInputModel, TextInputStore } from '../TextInput';

export interface TextWithButtonsModel {
  textInput: TextInputModel;
  leftButtons: ButtonProps[];
  rightButtons: ButtonProps[];
  value: string;
  setValue: (value: string) => void;
}

export class TextWithButtonsStore implements TextWithButtonsModel {
  textInput: TextInputStore = new TextInputStore({ value: '' });
  leftButtons: ButtonProps[] = [];
  rightButtons: ButtonProps[] = [];

  constructor(
    value?: string,
    leftButtons?: ButtonProps[],
    rightButtons?: ButtonProps[]
  ) {
    if (value) this.textInput.setValue(value);
    if (leftButtons) {
      this.leftButtons = leftButtons;
    }
    if (rightButtons) {
      this.rightButtons = rightButtons;
    }
    makeAutoObservable(this);
  }

  get value() {
    return this.textInput.value;
  }

  setValue = (newValue: string) => {
    this.textInput.setValue(newValue);
  };
}
