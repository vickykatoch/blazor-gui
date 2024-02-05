import { render } from '@testing-library/react';
import { Dialog } from './dialog';

describe('Dialog', () => {
  it('should render successfully', () => {
    const onCancel = jest.fn();
    const onOk = jest.fn();
    const { baseElement } = render(
      <Dialog title="Unit Test" onCancel={onCancel} onOk={onOk}>
        <h1>Hello Unit Tests</h1>
      </Dialog>
    );
    expect(baseElement).toBeTruthy();
  });
});
