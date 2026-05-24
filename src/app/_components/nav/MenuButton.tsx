import { cn } from '@/utils/cn'

const MenuButton = ({
  isOpen = false,
  className,
}: {
  isOpen?: boolean
  className?: string
}) => {
  return (
    <div className={cn('relative h-12 w-12', className)}>
      <span
        className={cn(
          'absolute block h-1 w-full translate-x-0 translate-y-[9px] rounded-full bg-white transition-all duration-500',
          { 'translate-y-[21px] -rotate-45': isOpen }
        )}
      />
      <span
        className={cn(
          'absolute block h-1 w-full translate-x-0 translate-y-[21px] rounded-full bg-white transition-all duration-500',
          { 'w-0 translate-x-[24px]': isOpen }
        )}
      />

      <span
        className={cn(
          'absolute block h-1 w-full translate-x-0 translate-y-[33px] rounded-full bg-white transition-all duration-500',
          { 'translate-y-[21px] rotate-45': isOpen }
        )}
      />
    </div>
  )
}

export default MenuButton
