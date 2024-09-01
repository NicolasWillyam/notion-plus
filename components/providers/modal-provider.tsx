"use client";

import { useEffect, useState } from "react";
import { SettingsModal } from "../modals/settings-modals";

// import { CoverImageModal } from "@/components/modals/cover-image-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SettingsModal />
      {/* <CoverImageModal /> */}
    </>
  );
};
