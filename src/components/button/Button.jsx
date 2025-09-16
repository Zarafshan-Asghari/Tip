import { cn } from "../../../utils/common";

export default function Button({ value = 5, className ,onClick}) {
  const isNumber = !isNaN(Number(value));


  return (
    <button
    onClick={onClick}
    type="button"
    value={value}
      className={cn(
        "font-mono-space px-4 py-2 capitalize focus:border-0 focus:bg-primary cursor-pointer bg-secondary text-light-gray rounded-sm transition duration-300 hover:bg-primary hover:text-secondary",
        className
      )}
    >
      {isNumber ? `${value}%` : value}
    </button>
  );
}
