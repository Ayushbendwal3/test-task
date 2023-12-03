/* eslint-disable @next/next/no-img-element */
"use client";

import Loader from "@/app/components/Loader";
import Rating from "@/app/components/Rating";
import { useProductDetails } from "@/app/hooks/useProductDetail";

export default function Page({ params }: { params: { id: string } }) {
  const { data: product, isError, isLoading } = useProductDetails(params.id);

  if (isLoading) return <Loader />;
  if (isError) return <p>Failed to fetch Products</p>;

  console.log(product);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {product?.title}
            </h1>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              ${product?.price}
            </h2>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <span className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            {product?.description}
            {product && <Rating rating={product?.rating} />}
          </span>
        </div>
        <div className="flex flex-wrap -m-4">
          {product?.images.map((img) => (
            <div
              key={`${img}-${Math.random()}`}
              className="xl:w-1/4 md:w-1/2 p-4"
            >
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={img}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  {product?.brand}
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {product?.title}
                </h2>
                <p className="leading-relaxed text-base">
                  {product?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
