'use client';

import { useEffect, useRef } from 'react';

/// ---------- || DEV MESSAGE || ---------- ///

export default function DevMessage() {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) {
      console.log(`
      -------------------------------------------------
      ███████╗ ██╗   ██╗
      ██═════╝ ╚██╗ ██╔╝
      ███████║  ╚████╔╝ 
      ██═════╝   ╚██╔╝  
      ███████║    ██║   ██║
      ╚══════╝    ╚═╝   ╚═╝
      -------------------------------------------------
    You found me!
    I'm available at: https://github.com/eliecyammine/elieyammine.com
    
    `);
    }
  }, []);

  return null;
}
