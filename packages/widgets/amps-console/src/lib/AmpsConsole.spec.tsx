import { render } from '@testing-library/react';

import WidgetsAmpsConsole from './AmpsConsole';

describe('WidgetsAmpsConsole', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WidgetsAmpsConsole />);
    expect(baseElement).toBeTruthy();
  });
});
