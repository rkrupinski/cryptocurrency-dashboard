import React, { StatelessComponent, PureComponent, ReactNode, ChangeEvent } from 'react';
import Autosuggest from 'react-autosuggest';
import { withStyles, WithStyles } from 'material-ui/styles';

import { Currency } from '@src/redux_/currencies';
import { styles, ClassNames } from './styles';
import { InputComponent, SuggestionsContainer, Suggestion } from './renderers';

export interface ICurrencyPickerProps {
  all: Currency[];
  loading: boolean;
  maxSuggestions: number;
  selected: string[];
}

interface ICurrencyPickerState {
  suggestions: Currency[];
  value: string;
}

export class CurrencyPickerRaw extends PureComponent<
  ICurrencyPickerProps & WithStyles<ClassNames>,
  ICurrencyPickerState
> {
  public static defaultProps = {
    maxSuggestions: 5,
  };

  public state = {
    suggestions: [],
    value: '',
  };

  public render() {
    const { all, classes } = this.props;

    const theme = {
      container: classes.container,
      suggestionsList: classes.suggestionsList,
    };

    // ¯\_(ツ)_/¯
    const changeCallback = this.onChange.bind(this);
    const fetchCallback = this.onSuggestionsFetch.bind(this);
    const clearCallback = this.onSuggestionsClear.bind(this);

    const inputProps = {
      onChange: changeCallback,
      placeholder: 'Seaerch currencies by name',
      value: this.state.value,
    };

    return (
      <Autosuggest
        theme={theme}
        renderInputComponent={InputComponent}
        renderSuggestionsContainer={SuggestionsContainer}
        renderSuggestion={Suggestion}
        onSuggestionsFetchRequested={fetchCallback}
        onSuggestionsClearRequested={clearCallback}
        onSuggestionSelected={this.onSuggestionSelected}
        getSuggestionValue={this.getSuggestionValue}
        suggestions={this.state.suggestions}
        inputProps={inputProps}
      />
    );
  }

  private onSuggestionsFetch({ value }: { value: string }) {
    this.setState((prevState) => ({
      ...prevState,
      suggestions: this.getSuggestions(value),
    }));
  }

  private onSuggestionsClear() {
    this.setState((prevState) => ({
      ...prevState,
      suggestions: [],
    }));
  }

  private onSuggestionSelected = (_: any, selected: any) => { // FIXME
    /* tslint:disable */
    console.log(selected);
    /* tslint:enable */

    this.setState((prevState) => ({
      ...prevState,
      value: '',
    }));
  }

  private onChange(
    e: ChangeEvent<HTMLInputElement>,
    { newValue }: { newValue: string },
  ) {
    this.setState((prevState) => ({
      ...prevState,
      value: newValue,
    }));
  }

  private getSuggestions = (value: string) => {
    const { all, maxSuggestions } = this.props;
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    return inputLength ? all.filter((currency) => {
      const keep = count < maxSuggestions &&
          currency.name.toLowerCase().slice(0, inputLength) === inputValue;

      if (keep) {
        count += 1;
      }

      return keep;
    }) : [];
  }

  private getSuggestionValue = ({ name }: { name: string }) => name;
}

export const CurrencyPicker = withStyles(styles)(CurrencyPickerRaw);
