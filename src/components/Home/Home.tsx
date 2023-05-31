import React from "react";

export default function Home() {
  return (
    <main className="flex items-center justify-center mx-auto max-w-5xl min-h-screen py-20 px-8">
      <div className="text-center mb-20">
        <img
          loading="lazy"
          className="w-44 h-44 rounded-full p-1 bg-gradient-to-r from-green-400 to-blue-500 dark:from-orange-500 dark:to-blue-400 mx-auto"
          alt="profile"
          src="https://cdn.discordapp.com/avatars/358382764959203338/d175e81df15d96edfc1d68a067e4a138.webp?size=512"
        />
        <h1 className="font-bold text-4xl dark:text-white mt-4">Bi Rong Liu</h1>
        <p className="text-2xl text-slate-600 dark:text-slate-400">Computer Science Student</p>
      </div>
    </main>
  );
}
