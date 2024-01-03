"use client";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  title: yup.string().required("title can't be empty"),
  content: yup.string().required("Content can't be empty"),
});

const BlogForm = ({ isCreate, blog, createHandler, updateHandler }) => {
  const formik = useFormik({
    initialValues: {
      title: isCreate ? "" : blog.title,
      content: isCreate ? "" : blog.content,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    if (isCreate) {
      createHandler(values);
    } else {
      updateHandler(values);
    }
  };

  return (
    <form className="mb-10 w-full" onSubmit={formik.handleSubmit}>
      <div className="mt-5">
        <label
          className={`text-slate-300 ${
            formik.touched.title &&
            Boolean(formik.errors.title) &&
            "text-red-500"
          }`}
        >
          Title
        </label>
        <input
          id="title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          type="text"
          placeholder="Enter Title "
          className={`rounded-md px-4 w-full py-2 my-2 ${
            formik.touched.title &&
            Boolean(formik.errors.title) &&
            "border-red-500"
          }`}
        />
        {formik.touched.title && (
          <label className="text-red-500">{formik.errors.title}</label>
        )}
      </div>
      <div className="mt-5">
        <label
          className={`text-slate-300 ${
            formik.touched.content &&
            Boolean(formik.errors.content) &&
            "text-red-500"
          }`}
        >
          Content
        </label>
        <textarea
          id="content"
          name="content"
          value={formik.values.content}
          onChange={formik.handleChange}
          type="text"
          placeholder="Enter Content "
          className={`rounded-md px-4 w-full py-2 my-2 ${
            formik.touched.content &&
            Boolean(formik.errors.content) &&
            "border-red-500"
          }`}
        ></textarea>
        {formik.touched.content && (
          <label className="text-red-500">{formik.errors.content}</label>
        )}
      </div>

      <div className="w-full mt-10 text-center">
        <button
          type="submit"
          className="font-semibold px-4 py-2 shadow-xl bg-slate-200 rounded-lg m-auto hover:bg-slate-100"
        >
          {isCreate ? "Create" : "Update"}
        </button>
      </div>
    </form>
  );
};

export default BlogForm;
