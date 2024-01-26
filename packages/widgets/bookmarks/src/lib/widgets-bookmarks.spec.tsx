import { render } from '@testing-library/react';

import WidgetsBookmarks from './widgets-bookmarks';

describe('WidgetsBookmarks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WidgetsBookmarks />);
    expect(baseElement).toBeTruthy();
  });
});
