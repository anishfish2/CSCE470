import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'tailwindcss/tailwind.css'
import 'typeface-poppins';
import Image from "next/image";
import Link from 'next/link';

import recordplayer from "./vinyl-records-record-collection.gif" 
export default function Home() {
  return (
    <div className="bg-black text-white font-poppins">
      <div className='"bg-black text-white font-poppins flex flex-col md:flex-row" items-center'>
        <title className="bg-black text-white">Cav’s AlgoRhythms</title>
        <div className="container mx-auto p-4 flex-1">

          <header className="bg-black text-white font-poppins p-4">
            <nav className="flex items-center justify-between">
              <Link href="/">
                <div className="text-white text-lg font-bold">Cav’s AlgoRhythms</div>
              </Link>

              <div className="flex space-x-4">
                <Link href="/services">
                  <div className="text-white hover:underline">Services</div>
                </Link>
                <Link href="/contact">
                  <div className="text-white hover:underline">Contact</div>
                </Link>
                <Link href="/blog">
                  <div className="text-white hover:underline">Blog</div>
                </Link>
              </div>
            </nav>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-bold">About Cav's AlgoRhythms</h2>
            <p>Experience the rhythm of algorithms at Cav's AlgoRhythms, where technology and creativity converge. Our store is dedicated to bringing you the latest in algorithmic music, innovative solutions, and rhythmic computing.</p>
          </section>

          <div className="mb-8">
            <p className="text-lg">Explore Cav's Algorithmic World</p>
            <p>Dive into the enchanting world of Cav's Algorithms, where each composition is a unique blend of art and technology. From Algorithmic Beats to Rhythmic Computing, we offer a diverse collection that resonates with both music enthusiasts and tech aficionados.</p>
          </div>

          <footer className="mb-8">
            <p>&copy; 2023 Cav's AlgoRhythms. All rights reserved.</p>
          </footer>
        </div>

        <div className="hidden md:block flex-1">
          <Image
            src={recordplayer}
            alt="recordplayer"
          ></Image>
        </div>
        <a href="https://cavs-algorhythms.vercel.app/" title="Cav’s AlgoRhythms" className="text-white hover:underline mx-2">
          Cav’s AlgoRhythms
        </a>
      </div>
      <div className="mb-8 text-center">
        Other cool links:
        
        <a href="https://www.facebook.com/" title="Facebook" className="text-white hover:underline mx-2">
          Facebook
        </a>
        <a href="https://twitter.com/" title="Twitter" className="text-white hover:underline mx-2">
          Twitter
        </a>
        <a href="https://www.linkedin.com/" title="LinkedIn" className="text-white hover:underline mx-2">
          LinkedIn
        </a>
        <a href="https://www.instagram.com/" title="Instagram" className="text-white hover:underline mx-2">
          Instagram
        </a>
        <a href="https://github.com/" title="GitHub" className="text-white hover:underline mx-2">
          GitHub
        </a>
        <a href="https://www.nytimes.com/" title="The New York Times" className="text-white hover:underline mx-2">
          The New York Times
        </a>
        <a href="https://www.wikipedia.org/" title="Wikipedia" className="text-white hover:underline mx-2">
          Wikipedia
        </a>
        <a href="https://www.khanacademy.org/" title="Khan Academy" className="text-white hover:underline mx-2">
          Khan Academy
        </a>
        <a href="https://www.coursera.org/" title="Coursera" className="text-white hover:underline mx-2">
          Coursera
        </a>
        <a href="https://www.edx.org/" title="edX" className="text-white hover:underline mx-2">
          edX
        </a>
        <a href="https://www.behance.net/" title="Behance" className="text-white hover:underline mx-2">
          Behance
        </a>
        <a href="https://dribbble.com/" title="Dribbble" className="text-white hover:underline mx-2">
          Dribbble
        </a>
        <a href="https://www.amazon.com/" title="Amazon" className="text-white hover:underline mx-2">
          Amazon
        </a>
        <a href="https://www.ebay.com/" title="eBay" className="text-white hover:underline mx-2">
          eBay
        </a>
        <a href="https://www.tripadvisor.com/" title="TripAdvisor" className="text-white hover:underline mx-2">
          TripAdvisor
        </a>
        <a href="https://www.yelp.com/" title="Yelp" className="text-white hover:underline mx-2">
          Yelp
        </a>
      </div>
    </div>
  );
}