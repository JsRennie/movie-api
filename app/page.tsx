import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div>
        <h1 className="text-3xl font-bold text-center">
          Hey There!!! Welcome to my Movie Search API
        </h1>
        <p className="text-lg my-8 text-center">
          Browse The Latest Movies Available
        </p>
        <div className="flex justify-center">
          <button
            type="button"
            className="py-3 px-2 text-white bg-blue-500 rounded-lg w-1/5"
          >
            <Link href={"/movies"}>Explore</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
