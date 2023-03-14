import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Index({blogs, createBlogs}) { // publish page
  const [form, setForm] = useState({
    title: '',
    body: '',
    author: '',  
  });

  

  const reading = (str, num) => {
    return str?.length > num ? str.slice(0, num) + '...' : str;
  }

  const wordCount = (str) => {
    return str?.split(' ').length;
  }

  const timeToRead = (str) => {
    const wordsPerMinute = 200;
    const words = wordCount(str);
    return Math.ceil(words / wordsPerMinute);
  }


  const loaded = () => 
    blogs.map((blog) => (
      <>
      {console.log(blog?.id)}
      <div key={blog._id} className='max-w-xl mx-auto mt-10 bg-white rounded-xl shadow-md overflow-hidden'>
        <div className='p-6'>
        
        <Link to={`/blog/${blog.id}`}>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{blog.title}</h1>
          
        </Link>
        <h3 className="text-gray-600 mb-2">{blog.author}</h3>
        <div className=' border  border-gray-300 my-3 ' ></div>
        <p className="text-gray-800 mb-2">{reading(blog.body, 50)}</p>
        <span className="text-gray-600">{timeToRead(blog.body)} min read</span>
        
        <Link to={`/blog/${blog.id}`} className="block mt-4 text-blue-500 hover:text-blue-700 font-semibold">
          Read More
        </Link>
        
      </div>
      </div>
      </>
    ));

  const loading = () => {
    return <h1>Loading...</h1>;
  } 

  return (
    <>
    
      {blogs ? loaded() : loading()}
      </>
  );
}
