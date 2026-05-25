import {
  Button as HeadlessButton,
  type ButtonProps as HeadlessButtonProps,
} from '@headlessui/react'
import { cn } from '@/utils/cn'
import type { ElementType } from 'react'

type Variant = 'solid' | 'outline' | 'ghost'

const baseClasses =
  'flex cursor-pointer items-center gap-2 rounded-lg border px-2 py-1 sm:px-3 transition-[transform,background-color,border-color,color,box-shadow] duration-150 data-active:translate-y-px data-disabled:cursor-default data-disabled:opacity-30 data-disabled:translate-y-0'

const variantClasses: Record<Variant, string> = {
  solid:
    'bg-text text-bgcolor border-accent shadow shadow-black/50 data-hover:not-data-disabled:bg-highlight data-hover:not-data-disabled:border-highlight data-active:shadow-none data-disabled:text-accent',
  outline:
    'text-text border-text bg-transparent shadow shadow-black/50 data-hover:bg-text/10 data-active:shadow-none',
  ghost:
    'text-text border-transparent bg-transparent shadow-none data-hover:text-highlight data-active:text-highlight',
}

type ButtonProps<TTag extends ElementType = 'button'> = Omit<
  HeadlessButtonProps<TTag>,
  'className'
> & {
  variant?: Variant
  className?: string
}

const Button = <TTag extends ElementType = 'button'>({
  variant = 'solid',
  className,
  ...props
}: ButtonProps<TTag>) => {
  const Component = HeadlessButton as ElementType
  return (
    <Component
      {...props}
      className={cn(baseClasses, variantClasses[variant], className)}
    />
  )
}

export default Button
