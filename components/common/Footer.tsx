'use client';
import type { NextComponentType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useId } from 'react';
import Newsletter from '@/components/common/Newsletter';
import Logo from '@/components/common/Logo';

const yearNow = new Date().getFullYear();

const Footer: NextComponentType = () => {
    const [checked, setChecked] = useState([]);

    return (
        <>
            <footer className="bg-footer text-white">
                <div className="container mx-auto">
                    <div className="topFooter">
                        <div className="grid grid-cols-2 gap-5 pb-[50px] pt-10 sm:gap-9 md:grid-cols-7 md:pt-16 lg:gap-11 xl:grid-cols-12 xl:gap-7">
                            <div className="col-span-full sm:col-span-1 md:col-span-3 ">
                                <div className="logowrap mb-3 outline-2">
                                    <Logo />
                                    <div className="contactDetails mt-4 flex w-auto items-start gap-[10px]">
                                        <div className="h-[54px] w-[55px] bg-phoneContactImg"></div>
                                        <div>
                                            <p>Hotline Free 24/24:</p>
                                            <Link
                                                href="tel:84936536599"
                                                className="d-block mt-2 text-lg text-primary"
                                            >
                                                (+84) 936536599
                                            </Link>
                                        </div>
                                    </div>
                                    <p className="my-4">
                                        Address: Acme Widgets 123 Widget Street
                                        Acmeville, AC 12345 United States of
                                        America
                                    </p>
                                    <p>Email: yourexample@email.com</p>
                                    <ul className="mt-2 flex items-center gap-6">
                                        <li>
                                            <Link href="#">
                                                <Image
                                                    src="/images/socials/facebook.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="social"
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <Image
                                                    src="/images/socials/instagram.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="social"
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <Image
                                                    src="/images/socials/twitter.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="social"
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <Image
                                                    src="/images/socials/youtube.svg"
                                                    width={20}
                                                    height={20}
                                                    alt="social"
                                                />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-span-1 pb-3.5 sm:pb-0 md:col-span-2">
                                <h3 className="mb-2 text-base font-medium sm:mb-4 lg:mb-6">
                                    Information
                                </h3>
                                <ul>
                                    <Link
                                        className="flex items-baseline capitalize hover:text-primary"
                                        href="/about-us"
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize hover:text-primary"
                                        href="/contact-us"
                                    >
                                        Contact us
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize hover:text-primary"
                                        href="/privacy"
                                    >
                                        Privacy Policy
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize hover:text-primary"
                                        href="/terms"
                                    >
                                        Terms & Condition
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize hover:text-primary"
                                        href="/checkout"
                                    >
                                        Checkout
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize hover:text-primary"
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
                                        className="flex items-baseline capitalize hover:text-primary"
                                        href="/"
                                    >
                                        Electronic & Digital
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize hover:text-primary"
                                        href="/"
                                    >
                                        Health & Beauty
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize hover:text-primary"
                                        href="/"
                                    >
                                        Return Policy
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize hover:text-primary"
                                        href="/"
                                    >
                                        Top 10 Offers
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize hover:text-primary"
                                        href="/"
                                    >
                                        Jewelry & Watches
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize hover:text-primary"
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
                                        className="flex items-baseline capitalize hover:text-primary"
                                        href="/"
                                    >
                                        Common Good
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize hover:text-primary"
                                        href="/"
                                    >
                                        OFS
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize hover:text-primary"
                                        href="/"
                                    >
                                        Sagaform
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize hover:text-primary"
                                        href="/"
                                    >
                                        Feugiat nulla
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize hover:text-primary"
                                        href="/"
                                    >
                                        Vulputate velit
                                    </Link>
                                    <Link
                                        className="flex items-baseline capitalize hover:text-primary"
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
                        <div className="copyright text-sm text-gray-400">
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
