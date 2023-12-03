export const dynamic = "force-dynamic";
import { products } from "../../db.json";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const res = products.filter(
    (product) => product.id.toString() === id.toString()
  )[0];

  return Response.json({ res });
}
