import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function AddAnime() {
  const [title, set_title] = useState("");
  const [synopsis, set_synopsis] = useState("");
  const [genre, set_genre] = useState("");
  const [score, set_score] = useState("");
  const [id, set_id] = useState("");
  const [img_url, set_img_url] = useState("");
  const [members, set_members] = useState("");

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
            Add Anime
          </a>
        </h1>
      <div className="grid gap-6 mb-6 px-20 pb-10 lg:grid-cols-1">
        <div className="py-1">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Anime Title
          </label>
          <input
            value={title}
            onChange={(e) => set_title(e.target.value)}
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Anime Title"
            required
          ></input>
        </div>
        <div className="py-1">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {" "}
            Synopsis
          </label>
          <input
            value={synopsis}
            onChange={(e) => set_synopsis(e.target.value)}
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Synopsis"
            required
          ></input>
        </div>
        <div className="py-1">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {" "}
            Genre
          </label>
          <input
            value={genre}
            onChange={(e) => set_genre(e.target.value)}
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder='Enter Genres in format: ["Genre 1" , "Genre 2]'
            required
          ></input>
        </div>
        <div className="py-1">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Score
          </label>
          <input
            value={score}
            onChange={(e) => set_score(e.target.value)}
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Anime Rating on a 0-5 Scale"
            required
          ></input>
        </div>
        <div className="py-1">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            ID
          </label>
          <input
            value={id}
            onChange={(e) => set_id(e.target.value)}
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Anime ID"
            required
          ></input>
        </div>
        <div className="py-1">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Members
          </label>
          <input
            value={members}
            onChange={(e) => set_members(e.target.value)}
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter number of viewers"
            required
          ></input>
        </div>
        <div className="py-1">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Image Url
          </label>
          <input
            value={img_url}
            onChange={(e) => set_img_url(e.target.value)}
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Image URL"
            required
          ></input>
        </div>
        <button className="max-w-fit mx-auto"
          onClick={() => {
            fetch("https://ara-flask-production.up.railway.app/anime", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    synopsis,
                    genre: JSON.parse(genre),
                    score: parseFloat(score),
                    id: parseInt(id),
                    img_url,
                    members: parseInt(members),
                    aired: "",
                  }),
              })
              

          }
            
          }
        >
            <h1 className="text-2xl border rounded-xl max-w-fit mx-auto p-5 hover:text-black hover:bg-white">Submit</h1>
        </button>
      </div>
    </div>
  );
}
