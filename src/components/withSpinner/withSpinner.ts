import { ComponentClass, SFC } from 'react';
import { branch, renderComponent } from 'recompose';

import { Spinner } from '@src/components/spinner';

export interface ILoadable {
  loading: boolean;
}

export function withSpinner<P extends ILoadable>() {
  return (component: ComponentClass<P> | SFC<P>) => branch<P>(
    ({ loading }) => loading,
    renderComponent(Spinner),
    renderComponent(component),
  )(component);
}
