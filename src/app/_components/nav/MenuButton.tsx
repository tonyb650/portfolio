import { cn } from "@/utils/cn";


const MenuButton = ({isOpen = false, className} : {isOpen?: boolean, className?: string}) => {

  return (

    <div className={cn("w-12 h-12 relative", className)}>
      <span 
        className={cn("bg-white w-full h-1 rounded-full block absolute transition-all duration-500 translate-x-0 translate-y-[9px]",
          {"translate-y-[21px] -rotate-45": isOpen}
        )} 
      />
      <span 
        className={cn("bg-white w-full h-1 rounded-full block absolute translate-x-0 translate-y-[21px] transition-all duration-500"
          , {"w-0 translate-x-[24px]": isOpen})}
      />

      <span 
        className={cn("bg-white w-full h-1 rounded-full block absolute transition-all duration-500 translate-x-0 translate-y-[33px]",
          {"translate-y-[21px] rotate-45": isOpen}
        )} 
      />
    </div>
  );
};

export default MenuButton