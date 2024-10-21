import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Blog!</h1>
      <p className="text-lg mb-6">Sharing my tech journey and projects 🚀</p>
      <Link href="/blog">
        <a className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Go to Blog</a>
      </Link>
    </div>
  );
}
