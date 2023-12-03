/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import Rating from "../Rating";
import { CardsProps } from "./Card.types";

const Card: React.FC<CardsProps> = ({
  id,
  description,
  thumbnail,
  title,
  price,
  rating,
  category,
}) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="p-8 rounded-t-lg h-52"
          src={thumbnail}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <a href="#">
          <h6 className="text-sm font-light tracking-tight text-gray-900 dark:text-white">
            {description}
          </h6>
        </a>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
          {category}
        </span>
        <Rating rating={rating} />
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <Link
            href={`/products/${id}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Go to Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
