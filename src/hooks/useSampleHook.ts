/**
 * カスタムフックのサンプル
 * 値を2倍にする関数と、値を保持する変数を返す
 */

import { useState } from 'react';

function useSampleHook(initialValue: number) {
  const [value, setValue] = useState(initialValue);

  const doubleValue = () => {
    setValue(value * 2);
  };

  return { doubleValue, value };
}

export default useSampleHook;
