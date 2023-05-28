import {useState} from 'react';

/**
 * A custom hook that provides state and functions for toggling the open/close state of a disclosure component.
 * @returns A tuple with three elements:
 ** A boolean representing whether the disclosure is currently open or closed.
 ** A function that sets the disclosure state to open.
 ** A function that sets the disclosure state to closed.
 */
export const useDisclosure = (initialState?: boolean): readonly [boolean, () => void, () => void] => {
  const [open, setOpen] = useState<boolean>(initialState ?? false);
  const onOpen = (): void => {
    setOpen(true);
  };

  const onClose = (): void => {
    setOpen(false);
  };

  return [open, onOpen, onClose] as const;
};
