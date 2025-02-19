import { NextResponse } from "next/server"
import { store } from "@/lib/store"

export async function POST(request: Request) {
  const data = await request.json()
  store.addPod(data)
  return NextResponse.json({ success: true })
}

