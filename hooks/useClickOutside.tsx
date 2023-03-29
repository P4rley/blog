import { useEffect } from "react";

export default function useClickOutside(ref: any, onClickOutside: () => void) {
  useEffect(() => {
    /**
     * Invoke Function onClick outside of element
     */
    function handleClickOutside(e: any) {
      if (ref.current && !ref.current.contains(e.target)) {
        onClickOutside();
      }
    }
    // Bind
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // dispose
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
}
