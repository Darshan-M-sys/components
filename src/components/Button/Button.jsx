export default function Button({
  children,
  variant = "primary",
  size = "md",
  rounded = "lg",
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
}) {

  const base =
    "font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer active:scale-95"

  const variants = {
    primary:
      "bg-black text-white hover:opacity-80 focus:ring-black",

    secondary:
      "bg-gray-200 text-black hover:bg-gray-300 focus:ring-gray-400",

    danger:
      "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",

    success:
      "bg-green-500 text-white hover:bg-green-600 focus:ring-green-400",
  }

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-7 py-3 text-lg",
  }

  const roundedSizes = {
    sm: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  }

  return (
    <button
      disabled={disabled || loading}
      onClick={onClick}
      className={`
        ${base}
        ${variants[variant]}
        ${sizes[size]}
        ${roundedSizes[rounded]}
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {loading ? "Loading..." : children}
    </button>
  )
}