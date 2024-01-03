"use client";
import { fetchBlogs } from "@/store/slices/blogsSlice";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <div>
      {/* Link */}
      <div className="flex my-5">
        <Link
          href={"/create"}
          className=" md:w-1/6 sm:w-2/4 text-center rounded-md p-2 m-auto bg-slate-200 font-semibold"
        >
          Add New Blog 🚀
        </Link>
      </div>
      {/* Blogs */}
      <div className="w-full flex  flex-col justify-center items-center">
        {blogs?.map((blog) => (
          <div className="w-3/4 p-4 rounded-md mx-3 my-2 bg-slate-200 flex flex-col justify-center">
            {/* Title and Action */}
            <div className="flex items-center my-3">
              <div className="mr-auto">
                <h2 className="mr-auto font-semibold">{blog.title}</h2>
              </div>
              <Link
                href={`/post/${blog.id}`}
                className="px-4 py-1  text-center text-xl bg-slate-900 rounded-md font-semibold text-slate-200"
              >
                open
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
