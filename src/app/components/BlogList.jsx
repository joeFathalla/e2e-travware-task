"use client";

import Link from "next/link";

const BlogList = ({ blogs }) => {
  return (
    <div>
      {blogs.length > 0 ? (
        <ul className="blog-list w-full flex  flex-col md:flex-row justify-center md:justify-start items-center md:flex-wrap">
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="w-3/4 md:w-[40%] p-4 rounded-md mx-3 my-2 bg-slate-200 flex flex-col justify-center"
            >
              <div className="md:flex items-center my-3 flex-1">
                <div className="mr-auto flex-1">
                  <h2 className="mr-auto font-semibold md:text-sm">
                    {blog.title}
                  </h2>
                </div>
                <div className="text-center mt-5 md:my-auto">
                  <Link
                    href={`/post/${blog.id}`}
                    className="px-4 py-1  text-center text-xl bg-slate-900 rounded-md font-semibold text-slate-200"
                  >
                    open
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="blog-list w-full flex flex-col justify-center items-center">
          <div className="w-3/4 p-4 rounded-md mx-3 my-2 bg-slate-200 text-center">
            <h2 className="font-semibold">No Blogs, Start add new one </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogList;
