import { deleteBlog, getBlogById, updateBlog } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const id = req.url.split("blogs/")[1];
    const blog = getBlogById(id);
    if (!blog) {
      return NextResponse.json(
        { message: "Error blog not found" },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json({ message: "OK", blog }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Error", err },
      {
        status: 500,
      }
    );
  }
};

export const PUT = async (req, res) => {
  try {
    const id = req.url.split("blogs/")[1];
    const { title, content } = await req.json();
    updateBlog(id, title, content);
    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Error", err },
      {
        status: 500,
      }
    );
  }
};

export const DELETE = async (req, res) => {
  try {
    const id = req.url.split("blogs/")[1];
    deleteBlog(id);
    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Error", err },
      {
        status: 500,
      }
    );
  }
};
