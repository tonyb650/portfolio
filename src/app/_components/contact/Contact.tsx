import ColorPalette from "../ColorPalette";
import ContactForm from "./ContactForm";

const Contact = ({
  ref
}: {
  ref: React.RefObject<HTMLDivElement | null> | null;
}) => {
  return (
    <div ref={ref} className="max-w-7xl mx-auto h-dvh pt-14 pb-2 px-5  gap-4 ">
      <ContactForm/>
      <ColorPalette />
    </div>
  );
}

export default Contact