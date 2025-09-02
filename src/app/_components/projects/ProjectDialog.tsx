import React from 'react'
import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { type Project } from './Projects'
// import Image from 'next/image'

type ProjectDialogProps = {
  project: Project,
  isOpen: boolean,
  onClose: () => void
}

const ProjectDialog = ({project, isOpen, onClose}: ProjectDialogProps) => {

  return (
    <>
      {/* <button onClick={() => setIsOpen(true)}>Open dialog</button> */}
      <Dialog open={isOpen} onClose={onClose} className="relative z-50 text-text">
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-7xl space-y-4 rounded-2xl shadow-lg shadow-black bg-bgcolor p-12">
            <DialogTitle className="font-bold text-4xl uppercase  text-center">{project.title}</DialogTitle>
            <div className='flex justify-center w-full '>

            <img src={`/images/${project.screenshot}`} className="rounded-lg shadow-black shadow-md" alt="Screenshot of project"/>
            </div>
            <Description>{project.description}</Description>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus temporibus provident porro nemo ipsa inventore, alias similique exercitationem iusto ratione illo enim repellat dolor soluta odio veritatis a repudiandae eum non quis. Eaque recusandae eos, doloremque repellendus animi dolorum quos quisquam tempore velit soluta sequi pariatur modi totam, quod dicta accusamus id qui ducimus dolore incidunt vitae, hic error. Provident corporis omnis neque deserunt facere animi dolor ut ipsa odio porro? Debitis libero deserunt recusandae ad ea dicta voluptatum quas, culpa explicabo commodi alias amet eos consequatur a aliquid excepturi at non dolore expedita, itaque sed enim ut! Placeat, voluptate.</p>
            <div className="flex justify-between">
              <div className='flex gap-3'>
                <button className='text-accent rounded border border-accent px-8 py-1'  onClick={onClose}>Live Demo</button>
                <button className='text-accent rounded border border-accent px-8 py-1'  onClick={onClose}>Github</button>
              </div>
              <button className='text-accent rounded border border-accent px-8 py-1' onClick={onClose}>Close</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )

}

export default ProjectDialog