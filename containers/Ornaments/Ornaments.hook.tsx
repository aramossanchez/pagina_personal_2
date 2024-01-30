import { useEffect, useState } from "react"

export function UseOrnament() {
  
  const [totalVhHook, setTotalVhHook] = useState(0);
  

  useEffect(() => {
    const pxBody = document.body.offsetHeight;
    const pxWindows = window.innerHeight;
    const totalVh = (pxBody / pxWindows) * 100;
    setTotalVhHook(totalVh);
  }, []);

  return {
    totalVhHook
  }
}