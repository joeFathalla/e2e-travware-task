"use client";

const Blog = ({ blog, handleDelete, handleUpdate }) => {
  return (
    <div className="flex flex-col justify-center items-center m-auto w-full">
      <h2 className="text-2xl text-slate-200 font-bold p-3">{blog.title}</h2>
      <p className="w-3/4 text-slate-300 m-5 mb-10">{blog.content}</p>
      <div className="flex justify-center items-center w-full">
        <button
          onClick={handleUpdate}
          className="font-semibold px-4 py-2 shadow-xl bg-blue-400 rounded-lg  m-auto mt-2 hover:bg-blue-500 w-1/2 md:w-1/4 mx-5"
        >
          update
        </button>
        <button
          onClick={handleDelete}
          className="font-semibold px-4 py-2 mx-5 shadow-xl bg-red-400 rounded-lg  m-auto mt-2 hover:bg-red-500 w-1/2 md:w-1/4"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Blog;
