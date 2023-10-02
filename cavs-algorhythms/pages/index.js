import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <div className="bg-black text-white font-poppins">
      <title className="bg-black text-white">Cav’s AlgoRhythms</title>
      <div className="container mx-auto p-4">
        <header className="mb-8">
          <h1 className="text-4xl font-bold">Welcome to Cav's AlgoRhythms</h1>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold">About Cav's AlgoRhythms</h2>
          <p>SEO made by Anish Karthik UIN: 631004139</p>
        </section>

        <div className="mb-8">
          <p className="text-lg">Cav's Algorithm</p>
        </div>

        <footer className="mb-8">
          <p>&copy; 2023 Cav's AlgoRhythms. All rights reserved.</p>
        </footer>
      </div>

      <div className="mb-8 text-center">
        Shamelessly link to own page and other popular sites
      </div>

      <div className="flex justify-center space-x-4 mb-8">
        <a href="https://cavs-algorhythms.vercel.app/" title="Cav’s AlgoRhythms" className="text-white hover:underline">
          Cav’s AlgoRhythms
        </a>
        <a href="https://www.facebook.com/" title="Facebook" className="text-white hover:underline">
          Facebook
        </a>
        <a href="https://twitter.com/" title="Twitter" className="text-white hover:underline">
          Twitter
        </a>
        <a href="https://www.linkedin.com/" title="LinkedIn" className="text-white hover:underline">
          LinkedIn
        </a>
        <a href="https://www.instagram.com/" title="Instagram" className="text-white hover:underline">
          Instagram
        </a>
        <a href="https://github.com/" title="GitHub" className="text-white hover:underline">
          GitHub
        </a>
        <a href="https://www.nytimes.com/" title="The New York Times" className="text-white hover:underline">
          The New York Times
        </a>
        <a href="https://www.wikipedia.org/" title="Wikipedia" className="text-white hover:underline">
          Wikipedia
        </a>
        <a href="https://www.khanacademy.org/" title="Khan Academy" className="text-white hover:underline">
          Khan Academy
        </a>
        <a href="https://www.coursera.org/" title="Coursera" className="text-white hover:underline">
          Coursera
        </a>
        <a href="https://www.edx.org/" title="edX" className="text-white hover:underline">
          edX
        </a>
        <a href="https://www.behance.net/" title="Behance" className="text-white hover:underline">
          Behance
        </a>
        <a href="https://dribbble.com/" title="Dribbble" className="text-white hover:underline">
          Dribbble
        </a>
        <a href="https://www.amazon.com/" title="Amazon" className="text-white hover:underline">
          Amazon
        </a>
        <a href="https://www.ebay.com/" title="eBay" className="text-white hover:underline">
          eBay
        </a>
        <a href="https://www.tripadvisor.com/" title="TripAdvisor" className="text-white hover:underline">
          TripAdvisor
        </a>
        <a href="https://www.yelp.com/" title="Yelp" className="text-white hover:underline">
          Yelp
        </a>
      </div>
    </div>
  );
}