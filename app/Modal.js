export default function Modal({ children }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-4 px-16 rounded-lg max-w-xl overflow-y-auto h-95">
        {  children  }
      </div>
    </div>
  )
}
