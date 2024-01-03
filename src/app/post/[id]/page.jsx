"use client";

import Blog from "@/app/components/Blog";
import CustomLoading from "@/app/components/CustomLoading";
import { deleteBlog, fetchBlog } from "@/store/slices/blogsSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";

const SingleBlog = ({ params }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { blog, error, loading, fetchLoading } = useSelector(
    (state) => state.blogs
  );
  useEffect(() => {
    dispatch(fetchBlog(params.id));
  }, [dispatch]);

  const handleUpdate = () => {
    router.push("/post/" + params.id + "/edit");
  };
  const handleDelete = () => {
    toast((t) => (
      <div>
        <span>Are You sure you want to Delete this Blog ?</span>
        <div className="flex justify-around items-center w-full">
          <button
            className="font-semibold px-4 py-2 shadow-xl bg-red-400 rounded-lg  m-auto mt-2 hover:bg-red-500 flex-1 mx-5"
            onClick={() => deleteHandler(t.id)}
          >
            Delete
          </button>
          <button
            className="font-semibold px-4 py-2 shadow-xl bg-blue-400 rounded-lg  m-auto mt-2 hover:bg-blue-500 flex-1 mx-5"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  useEffect(() => {
    if (loading === true) {
      toast.loading("Deleting Blog 🚀", { id: "1" });
    } else if (loading === false) {
      if (error === true) {
        toast.error("Error something went wrong", { id: "1" });
      } else if (!error && loading === false) {
        toast.success("Blog Deleted Successfully", { id: "1" });
        router.push("/");
      }
    }
    return () => {
      toast.dismiss("1");
    };
  }, [loading, error]);

  const deleteHandler = (id) => {
    toast.dismiss(id);
    dispatch(deleteBlog(params.id));
  };
  return (
    <Fragment>
      <Toaster />
      <div className="flex w-full justify-start my-5">
        <Link
          href={`/`}
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
      <div className="w-full m-auto flex my-4">
        {fetchLoading && (
          <div className="flex justify-center items-center w-full">
            <CustomLoading />
          </div>
        )}
        {blog && (
          <Blog
            blog={blog}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        )}
      </div>
    </Fragment>
  );
};

export default SingleBlog;
