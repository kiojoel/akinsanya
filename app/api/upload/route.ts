// FILE: app/api/upload/route.ts

import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { customAlphabet } from "nanoid";

// Create a custom nanoid generator for unique filenames
const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 12);

export async function POST(request: Request): Promise<NextResponse> {
  const file = request.body;
  const contentType = request.headers.get("content-type");
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename");

  if (!file || !contentType || !filename) {
    return NextResponse.json(
      { message: "Missing file, content type, or filename." },
      { status: 400 }
    );
  }

  // Generate a unique path for the blob
  const uniquePath = `${nanoid()}-${filename}`;

  const blob = await put(uniquePath, file, {
    contentType,
    access: "public",
  });

  return NextResponse.json(blob);
}
