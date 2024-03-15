import { makeAutoObservable } from 'mobx';

export interface TextInputModel {
  value: string;
  placeholder?: string;
  disabled?: boolean;
  setValue: (value: string) => void;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export class TextInputStore implements TextInputModel {
  value;
  disabled = false;
  placeholder = '';
  onChange;
  onFocus;
  onBlur;

  constructor(model: Omit<TextInputModel, 'setValue'>) {
    this.value = model.value;
    if (model.placeholder) this.placeholder = model.placeholder;
    if (model.disabled) this.disabled = model.disabled;
    if (model.onChange) this.onChange = model.onChange;
    if (model.onFocus) this.onFocus = model.onFocus;
    if (model.onBlur) this.onBlur = model.onBlur;
    makeAutoObservable(this);
  }

  setValue = (newValue: string) => {
    this.value = newValue;
  };
}
