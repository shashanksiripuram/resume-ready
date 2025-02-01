"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Build Your Professional Resume in Minutes
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Create a polished resume quickly and easily, impress potential employers, and get noticed.
        </p>
        <Link href="/start" className="bg-yellow-400 text-indigo-900 py-3 px-6 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300">
          
            Get Started
          
        </Link>
      </div>
    </section>
  );
}
