import { type ReactNode } from 'react'
import { cn } from '@/utils/cn'

type Props = {
  children?:  ReactNode,
  className?: string,
}

const ChatToolbox = ( { children, className}: Props ) => {


  return (
    <div className={cn(className)}>
      {children}
    </div>
  )
}

export default ChatToolbox