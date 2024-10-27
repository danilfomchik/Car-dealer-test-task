'use client';

import React from 'react';
import Link from 'next/link';

import {buttonLinkClasses} from '../services/constants';

const NotFound = () => {
    return (
        <div className="flex min-h-screen flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8">
            <div className="flex flex-col min-h-full items-center gap-8 max-w-lg w-1/4">
                <h1 className="text-4xl font-bold tracking-tight pb-6 border-b text-center">404</h1>
                <Link
                    href="/"
                    className={`${buttonLinkClasses} focus-visible:outline-indigo-600 bg-indigo-600 hover:bg-indigo-500`}>
                    Go home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
