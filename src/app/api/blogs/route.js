import { addBlog, getBlogs } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const blogs = getBlogs();
    return NextResponse.json({ message: "OK", blogs }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Error", err },
      {
        status: 500,
      }
    );
  }
};

export const POST = async (req, res) => {
  const { title, content } = await req.json();
  try {
    const blog = { title, content, id: Date.now().toString() };
    addBlog(blog);
    return NextResponse.json(
      { message: "Blog created Successfully", blog },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Error", err },
      {
        status: 500,
      }
    );
  }
};
