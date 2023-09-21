'use client';
import styles from './modal.module.scss';
import { useEffect, useState } from 'react';
import { TfiClose as Close } from 'react-icons/tfi';
import { Card } from './card';

export default ({
  className,
  isOpen,
  closeFn,
  children,
}: {
  className: string;
  isOpen: boolean;
  closeFn: () => void;
  children: any;
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);
  return (
    <div
      className={`${className} fixed transform top-0 left-0 h-full w-full p-12 card z-50 rounded-md`}
    >
      <Card className="relative h-full w-full p-5 overflow-y-auto">
        {children}
      </Card>
      <button
        className={`${styles.closeButton} top-20 right-20`}
        onClick={closeFn}
      >
        <Close className={`h-8 w-8 text-white`} />
      </button>
    </div>
  );
};
