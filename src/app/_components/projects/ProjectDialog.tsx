import { cn } from '@/utils/cn'
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { CgWebsite } from 'react-icons/cg'
import { FaGithub, FaTimes } from 'react-icons/fa'
import { type Project } from './Projects'
import ImageSlider from './ImageSlider'
import ReactMarkdown from 'react-markdown'

type ProjectDialogProps = {
  project: Project
  isOpen: boolean
  onClose: () => void
}

// TODO Hover & Active state for buttons

const ProjectDialog = ({ project, isOpen, onClose }: ProjectDialogProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      transition
      className="text-text relative z-50 transition duration-300 ease-out data-closed:opacity-0"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/30 transition duration-300 ease-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 w-screen overflow-y-auto p-4">
        <div className="flex min-h-full items-center justify-center">
          <DialogPanel
            transition
            className="bg-bgcolor max-w-7xl rounded-2xl p-5 shadow-lg shadow-black transition duration-300 ease-out data-closed:translate-y-8 data-closed:scale-95 data-closed:opacity-0"
          >
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="transition delay-50 duration-300 hover:rotate-90 hover:text-white"
              >
                <FaTimes className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4 px-3 pb-2 sm:px-7">
              <DialogTitle className="text-center text-2xl font-bold uppercase sm:text-4xl">
                {project.title}
              </DialogTitle>
              <Description className={'text-center font-bold'}>
                {project.shortDescription}
              </Description>
              <div className="flex aspect-16/9 w-full justify-center xl:mx-auto xl:max-w-5xl">
                <ImageSlider images={project.images} className="" />
              </div>
              <ReactMarkdown>{project.description}</ReactMarkdown>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    className={cn(
                      'bg-text text-bgcolor border-accent flex items-center gap-2 rounded-lg border px-2 py-1 shadow shadow-black/50 sm:px-3',
                      {
                        'text-accent cursor-default opacity-30': !project.url,
                      }
                    )}
                  >
                    <CgWebsite className="hidden sm:inline" />
                    Live Demo
                  </a>
                  <a
                    href={project.gitHub}
                    target="_blank"
                    className={cn(
                      'bg-text text-bgcolor border-accent flex items-center gap-2 rounded-lg border px-2 py-1 shadow shadow-black/50 sm:px-3',
                      {
                        'text-accent cursor-default opacity-30':
                          !project.gitHub,
                      }
                    )}
                  >
                    <FaGithub className="hidden sm:inline" />
                    GitHub
                  </a>
                </div>
                <button
                  className="text-text border-text cursor-pointer rounded-lg border px-2 py-1 shadow shadow-black sm:px-8"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default ProjectDialog
