type Props = {}

function Menu({}: Props) {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-4 flex flex-col">
      <h1 className="text-xl font-bold mb-6">Menu</h1>
      <nav className="flex flex-col gap-2">
        <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-800">
          Home
        </a>
        <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-800">
          Profile
        </a>
        <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-800">
          Settings
        </a>

        <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-800">
          Settings
        </a>
      </nav>
    </div>
  )
}

export default Menu