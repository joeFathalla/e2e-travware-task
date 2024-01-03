"use client";
import { fetchBlogs } from "@/store/slices/blogsSlice";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BlogList from "@/app/components/BlogList";
import CustomLoading from "@/app/components/CustomLoading";

export default function Home() {
  const dispatch = useDispatch();
  const { blogs, fetchLoading } = useSelector((state) => state.blogs);
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <div>
      {/* Link */}
      <div className="flex justify-center md:justify-end my-5">
        <Link
          href={"/create"}
          className=" md:w-1/4 sm:w-2/4 text-center rounded-md p-2  bg-slate-200 font-semibold"
        >
          Add New Blog 🚀
        </Link>
      </div>
      {/* Blogs */}
      {fetchLoading && (
        <div className="flex justify-center items-center w-full">
          <CustomLoading />
        </div>
      )}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
