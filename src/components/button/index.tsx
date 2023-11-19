interface ButtonProps {
  placeholder: string;
  bgColor: string;
}

export function Button({ placeholder, bgColor }: ButtonProps) {
  return (
    <button
      className="w-full max-w-xs mt-10 rounded-full h-10 font-medium text-center"
      style={{ backgroundColor: bgColor }}
    >
      {placeholder}
    </button>
  );
}
