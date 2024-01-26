import { render } from '@testing-library/react';

import LibsUiCore from './libs-ui-core';

describe('LibsUiCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibsUiCore />);
    expect(baseElement).toBeTruthy();
  });
});
