import { Theme } from 'material-ui/styles';

// https://github.com/mui-org/material-ui/issues/8824
export type ClassNames = 'container' | 'suggestionsList'; // ¯\_(ツ)_/¯

export const styles = (theme: Theme) => ({
  container: {
    // https://github.com/mui-org/material-ui/issues/8928
    position: 'relative' as 'relative', // ¯\_(ツ)_/¯
  },
  suggestionsList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
});
