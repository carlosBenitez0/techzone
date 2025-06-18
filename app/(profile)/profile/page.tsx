import { Footer, Navbar } from "@/app/components/shared";
import {Profile} from "./_components/Profile/Profile";
const page = () => {
    return (
        <>
            <Navbar />
            <Profile />
            <Footer />
        </>
    );
};

export default page;
