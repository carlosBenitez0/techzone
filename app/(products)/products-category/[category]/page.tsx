"use client";
import { useParams } from "next/navigation";
import { ProductsCategory } from "../_components/ProductsCategory/ProductsCategory";
import { Footer, Navbar } from "@/app/components/shared";

const Page = () => {
  const { category } = useParams();
  return (
    <>
      <Navbar />
      <ProductsCategory category={category} />
      <Footer />
    </>
  );
};

export default Page;
