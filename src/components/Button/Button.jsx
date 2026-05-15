export default function Button({ children }) {
  return (
    <button className="bg-black text-white px-5 py-2 rounded-lg hover:opacity-80">
      {children}
    </button>
  )
}