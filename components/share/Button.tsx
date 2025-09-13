export default function Button({
  className,
  children,
  type = "submit",
}: {
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <div className="">
      <button
        type={type}
        className={`bg-[#F05223] text-white px-5 py-2 rounded-md font-semibold cursor-pointer ${className}`}
      >
        {children}
      </button>
    </div>
  );
}
