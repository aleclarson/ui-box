import * as React from 'react'
import type { EnhancerProps } from './enhancers'

export { EnhancerProps }

export type PropsOf<
  E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>

/**
 * Generic component props with "is" prop
 * @template P Additional props
 * @template T React component or string element
 */
export interface BoxOwnProps extends EnhancerProps {
  /**
   * Replaces the underlying element
   */
  is?: React.ElementType

  /**
   * Allows the high level value of safeHref to be overwritten on an individual component basis
   */
  allowUnsafeHref?: boolean
}

export type BoxProps<E extends React.ElementType = 'div'> = BoxOwnProps &
  Omit<PropsOf<E>, keyof BoxOwnProps>

/**
 * Convenience type for defining your own components that extend Box and pass-through props
 */
export interface BoxComponent<P = {}, D extends React.ElementType = 'div'> {
  <E extends React.ElementType = D>(
    props: { is?: E } & Omit<Omit<BoxProps<E>, keyof P> & P, 'is'>
  ): JSX.Element

  displayName?: string
}
