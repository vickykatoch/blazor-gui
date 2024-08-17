import { Label } from '@salt-ds/core';
import styles from './widgets-bookmarks.module.scss';
import { calculateTintAndShade } from './Color';
import { useState } from 'react';

/* eslint-disable-next-line */
const baseRect = {
  height: 100,
  width: 150,
};
export function WidgetsBookmarks() {
  const [color, setColor] = useState('');
  const [colors, setColors] = useState<string[]>([]);
  const [contrast, setContrast] = useState<string[]>([]);

  const generate = () => {
    // #f04f4f
    const colors = [];
    for (let i = 1; i <= 12; i++) {
      colors.push(calculateTintAndShade(color, i * 9 * 0.01));
    }
    setContrast(colors);
    setColors([...colors].reverse());
  };
  return (
    <div className="d-flex flex-column flex-grow-1 p-1">
      <div className="d-flex flex-row align-items-center justify-content-center">
        <Label for="light" className="mr-4">
          Enter Light Color :
        </Label>
        <input
          type="text"
          id="light"
          name="light"
          value={color}
          onChange={({ target }) => setColor(target.value)}
        />
        <button onClick={generate}>Generate</button>
      </div>
      <div className="d-flex flex-row align-items-center justify-content-center mt-3">
        {colors.map((color, index) => (
          <span
            className="d-flex align-items-center justify-content-center"
            style={{
              ...baseRect,
              backgroundColor: color,
              color: contrast[index],
            }}
          >
            <b>{color}</b>
          </span>
        ))}
      </div>
    </div>
  );
}

export default WidgetsBookmarks;
