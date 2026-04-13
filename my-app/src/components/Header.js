export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white p-6 shadow-md">
      <h1 className="text-2xl font-bold text-indigo-600">
        MyBlog
      </h1>

      <nav className="hidden space-x-6 md:flex">
        <a href="#" className="hover:text-indigo-500">
          Home
        </a>
        <a href="#" className="hover:text-indigo-500">
          Articles
        </a>
        <a href="#" className="hover:text-indigo-500">
          About
        </a>
      </nav>

      <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white">
        Subscribe
      </button>
    </header>
  );
}