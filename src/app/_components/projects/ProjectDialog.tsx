import React from 'react'
import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { type Project } from './Projects'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'

type ProjectDialogProps = {
  project: Project,
  isOpen: boolean,
  onClose: () => void
}

// TODO needs to be scrollable if screen is small ?
//https://headlessui.com/react/dialog#scrollable-dialogs
// Hover state for buttons

const ProjectDialog = ({project, isOpen, onClose}: ProjectDialogProps) => {

  return (
      <Dialog open={isOpen} onClose={onClose} className="relative z-50 text-text">
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-7xl space-y-4 rounded-2xl shadow-lg shadow-black bg-bgcolor p-12">
            <DialogTitle className="font-bold text-4xl uppercase  text-center">{project.title}</DialogTitle>
            <Description className={"font-bold text-center"}>{project.shortDescription}</Description>
            <div className='flex justify-center w-full '>
              <Image 
                width={960}
                height={540}
                src={`/images/${project.screenshot}`} 
                className="rounded-lg shadow-black shadow-md " 
                alt="Screenshot of project"
              />
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
          </DialogPanel>
        </div>
      </Dialog>
  )

}

export default ProjectDialog