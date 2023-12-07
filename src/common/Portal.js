import { useEffect, useState } from "react";
import ReactPortal from 'react-overlays/esm/Portal';

export const Portal = ({ children }) => {
  const [portalRef, setPortalRef] = useState(null);
  useEffect(() => {
    setPortalRef(document.querySelector('body'));
  }, []);

  return <ReactPortal container={portalRef}>{children}</ReactPortal>;
};
