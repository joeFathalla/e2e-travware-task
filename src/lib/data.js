let blogs = [
  { id: "0", title: "My First blog", content: "Hello " },
  { id: "2", title: "My Second blog", content: "Hiii" },
];

// handlers
export const getBlogs = () => blogs;

export const addBlog = (blog) => {
  blogs.push(blog);
};

export const deleteBlog = (id) => {
  blogs = blogs.filter((blog) => blog.id !== id);
};

export const updateBlog = (id, title, content) => {
  const blogIndex = blogs.findIndex((blog) => blog.id !== id);

  if (blogIndex !== -1) {
    blogs[blogIndex].title = title;
    blogs[blogIndex].content = content;
  } else {
    throw new Error("No BLOG Found");
  }
};

export const getBlogById = (id) => {
  const blog = blogs.find((blog) => blog.id === id);
  return blog;
};
