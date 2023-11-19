import { IconType } from "react-icons";

interface DivProps {
  title: string;
  subtitle: string;
  icon: IconType;
  bgColor?: string;
}

export function Div({ subtitle, title, icon: Icon, bgColor }: DivProps) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="w-full max-w-xs h-96 border rounded-md flex flex-col items-start justify-around px-3 mx-auto"
    >
      {Icon && (
        <span className="text-4xl py-3 mb-5 mt-1">
          <Icon size={28} color="#000" />
        </span>
      )}
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl font-semibold mb-4 mx-auto">{title}</p>
        <p className="text-lg  mb-1 text-slate-500 mx-auto">{subtitle}</p>
      </div>
    </div>
  );
}
