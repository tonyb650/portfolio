import { cn } from '@/utils/cn'
import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import Image from 'next/image'
import { CgWebsite } from 'react-icons/cg'
import { FaGithub, FaTimes } from 'react-icons/fa'
import { type Project } from './Projects'
import ImageSlider from './ImageSlider'

type ProjectDialogProps = {
  project: Project,
  isOpen: boolean,
  onClose: () => void
}

// TODO Hover & Active state for buttons

const ProjectDialog = ({project, isOpen, onClose}: ProjectDialogProps) => {

  return (
      <Dialog open={isOpen} onClose={onClose} className="relative z-50 text-text">
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
          <div className="fixed inset-0 w-screen overflow-y-auto p-4">
            <div className="flex min-h-full items-center justify-center">
            <DialogPanel className="max-w-7xl rounded-2xl shadow-lg shadow-black bg-bgcolor p-5">
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="transition delay-50 duration-300 hover:rotate-90 hover:text-white"
                  >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>
              <div className='px-3 pb-2  sm:px-7 space-y-4'>
                <DialogTitle className="font-bold text-2xl sm:text-4xl uppercase  text-center">{project.title}</DialogTitle>
                <Description className={"font-bold text-center"}>{project.shortDescription}</Description>
                <div className='flex justify-center w-full aspect-16/9 '>
                  <ImageSlider images={project.images} className=''/>
                </div>
                <p>{project.description}</p>
                <div className="flex justify-between">
                  <div className='flex gap-3'>
                    <a 
                      href={project.url} 
                      target='_blank'
                      className={cn('bg-text text-bgcolor rounded-lg border border-accent px-2 sm:px-3 py-1 flex items-center gap-2 shadow shadow-black/50', {"cursor-default opacity-30 text-accent" : !project.url})}  
                    >
                      <CgWebsite className='hidden sm:inline'/>Live Demo
                    </a>
                    <a 
                      href={project.gitHub} 
                      target='_blank'
                      className={cn('bg-text text-bgcolor rounded-lg border border-accent px-2 sm:px-3 py-1 flex items-center gap-2 shadow shadow-black/50', {"cursor-default opacity-30 text-accent" : !project.gitHub})}  
                    >
                      <FaGithub className='hidden sm:inline'/>GitHub
                    </a>
                  </div>
                  <button className='text-text rounded-lg border border-text px-2 sm:px-8 py-1 cursor-pointer shadow shadow-black' onClick={onClose}>Close</button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
  )

}

export default ProjectDialog