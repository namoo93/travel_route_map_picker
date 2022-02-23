import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const ModalPortal = ({ children }) => {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (document) {
      const dom = document.getElementById('root_modal');
      ref.current = dom; // ref에 dom 값 전달
    }
  }, []);

  if (ref.current && mounted) {
    // mounted 됬고 dom이 존재하는 경우 모달 랜더링 진행
    return createPortal(
      <div className="modal_container">
        <div className="modal_background" role="presentation" />
        <div className="modal_wrap">{children}</div>
      </div>,
      ref.current
    );
  }
  return null;
};

export default ModalPortal;
