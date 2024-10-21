import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
                <a className="text-2xl font-bold text-blue-600">My Blog</a>
              </Link>
            </div>
            <div className="hidden md:flex space-x-4">
              <Link href="/">
                <a className="text-gray-800 hover:text-blue-500">Home</a>
              </Link>
              <Link href="/blog">
                <a className="text-gray-800 hover:text-blue-500">Blog</a>
              </Link>
              <Link href="/about">
                <a className="text-gray-800 hover:text-blue-500">About</a>
              </Link>
              <Link href="/contact">
                <a className="text-gray-800 hover:text-blue-500">Contact</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog!</h1>
        <p className="text-lg mb-6">Sharing my tech journey 🚀</p>
        <Link href="/blog">
          <a className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Go to Blog
          </a>
        </Link>
      </div>

      {/* Footer */}
      <footer className="w-full bg-white py-4">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} My Blog. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
