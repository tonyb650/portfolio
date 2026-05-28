import ContactForm from './ContactForm'

const Contact = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null> | null
}) => {
  return (
    <div
      ref={ref}
      className="mx-auto h-[calc(dvh-48px)] max-w-7xl gap-4 px-5 pt-16 pb-14"
    >
      <ContactForm />
    </div>
  )
}

export default Contact
