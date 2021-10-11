import React from 'react';
import { useEffect } from 'react';

type Props = {
  ref: React.MutableRefObject<HTMLElement | null>;
  onClickOutside: (e: MouseEvent) => void;
  refsToExclude?: (HTMLElement | null)[];
};

export const useOnClickOutside = ({
  ref,
  refsToExclude,
  onClickOutside,
}: Props) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const elementClickedIsExclude = (refsToExclude || []).find(
        (refToExclude) => refToExclude?.contains(event.target as HTMLElement),
      );

      if (
        ref.current &&
        !ref.current.contains(event.target as any) &&
        !elementClickedIsExclude
      ) {
        onClickOutside(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, refsToExclude]);
};
