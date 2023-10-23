import { useEffect } from "react";

export function useDisableWebFeatures() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.addEventListener("contextmenu", (e) => e.preventDefault());
      document.onkeydown = (e) => {
        const ctrlShiftKey = (keyCode) => e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
        if (event.keyCode === 123 || ctrlShiftKey("I") || ctrlShiftKey("J") || ctrlShiftKey("C") || (e.ctrlKey && e.keyCode === "U".charCodeAt(0))) {
          return false;
        }
      }
    }
  }, []);
}
