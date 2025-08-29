import { PropsWithChildren } from 'react'
const ProjectGrid = ({children}: PropsWithChildren) => {
  return (
    <div className='grid mx-4 sm:mx-24 md:grid-cols-2 gap-5 my-12 ' >
      {children}
    </div>
  )
}

export default ProjectGrid