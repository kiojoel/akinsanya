import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import slugify from "slugify";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Request error", error);
    return new NextResponse("Error fetching posts", { status: 500 });
  }
}

// POST handler to create a new post
export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  // Authorization check
  if (session?.user?.name !== process.env.ADMIN_GITHUB_USERNAME) {
    return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  try {
    const data = await request.json();
    const { title, overview, content } = data;

    if (!title || !overview || !content) {
      return new NextResponse(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    const slug = slugify(title, { lower: true, strict: true, trim: true });

    const newPost = await prisma.post.create({
      data: {
        title,
        slug,
        overview,
        content,
      },
    });

    return NextResponse.json(newPost);
  } catch (error: any) {
    console.error("Post creation error", error);
    if (error.code === "P2002") {
      // Prisma unique constraint violation
      return new NextResponse(
        JSON.stringify({ message: "A post with this title already exists." }),
        { status: 409 }
      );
    }
    return new NextResponse(
      JSON.stringify({ message: "Error creating post" }),
      { status: 500 }
    );
  }
}
