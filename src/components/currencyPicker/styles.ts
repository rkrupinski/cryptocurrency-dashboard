import { Theme } from 'material-ui/styles';

// https://github.com/mui-org/material-ui/issues/8824
export type ClassNames = // ¯\_(ツ)_/¯
  | 'container'
  | 'input'
  | 'suggestionsContainerOpen'
  | 'suggestionsList';

export const styles = (theme: Theme) => ({
  container: {
    display: 'inline-block',
    // https://github.com/mui-org/material-ui/issues/8928
    position: 'relative' as 'relative', // ¯\_(ツ)_/¯
  },
  input: {
    width: 250,
  },
  suggestionsContainerOpen: {
    left: 0,
    position: 'absolute' as 'absolute',
    right: 0,
  },
  suggestionsList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
});
