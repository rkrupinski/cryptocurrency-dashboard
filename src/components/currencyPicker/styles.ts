import { Theme } from 'material-ui/styles';

// https://github.com/mui-org/material-ui/issues/8824
export type ClassNames = // ¯\_(ツ)_/¯
  | 'container'
  | 'suggestionsContainerOpen'
  | 'suggestionsList';

export const styles = (theme: Theme) => ({
  container: {
    // display: 'block',
    // https://github.com/mui-org/material-ui/issues/8928
    position: 'relative' as 'relative', // ¯\_(ツ)_/¯
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
