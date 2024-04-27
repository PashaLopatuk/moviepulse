import type {Dispatch, ReactNode} from "react";

declare global {
  type LayoutProps = Readonly<{
    children: ReactNode
  }>

  type SetState<T> = Dispatch<SetState<T>>
}