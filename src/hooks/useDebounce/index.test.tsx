import useDebounce from './index';
import { act } from '@testing-library/react-hooks';
import { useState } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

function TestComponent({ initialValue = 0 }: { initialValue?: number }) {
  const [value, setValue] = useState(initialValue);
  const debouncedValue = useDebounce(value, 1000);
  return (
    <div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <span data-testid={'debouncedValue'}>{debouncedValue}</span>
      <span data-testid={'value'}>{value}</span>
    </div>
  );
}

describe('useDebounce', function () {
  afterEach(() => {
    jest.useRealTimers();
  });

  it('should debounce and only change value when delay time has passed', function () {
    jest.useFakeTimers();
    const { getByTestId, getByText } = render(<TestComponent />);
    const incrementButton = getByText('Increment');
    const debouncedValue = getByTestId('debouncedValue');
    const value = getByTestId('value');

    const incrementAndPassTime = (passedTime: number) => {
      act(() => {
        userEvent.click(incrementButton);
        jest.advanceTimersByTime(passedTime);
      });
    };

    incrementAndPassTime(100);

    expect(debouncedValue.textContent).toBe('0');
    expect(value.textContent).toBe('1');

    incrementAndPassTime(500);

    expect(debouncedValue.textContent).toBe('0');
    expect(value.textContent).toBe('2');

    incrementAndPassTime(999);

    expect(debouncedValue.textContent).toBe('0');
    expect(value.textContent).toBe('3');

    incrementAndPassTime(1000);

    expect(debouncedValue.textContent).toBe('3');
    expect(value.textContent).toBe('4');
  });
});

describe('Initial Value of DebouncedValue', function () {
  it('should set initial value', function () {
    const { getByTestId } = render(<TestComponent key={'1'} initialValue={1} />);
    expect(getByTestId('debouncedValue').textContent).toBe('1');
    expect(getByTestId('value').textContent).toBe('1');
  });
});