import { PropsWithChildren, ReactNode } from 'react'

type Props = PropsWithChildren<{
  header?: ReactNode
  footer?: ReactNode
}>

export const TemplateScaffold = ({ header, footer, children }: Props) => {
  return (
    <>
      {header && <header>header</header>}
      <>{children}</>
      {footer && <footer>footer</footer>}
    </>
  )
}
