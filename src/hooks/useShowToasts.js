import { useState } from "react";


export const useShowToasts = () => {
    const [toast, setToast] = useState(null);

    const showToast = (type, title, message, imgURL, duration) => {
        setToast({ type, title, message, imgURL });
        setTimeout(() => setToast(null), duration);
      };

      return [ toast, showToast ];
}