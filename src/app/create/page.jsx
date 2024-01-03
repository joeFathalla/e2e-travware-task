"use client";

import { addNewBlog } from "@/store/slices/blogsSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import BlogForm from "@/app/components/BlogForm";

const AddBlog = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.blogs);

  const handleSubmit = (newBlog) => {
    dispatch(
      addNewBlog({
        title: newBlog.title,
        content: newBlog.content,
      })
    );
  };

  useEffect(() => {
    if (loading === true) {
      toast.loading("Creating new Blog 🚀", { id: "1" });
    } else if (loading === false) {
      if (error === true) {
        toast.error("Error Creating new blog", { id: "1" });
      } else {
        toast.success("Blog Posted Successfully", { id: "1" });
        router.push("/");
      }
    }
    return () => {
      toast.dismiss("1");
    };
  }, [loading, error]);

  return (
    <div>
      <Toaster />
      <div className="w-full m-auto flex my-4">
        <div className="flex flex-col justify-center items-center m-auto w-full">
          <div className="flex w-full justify-start my-5">
            <Link
              href={"/"}
              className=" text-center rounded-md p-2 text-slate-200 font-semibold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
            </Link>
          </div>
          <p className="text-2xl text-slate-200 font-bold p-3">
            Add A New Blog
          </p>
          <BlogForm isCreate={true} createHandler={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
