"use client";
import { Footer, Navbar } from "@/app/components/shared";
import { ProductDetails } from "../_components/ProductDetails/ProductDetails";
import { useParams } from "next/navigation";

const page = () => {
    //obtener el id de la url
    const { id } = useParams();
    return (
        <>
            <Navbar />
            <ProductDetails productId={id as string} />
            <Footer />
        </>
    );
};

export default page;
