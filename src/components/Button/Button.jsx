export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
}) {

  const base =
    "rounded-lg font-medium transition-all duration-300"

  const variants = {
    primary: "bg-black text-white hover:opacity-80",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  }

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-7 py-3 text-lg",
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}