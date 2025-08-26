import { cn } from "@/utils/cn";

const Arc = ({ openDown = true, className }: { openDown?: boolean, className?: string }) => {
  return (
    <svg
      className={cn(className) }
      fill={"currentColor"}
      viewBox="0 0 1440 79"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path id="arc" d="M-100 79C-100 79 218.416 23.165 693.5 23.165C1168.58 23.165 1487 79 1487 79V0H-100V79Z" ></path>
      </defs>
      <use href="#arc" transform={ openDown ? "" : "translate(720 40) rotate(180) translate(-720 -40)" }/>
    </svg>
  );
};

export default Arc