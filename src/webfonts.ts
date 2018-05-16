import WebFont from 'webfontloader';

export const load = () => WebFont.load({
  google: {
    families: ['Roboto:300,400,500'],
  },
});
