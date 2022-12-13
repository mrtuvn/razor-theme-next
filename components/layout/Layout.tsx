import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

type Props = {
    children?: any;
};

const Layout: React.FC<Props> = ({ children }: any) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="header">
                <Header />
            </header>
            <main className="main relative flex-grow">{children}</main>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
