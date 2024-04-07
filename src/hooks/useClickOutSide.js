import { useEffect, useRef } from "react";

export function useClickOutSide(closeFunction, listenCapturing = true) {
  const ref = useRef(null);
  useEffect(
    function () {
      function handelClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          closeFunction();
        }
      }
      document.addEventListener("click", handelClick, listenCapturing);
      return () =>
        document.removeEventListener("click", handelClick, listenCapturing);
    },
    [closeFunction, listenCapturing]
  );
  return { ref };
}
