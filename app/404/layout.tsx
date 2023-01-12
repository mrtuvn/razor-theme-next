'use client';
import type { NextApiResponse } from 'next';
import React, { useEffect, useState } from 'react';

interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    age: number;
}
[];

export default function Layout({ children }: { children: React.ReactNode }) {
    const [users, setUsers] = useState<IUser[]>([]);

    async function fetchUserDummy() {
        const response = await fetch('https://dummyjson.com/users');

        const users: NextApiResponse = await response.json();
        console.log(users);
        setUsers(users as IUser[]);
    }

    useEffect(() => {
        fetchUserDummy();
    }, []);

    return (
        <React.Fragment>
            <div className="container mx-auto text-white">
                <h1 className="text-6x mx-auto my-[40px] text-center">
                    Page 404
                </h1>

                <div className="flex h-full w-full flex-col items-center justify-center">
                    <div className="flex flex-wrap">
                        {users.map((user) => {
                            <div className="m-6 flex flex-col">
                                <img
                                    src={user.image}
                                    className="w-40 rounded-full"
                                    alt="image"
                                />
                                <span className="text-xl">
                                    ({user.id}) {user.firstName} {user.lastName}
                                </span>
                            </div>;
                        })}
                    </div>
                </div>
            </div>
            {children}
        </React.Fragment>
    );
}
