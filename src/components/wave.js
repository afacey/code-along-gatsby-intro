import React, { useState } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

export default function Wave() {
  const [waves, setWaves] = useState(0);
  const label = `👋🏾 ${waves} ${waves === 1 ? `wave` : `waves`}`;
  return (
    <button
      css={css`
        background: rebeccapurple;
        border: none;
        color: white;
        font-size: 1.25rem;
      `}
      onClick={() => setWaves(waves => waves + 1)}
    >
      {label}
    </button>
  );
}
