import { Link } from "@inertiajs/react";
import React from "react";

const Welcome = () => {
    return (
        <main className="flex flex-col md:flex-row min-h-screen">
            {/* Left Side */}
            <section className="left-side w-full md:w-1/2 min-h-[50vh] md:min-h-screen bg-primary-dark flex items-center justify-center">
                <div className="text-white text-2xl md:text-3xl font-bold text-center p-6 md:p-0">
                    Your Financial Overview
                </div>
            </section>

            {/* Right Side */}
            <section className="right-side w-full md:w-1/2 min-h-[50vh] md:min-h-screen bg-primary-light flex items-center justify-center">
                <div className="flex flex-col items-center gap-6 p-8 md:p-10 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-text-primary text-center">
                        Welcome to the Finance Tracker
                    </h1>
                    <p className="text-md md:text-lg text-background-light">
                        Your personal tool to track expenses and incomes
                        seamlessly.
                    </p>

                    <div className="flex flex-col gap-4 w-full md:w-auto">
                        <Link
                            className="text-lg font-medium text-white bg-primary-dark hover:bg-primary transition-colors rounded px-6 py-2 text-center"
                            href={route("login")}
                        >
                            Log in
                        </Link>
                        <Link
                            className="text-lg font-medium text-text-primary border-2
                            bg-background-dark border-background-dark
                            hover:border-primary-dark hover:bg-primary-dark hover:text-white transition-colors rounded px-6 py-2 text-center "
                            href={route("register")}
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Welcome;
