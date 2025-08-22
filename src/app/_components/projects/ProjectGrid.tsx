import calendar from '@/assets/projects/calendar.png'
import clock from '@/assets/projects/clock.png'
import cyberSecurity from '@/assets/projects/cybersecurity.png'
import wwsSpeech from '@/assets/projects/wws_speech.png'

import ProjectCard from './ProjectCard'
const ProjectGrid = () => {
  return (
    <div className='sm:grid md:grid-cols-2 gap-8 mx-8 my-12'>
      <ProjectCard image={cyberSecurity.src} title="Pocket Security" description='AI-powered wedding planning platform.'/>
      <ProjectCard image={wwsSpeech.src} title="Wedding Wordsmith" description='AI-powered wedding planning platform.'/>
      <ProjectCard image={clock.src} title="Time Manager" description='AI-powered wedding planning platform.'/>
      <ProjectCard image={calendar.src} title="Calendify" description='AI-powered wedding planning platform.' light/>
    </div>
  )
}

export default ProjectGrid