import { cn } from "../../../utils/common";

export default function Button({ text = 'Button', className ,onClick}) {
  return (
    <button
    onClick={onClick}
      className={cn(
        "font-mono-space text-center px-4 py-2 capitalize focus:border-0  cursor-pointer   rounded-sm transition duration-300  hover:text-secondary bg-primary hover:bg-light-slate focus:bg-dark-slate text-secondary",
        className
      )}
    >
      {text}
    </button>
  );
}
