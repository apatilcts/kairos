import { NextResponse } from "next/server"
import { store } from "@/lib/store"

export async function GET() {
  const metrics = store.getPods()
  return NextResponse.json(metrics)
}

