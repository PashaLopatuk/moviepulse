import {Dispatch, SetStateAction} from "react";

declare global {
  type SetState<T> = Dispatch<SetStateAction<T>>
  const optional = <T>(x: T | undefined) => x ?? {} as T
}