import { makeAutoObservable, runInAction } from 'mobx';
import { getCountryByName } from '../../api/apiService';
import { TextInputStore } from './../../UI/TextInput/';
import { debounce } from '../../utils/debounce';

type Country = {
  name: string;
  fullName: string;
  flag: string;
};

export interface AutocompleteInputModel {
  textInput: TextInputStore;
  suggestions: Country[];
  isLoading: boolean;
  isActive: boolean;
  maxSuggestions: number;
  searchCountries(searchTerm: string): Promise<void>;
  selectCountry(country: Country): void;
  clearSuggestions(): void;
}

export class AutocompleteInputStore implements AutocompleteInputModel {
  textInput;
  isActive = false;
  suggestions: Country[] = [];
  isLoading = false;
  maxSuggestions: number;

  constructor(maxSuggestions: number = 5, value?: string) {
    this.textInput = new TextInputStore({
      value: value || '',
      onBlur: () => {
        this.isActive = false;
        setTimeout(() => {
          if (!this.isActive) {
            this.suggestions = [];
          }
        }, 200);
      },
      onFocus: () => {
        this.isActive = true;
      },
    });
    this.maxSuggestions = maxSuggestions;
    this.textInput.onChange = debounce(this.searchCountries, 300);
    makeAutoObservable(this);
  }

  searchCountries = async (searchTerm: string): Promise<void> => {
    if (!searchTerm) {
      this.suggestions = [];
      return;
    }
    this.isLoading = true;
    try {
      const data = await getCountryByName(searchTerm);
      const uniqueData = Array.from(
        new Map(data.map(item => [item.name, item])).values()
      );
      runInAction(() => {
        if (this.isActive) {
          this.suggestions = uniqueData.slice(0, this.maxSuggestions);
        }
      });
    } catch (error) {
      console.error('Error fetching countries:', error);
      this.suggestions = [];
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  selectCountry(country: Country) {
    this.textInput.setValue(country.name);
    this.suggestions = [];
  }

  clearSuggestions() {
    this.suggestions = [];
  }
}
