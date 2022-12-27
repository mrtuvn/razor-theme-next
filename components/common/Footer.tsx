import type { NextComponentType } from "next";
import Image from "next/image";

const Footer: NextComponentType = () => {
    return (
        <>
            <footer className="bg-footer text-white">
                <div className="container mx-auto">
                    <div className="topFooter">
                        <Image
                            src="/vercel.svg"
                            width="194"
                            height="26"
                            alt="logo"
                        />

                        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 pb-[50px] pt-10 md:pt-16"></div>
                    </div>
                    <div className="bottomFooter flex between">
                        <div className="copyright"></div>
                        <div className="paymentsSupport"></div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
