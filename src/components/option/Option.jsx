import { cn } from "../../../utils/common";

export default function Option({ value = 5, className ,onClick}) {
  return (
    <option
    onClick={onClick}
    value={value}
      className={cn(
        "font-mono-space px-4 py-2 capitalize focus:border-0 focus:bg-primary cursor-pointer bg-secondary text-light-gray rounded-sm transition duration-300 hover:bg-primary hover:text-secondary",
        className
      )}
    >
      {value}%
    </option>
  );
}
