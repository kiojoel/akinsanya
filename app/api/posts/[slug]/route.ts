import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import slugify from "slugify";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const post = await prisma.post.findUnique({
      where: { slug: params.slug },
    });

    if (!post) {
      return new NextResponse("Post not found", { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("Request error", error);
    return new NextResponse(
      JSON.stringify({ message: "Error fetching post" }),
      { status: 500 }
    );
  }
}

// PATCH handler to UPDATE a post (Requires authorization)
export async function PATCH(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const session = await getServerSession(authOptions);
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

    const newSlug = slugify(title, { lower: true, strict: true, trim: true });

    const updatedPost = await prisma.post.update({
      where: { slug: params.slug },
      data: {
        title,
        slug: newSlug,
        overview,
        content,
      },
    });

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error("Update error", error);
    return new NextResponse(
      JSON.stringify({ message: "Error updating post" }),
      { status: 500 }
    );
  }
}


export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const session = await getServerSession(authOptions);
  if (session?.user?.name !== process.env.ADMIN_GITHUB_USERNAME) {
    return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  try {
    await prisma.post.delete({
      where: { slug: params.slug },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Delete error", error);
    return new NextResponse(
      JSON.stringify({ message: "Error deleting post" }),
      { status: 500 }
    );
  }
}
