import type { NextComponentType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useId } from 'react';
import Newsletter from '@/components/common/Newsletter';

const yearNow = new Date().getFullYear();

type Service = {
    id: number,
    name: string
}[]

const services : Service= [
    {
        id: 1,
        name: 'HTML, CSS, Theme Development',
    },
    {
        id: 2,
        name: 'Javascript',
    },
    {
        id: 3,
        name: 'ReactJS/Nextjs',
    },
    {
        id: 4,
        name: 'Magento 2 customises',
    },
];

const Footer: NextComponentType = () => {

    return (
        <>
            <footer className="bg-footer text-white">
                <div className="container mx-auto">
                    <div className="topFooter">
                        <div className="grid grid-cols-2 gap-5 pb-[50px] pt-10 sm:gap-9 md:grid-cols-7 md:pt-16 lg:gap-11 xl:grid-cols-12 xl:gap-7">
                            <div className="col-span-full sm:col-span-1 md:col-span-3 ">
                                <Image
                                    src="/windcom.svg"
                                    width="194"
                                    height="26"
                                    alt="logo"
                                />
                            </div>

                            <div className="col-span-1 pb-3.5 sm:pb-0 md:col-span-2">
                                <h3 className="mb-2 text-base font-medium sm:mb-4 lg:mb-6">
                                    Information
                                </h3>
                                <ul>
                                    <Link
                                        className="flex items-baseline capitalize"
                                        href="/about-us"
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize"
                                        href="/contact-us"
                                    >
                                        Contact us
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize"
                                        href="/privacy"
                                    >
                                        Privacy Policy
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize"
                                        href="/terms"
                                    >
                                        Terms & Condition
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize"
                                        href="/checkout"
                                    >
                                        Checkout
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize"
                                        href="/faq"
                                    >
                                        FAQ
                                    </Link>
                                </ul>
                            </div>
                            <div className="col-span-1 pb-3.5 sm:pb-0 md:col-span-2">
                                <h3 className="mb-2 text-base font-medium sm:mb-4 lg:mb-6">
                                    Categories
                                </h3>
                                <ul>
                                    <Link
                                        className="flex items-baseline capitalize"
                                        href="/"
                                    >
                                        Electronic & Digital
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize"
                                        href="/"
                                    >
                                        Health & Beauty
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize"
                                        href="/"
                                    >
                                        Return Policy
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize"
                                        href="/"
                                    >
                                        Top 10 Offers
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize"
                                        href="/"
                                    >
                                        Jewelry & Watches
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize"
                                        href="/"
                                    >
                                        Book & Office
                                    </Link>
                                </ul>
                            </div>
                            <div className="col-span-1 pb-3.5 sm:pb-0 md:col-span-2">
                                <h3 className="mb-2 text-base font-medium sm:mb-4 lg:mb-6">
                                    Brands
                                </h3>
                                <ul>
                                    <Link
                                        className="flex items-baseline capitalize"
                                        href="/"
                                    >
                                        Common Good
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize"
                                        href="/"
                                    >
                                        OFS
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize"
                                        href="/"
                                    >
                                        Sagaform
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize"
                                        href="/"
                                    >
                                        Feugiat nulla
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize"
                                        href="/"
                                    >
                                        Vulputate velit
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize"
                                        href="/"
                                    >
                                        Samsung Galaxy
                                    </Link>
                                </ul>
                            </div>
                            <div className="col-span-full flex flex-col sm:col-span-1 md:col-span-4 md:col-start-4 xl:col-span-3 xl:col-start-auto  ">
                                <h3 className="mb-2 text-base font-medium sm:mb-4 lg:mb-6">
                                    Sign Up For Newsletter
                                </h3>
                                <div className="">
                                    <p>
                                        Get the latest updates on new products
                                        and upcoming sales
                                    </p>
                                    <Newsletter />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottomFooter flex justify-between py-4">
                        <div className="copyright">
                            © Copyright {yearNow}
                            <Link href="/"> Windcommerce</Link>, Inc. All rights
                            reserved
                        </div>
                        <div className="paymentsSupport | flex flex-wrap items-center gap-4">
                            <Image
                                src="/images/payments/mastercard.svg"
                                width="30"
                                height="20"
                                alt="logo master"
                            />
                            <Image
                                src="/images/payments/visa.svg"
                                width="30"
                                height="20"
                                alt="logo visa"
                            />
                            <Image
                                src="/images/payments/paypal.svg"
                                width="40"
                                height="30"
                                alt="logo paypal"
                            />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
