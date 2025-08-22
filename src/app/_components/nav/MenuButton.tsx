import { cn } from "@/utils/cn";

const MenuButton = ({ className }: { className?: string }) => {
  return (
    <>
      <button className={cn("cursor-pointer ", className)}>
        <Hamburger />
      </button>
      {/* modal here */}
    </>
  );
};

export default MenuButton;

const Hamburger = () => {
  return (
    <svg
      width="64"
      //  height="64"
      viewBox="0 0 512 325"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs id="defs1" />
      <g id="layer1">
        <rect id="rect2" width="512" height="85" x="0" y="240" ry="30" />
        <rect id="rect3" width="512" height="85" x="0" y="120" ry="30" />
        <rect id="rect4" width="512" height="85" x="0" y="0" ry="30" />
      </g>
    </svg>
  );
};
