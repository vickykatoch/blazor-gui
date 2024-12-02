import { render } from '@testing-library/react';

import WidgetsClarityDash from './clarity-dash';

describe('WidgetsClarityDash', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WidgetsClarityDash />);
    expect(baseElement).toBeTruthy();
  });
});
