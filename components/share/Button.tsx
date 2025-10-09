interface ButtonProps {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
  htmlType?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}

export default function Button({
  children,
  className,
  onClick,
  style,

  htmlType = "button",
}: ButtonProps) {
  return (
    <div className="flex  p-2">
      <button
        style={style}
        type={htmlType}
        onClick={onClick} // Passing the onClick handler here
        className={`${className} text-center my-auto cursor-pointer  w-auto h-[45px]  text-base font-poppins `}
      >
        {children}
      </button>
    </div>
  );
}
