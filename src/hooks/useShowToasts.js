import { useState } from "react";


export const useShowToasts = () => {
    const [toast, setToast] = useState(null);

    const showToast = (type, title, message, imgURL, duration) => {
        setToast({ type, title, message, imgURL });
        const timeOut = setTimeout(() => setToast(null), duration);
        window.addEventListener("pagehide", () => clearTimeout(timeOut));
      };

      return [ toast, showToast ];
}