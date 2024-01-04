"use client";

import { fetchBlog, updateBlog } from "@/store/slices/blogsSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import BlogForm from "@/app/components/BlogForm";
import CustomLoading from "@/app/components/CustomLoading";

const EditBlog = ({ params }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { blog, error, loading, fetchLoading, isUpdated } = useSelector(
    (state) => state.blogs
  );
  useEffect(() => {
    dispatch(fetchBlog(params.id));
  }, [dispatch]);

  const handleSubmit = (editBlog) => {
    const blogId = params.id;
    dispatch(updateBlog({ id: blogId, blog: editBlog }));
  };

  useEffect(() => {
    if (loading === true) {
      toast.loading("Updating Blog 🚀", { id: "1" });
    } else if (loading === false) {
      if (error === true) {
        toast.error("Error updating blog", { id: "1" });
      } else if (isUpdated) {
        toast.success("Blog Updated Successfully", { id: "1" });
        router.push(`/post/${params.id}`);
      }
    }
    return () => {
      toast.dismiss("1");
    };
  }, [loading, error, isUpdated]);

  return (
    <div>
      <Toaster />
      <div className="w-full m-auto flex my-4">
        <div className="flex flex-col justify-center items-center m-auto w-full">
          <div className="flex w-full justify-start my-5">
            <Link
              href={`/post/${params.id}`}
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
          <p className="text-2xl text-slate-200 font-bold p-3">Edit Blog</p>
          {fetchLoading && (
            <div className="flex justify-center items-center w-full">
              <CustomLoading />
            </div>
          )}
          {blog && (
            <BlogForm
              isCreate={false}
              blog={blog}
              updateHandler={handleSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
