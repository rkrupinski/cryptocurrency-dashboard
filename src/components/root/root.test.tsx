import React from 'react';
import { shallow } from 'enzyme';

import { Root } from '.';
import configureStore from '@src/configureStore';

it('Renders root', function () {
  const store = configureStore();

  const wrapper = shallow(
    <Root store={store} />
  );

  expect(wrapper).toMatchSnapshot();
});
