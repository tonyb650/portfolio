import { cn } from "@/utils/cn";

type SVGProps = {
  size?: number;
  className?: string;
};
const MountainIcon = ({
  className ,

  size=24
}: SVGProps) => {
  return (
    <svg
      className={cn("bg-white rounded-sm text-[#0b3c5d]",className)}
      version="1.1"
      id="svg1"
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs id="defs1" />
      <g id="g1">
        <path
          fill="currentColor"
          d="M 91.677397,787.25217 497.28963,195.49495 a 14.864303,14.864303 180 0 1 24.52122,0 L 925.3605,784.24301 a 15.445547,15.445547 117.78591 0 1 -12.74003,24.17804 H 102.83183 A 13.523222,13.523222 62.214089 0 1 91.677397,787.25217 Z"
          id="path1"
          transform="matrix(1.0730159,0,0,1.1301505,-33.829574,-51.637451)"
        />
        <path
          fill="white"
          d="M 514.49391,224.3975 287.72962,563.07868 427.1339,457.36317 l -3.71745,90.05395 -65.05532,140.95402 120.81704,-93.96935 105.94725,58.73084 -69.57085,-126.13303 52.84233,-114.66341 61.33788,68.51931 105.94725,68.51931 z"
          id="path2"
        />
      </g>
    </svg>
  );
};

export default MountainIcon;
