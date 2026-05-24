import { PropsWithChildren } from 'react'
const ProjectGrid = ({ children }: PropsWithChildren) => {
  return (
    <div className="mx-4 my-12 grid gap-5 sm:mx-24 md:grid-cols-2">
      {children}
    </div>
  )
}

export default ProjectGrid
