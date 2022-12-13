import type { NextComponentType } from "next";
import Image from "next/image";
import Cart from "@/components/common/Cart/Cart";
import Search from "@/components/common/Search/Search";
import MyAccount from "@/components/common/MyAccount/MyAccount";
import Nav from "@/components/common/Nav/Nav";

const Header: NextComponentType = () => {
    return (
        <>
            <div className="header flex flex-col">
                <div className="top-header"></div>
                <div className="main-header">
                    <Image
                        src="/vercel.svg"
                        width="194"
                        height="26"
                        alt="logo"
                    />

                    <Search />

                    <div className="right-actions ">
                        <MyAccount />
                        <Cart />
                    </div>
                </div>
                <div className="nav-area">
                    <Nav />
                </div>
            </div>
        </>
    );
};

export default Header;
