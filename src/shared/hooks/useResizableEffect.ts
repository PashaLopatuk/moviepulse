import {useLayoutEffect, useRef} from "react";

import type {RefObject} from 'react';


const useResizableEffect = (callBack: (entry: ResizeObserverEntry) => void, elRef: RefObject<HTMLElement>) => {
  const resizeObserver = useRef<ResizeObserver | null>(null);

  useLayoutEffect(() => {
    let observerRefValue = null

    resizeObserver.current = new ResizeObserver((entries) => {
      for (const entry of entries) {
        callBack(entry)
      }
    })

    if (elRef.current) {
      resizeObserver.current?.observe(elRef.current)
      observerRefValue = elRef.current
    }

    return () => {
      if (observerRefValue) {
        resizeObserver.current?.unobserve(observerRefValue)
      }
    }

  }, [elRef, callBack])
}

export default useResizableEffect