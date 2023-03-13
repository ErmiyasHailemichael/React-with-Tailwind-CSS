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
      <div key={blog._id} className='card'>
        <Link to={`/blog/${blog.id}`}>
          <h1>{blog.title}</h1>
        </Link>
        <h3>{blog.author}</h3>
        <p>{reading(blog.body, 50)}</p>
        <span>{timeToRead(blog.body)} min read</span>
        <Link to={`/blog/${blog.id}`} className="read-more-link">
          Read More
        </Link>
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
