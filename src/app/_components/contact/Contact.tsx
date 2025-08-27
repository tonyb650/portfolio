import ContactForm from "./ContactForm";

const Contact = ({
  ref
}: {
  ref: React.RefObject<HTMLDivElement | null> | null;
}) => {
  return (
    <div ref={ref} className="max-w-7xl mx-auto h-[calc(dvh-48px)] pt-26 pb-14 px-5  gap-4 ">
      <ContactForm/>
    </div>
  );
}

export default Contact