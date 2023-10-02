// Blog.js
import React from 'react';

const Blog = () => {
  return (
    <div className="bg-black text-white font-poppins">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>

        <article className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Exploring the Harmony of Algorithms in Music</h2>
          <p className="text-gray-400 mb-2">Published on October 15, 2023</p>
          <p>
            At Cav's AlgoRhythms, we delve into the fascinating world where algorithms meet music. Discover how our unique algorithmic compositions are created, blending art and technology to produce harmonious rhythms that captivate the soul.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Behind the Scenes: Creating Algorithmic Beats</h2>
          <p className="text-gray-400 mb-2">Published on October 22, 2023</p>
          <p>
            Join us on a journey behind the scenes as we unveil the process of crafting algorithmic beats. From selecting algorithms to fine-tuning the rhythms, our artists and developers collaborate to bring you a one-of-a-kind musical experience.
          </p>
        </article>

        {/* Add more articles as needed */}
      </div>
    </div>
  );
};

export default Blog;





