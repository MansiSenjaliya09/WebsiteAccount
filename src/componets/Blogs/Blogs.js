import React from 'react';
import './Blogs.css';
import account2 from '../../assets/account-bolg2.jpg'
import account3 from '../../assets/account-blog3.jpg'
import account4 from '../../assets/account-blog5.jpg'

const blogsData = [
  {
    title: "Account Management Tips",
    date: "May 12, 2019",
    author: "Alison Fox",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: account4

  },
  {
    title: "Account Management Tips",
    date: "May 12, 2019",
    author: "Alison Fox",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: account2
  },
  {
    title: "Account Management Tips",
    date: "May 12, 2019",
    author: "Alison Fox",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: account3
  }
];

function Blogs() {
  return (
    <div className="blogs" id='blogs'>
    <h2>Blogs</h2>
    <div className="blogs-list">
      {blogsData.map((blog, index) => (
        <div className="blog" key={index}>
          <img src={blog.imgSrc} alt="Blog" />
          <div className="blog-content">
            <h3>{blog.title}</h3>
            <p><span className="blog-date">{blog.date}</span> by 
            <span className="blog-author">{blog.author}</span></p>
            <p>{blog.description}</p>
          </div>
        </div>
      ))}
    </div>
    {/* <a href="/all-blogs" className="view-all">View All</a> */}
  </div>
  );
}

export default Blogs;
