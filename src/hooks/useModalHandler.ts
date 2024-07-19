import { useState } from "react";

export function useModalHandler() {
  const [isModalOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return { isModalOpen, openModal, closeModal };
}
