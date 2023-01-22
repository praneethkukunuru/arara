import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Admin Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <h1 className="text-4xl sm:text-6xl text-white font-bold text-white hover:text-purple-700 transition duration-700 ease-in-out">
          <a className="" href="/">
            Welcome Admin
          </a>
        </h1>
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <Link
            href="/add"
            className="mt-6 w-11/12 sm:w-96 rounded-xl border p-6 text-left text-white hover:bg-white hover:text-purple-600 transition duration-1000 ease-in-out focus:text-purple-600"
          >
            <h3 className="text-2xl font-bold">Add &rarr;</h3>
            <p className="mt-4 text-xl">Add new anime to database.</p>
          </Link>

          <a
            href="/search"
            className="mt-6 w-11/12 sm:w-96 rounded-xl border p-6 text-left text-white hover:bg-white hover:text-purple-600 transition duration-1000 ease-in-out focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Search &rarr;</h3>
            <p className="mt-4  text-xl">Search through anime in database.</p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
