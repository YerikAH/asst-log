import { PropsModal } from "@/types";
import { useState, useCallback } from "react";

export const useModalWarning = () => {
  const [open, setOpen] = useState(false);
  const [props, setProps] = useState<PropsModal>({
    buttonBgColor: "",
    activeButtonBgColor: "",
    message: "",
    title: "",
    textColorButton: "",
  });

  const updateProps = (newProps: PropsModal) => {
    setProps(newProps);
    toggleOpen();
  };
  const toggleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return {
    open,
    toggleOpen,
    updateProps,
    props,
  };
};
