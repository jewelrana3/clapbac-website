interface ButtonProps {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
  disabled?: boolean;
  htmlType?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}

export default function Button({
  children,
  className,
  onClick,
  style,
  disabled,
  htmlType = "button",
}: ButtonProps) {
  return (
    <div className="flex">
      <button
        disabled={disabled}
        style={style}
        type={htmlType}
        onClick={onClick} // Passing the onClick handler here
        className={`${className} text-center my-auto w-auto h-[45px]  text-base font-poppins ${
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        {children}
      </button>
    </div>
  );
}
