export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <div className="max-w-2xl text-center p-6">
        <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Chris Wright</h1>
        <p className="text-lg mb-6">I&apos;m a developer and creator. This is my portfolio built with Next.js and hosted on Vercel.</p>
        <a href="mainto:jpchriswright@icloud.com" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">Get in touch</a>
      </div>
    </main>
  );
}