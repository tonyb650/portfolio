import calendar from '@/assets/projects/calendar.png'
import clock from '@/assets/projects/clock.png'
import cyberSecurity from '@/assets/projects/cybersecurity.png'
import wwsSpeech from '@/assets/projects/wws_speech.png'

import ProjectCard from './ProjectCard'
const ProjectGrid = () => {
  return (
    <div className='sm:grid md:grid-cols-2 gap-8 mx-8 my-12'>
      <ProjectCard image={cyberSecurity} title="Pocket Security" description='AI-powered wedding planning platform.'/>
      <ProjectCard image={wwsSpeech} title="Wedding Wordsmith" description='AI-powered wedding planning platform.'/>
      <ProjectCard image={clock} title="Time Manager" description='AI-powered wedding planning platform.'/>
      <ProjectCard image={calendar} title="Calendify" description='AI-powered wedding planning platform.' light/>
    </div>
  )
}

export default ProjectGrid

/*
  Now let's talk about the grid CSS:
  'flex flex-col gap-4' covers very small screens.

  Above that, we switch to 'grid'
  We keep the 'gap-4'
  But then we dynamically generate the number of columns with this:
  'grid-cols-[repeat(auto-fill, minmax(400px,1fr))]'
  How does this work?
  Repeats automatically.
  Minimum size they can be is 400px
  So, the media query says: "Do we have 800px to work with? If no we have one column of 1fr. If yes, we have 2 repeating columns of 1fr each. 
  Do we have 1200px to work with? If yes, we are making 3 repeating columns of 1fr each"

  return (
    <div {...props} className={cn("flex flex-col sm:grid gap-4 grid-cols-[repeat(auto-fill,minmax(400px,1fr))] ", className)}>
    </div>
  );
*/