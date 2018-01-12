import React, { PureComponent, ReactNode, ChangeEvent } from 'react';
import Autosuggest from 'react-autosuggest';
import { withStyles, WithStyles } from 'material-ui/styles';

import { Currency, ICurrencySelectedAction } from '@src/redux_/currencies';
import { renderInput, renderSuggestionsContainer, renderSuggestion } from './renderers';
import { styles, ClassNames } from './styles';
import { Container } from '@src/components/container';

export interface ICurrencyPickerProps {
  currencies: Currency[];
  loading: boolean;
  maxSuggestions: number;
  selectCurrency: (currency: Currency) => ICurrencySelectedAction;
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
    const { currencies, classes } = this.props;

    const theme = {
      container: classes.container,
      suggestionsContainerOpen: classes.suggestionsContainerOpen,
      suggestionsList: classes.suggestionsList,
    };

    // ¯\_(ツ)_/¯
    const changeCallback = this.onChange.bind(this);
    const fetchCallback = this.onSuggestionsFetch.bind(this);
    const clearCallback = this.onSuggestionsClear.bind(this);

    const inputProps = {
      classes,
      onChange: changeCallback,
      placeholder: 'Search currencies by name',
      value: this.state.value,
    };

    return (
      <Container>
        <Autosuggest
          theme={theme}
          renderInputComponent={renderInput}
          renderSuggestionsContainer={renderSuggestionsContainer}
          renderSuggestion={renderSuggestion}
          onSuggestionsFetchRequested={fetchCallback}
          onSuggestionsClearRequested={clearCallback}
          onSuggestionSelected={this.onSuggestionSelected}
          getSuggestionValue={this.getSuggestionValue}
          suggestions={this.state.suggestions}
          inputProps={inputProps}
        />
      </Container>
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

  private onSuggestionSelected = (
    _: any,
    { suggestion: currency }: { suggestion: Currency },
  ) => {
    const { selectCurrency } = this.props;

    this.setState((prevState) => ({
      ...prevState,
      value: '',
    }));

    selectCurrency(currency);
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
    const { currencies, maxSuggestions } = this.props;
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    return inputLength ? currencies.filter((currency) => {
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
