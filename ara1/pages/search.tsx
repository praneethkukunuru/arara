import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import useSWR from "swr";
import StarRatings from "react-star-ratings";
import { fetcher } from "./util";

const inter = Inter({ subsets: ["latin"] });


export default function Search() {
  const [search, setSearch] = useState("");

  const [results, setResults] = useState([])


  return (
    <div className="flex flex-col">
        <div className="p-4">
          <h1 className="text-3xl text-white rounded-xl font-bold float-left p-2 hover:text-purple-700 transition duration-700 ease-in-out">
            <a className="" href="/">
              Home
            </a>
          </h1>
        </div>

        <h1 className="text-white hover:text-purple-700 transition duration-700 ease-in-out text-6xl pb-10 font-bold text-center">
          <a className="" href="/add">
            Search
          </a>
        </h1>
      <div className="grid gap-6 mb-6 px-20 pb-10 lg:grid-cols-1">
        <div className="py-1">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
          </label>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Anime Title"
            required
          ></input>
        </div>
        
        
        
    
    
    
        <button className="max-w-fit mx-auto"
          onClick={async() => {
            const resp = await fetch("https://ara-flask-production.up.railway.app/search?query="+search)
            const data = await resp.json()

            setResults(data)
          }
            
          }
        >
            <h1 className="text-2xl border rounded-xl max-w-fit mx-auto p-5 hover:text-black hover:bg-white">Enter</h1>
        </button>
        <div className="mt-6 border rounded-xl flex max-w-md flex-wrap items-start justify-around  sm:w-full">
    <div className="mt-6 w-11/12 sm:w-96 rounded-xl p-6 text-center text-white transition duration-1000 ease-in-out focus:text-blue-600">
<h3 className="text-3xl font-bold"> Your Recommendations</h3>
<p className="mt-4 text-xl"></p>
</div>
{results &&
results.map((anime) => (
<a
href={anime.link}
className="mt-6 w-11/12 sm:w-96 rounded-xl border p-6 text-left text-white hover:bg-white hover:text-blue-600 transition duration-1000 ease-in-out focus:text-blue-600"
>
<img
className="flex-none float-right object-cover w-1/2 sm:w-1/3 max-w-full self-start"
width="auto"
height="auto"
src={anime.img_url}
alt={data.title}
style={{ borderRadius: "8px" }}
></img>
<h3 className="pb-4 text-2xl font-bold">{anime.title}</h3>
<StarRatings
rating={anime.score}
starRatedColor="#2563eb"
numberOfStars={5}
name="rating"
starDimension="30px"
/>
</a>
))}
</div>


      </div>
    </div>
  );
}



