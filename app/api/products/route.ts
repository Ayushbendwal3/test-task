export const dynamic = "force-dynamic";
import { products } from "../db.json";

export async function GET(request: Request) {
  return Response.json(products);
}
