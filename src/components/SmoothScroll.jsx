// src/components/SmoothScroll.jsx
import { ReactLenis } from '@studio-freight/react-lenis'; // Corrected import name

function SmoothScroll({ children }) {
  // The new library is simpler. It takes the options directly.
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;