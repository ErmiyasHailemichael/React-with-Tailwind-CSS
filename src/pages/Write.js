import { useState } from "react";

export default function Write({ createBlogs }) {
  const [form, setForm] = useState({
    title: "",
    body: "",
    author: "",
  });

  const handleChange = (e) => {  // publish page
    setForm((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }

  const handleSubmit = (e) => { // publish page
    e.preventDefault();
    createBlogs(form);
    setForm({
      title: '',
      body: '',
      author: ''
    });
  };

  return (
    <section className='container'>
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        value={form.title}
        onChange={handleChange}
        placeholder='Title'
      />
      <input
        type='text'
        name='body'
        value={form.body}
        onChange={handleChange}
        placeholder='Body'
      />
      <input
        type='text'
        name='author'
        value={form.author}
        onChange={handleChange}
        placeholder='Author'
      />
      <input type='submit' value='Publish' />
    </form>
    
  </section>
  )























}


