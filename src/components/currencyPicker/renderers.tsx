import React, { ReactNode, ChangeEvent } from 'react';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { InputProps } from 'react-autosuggest';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';

import { Currency } from '@src/redux_/currencies';

export const renderInput = (props: InputProps<Currency>) => {
  const { ref, value, defaultValue, classes, label, ...other } = props;

  const inputProps = {
    classes: {
    },
    ...other,
  };

  return (
    <TextField
      fullWidth={true}
      inputRef={ref}
      InputProps={inputProps}
      InputLabelProps={{ shrink: true }}
      label={label}
      value={value}
    />
  );
};

export const renderSuggestionsContainer = ({
  containerProps,
  children,
}: { containerProps: any, children: ReactNode }) => (
  <Paper {...containerProps} square={true}>
    {children}
  </Paper>
);

export const renderSuggestion = (
  suggestion: Currency,
  { query, isHighlighted }: { query: string, isHighlighted: boolean },
) => {
  const matches = match(suggestion.name, query);
  const parts = parse(suggestion.name, matches);

  const renderParts = parts.map((
    part: { text: string, highlight: boolean },
    index: number,
  ) => part.highlight ? (
    <strong key={`${index}`}>{part.text}</strong>
  ) : (
    <span key={`${index}`}>{part.text}</span>
  ));

  return (
    <MenuItem selected={isHighlighted} component='div'>
      {renderParts}
    </MenuItem>
  );
};
