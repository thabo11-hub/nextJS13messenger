"use client";

import { signOut } from "next-auth/react";

function LogoutButton() {
    return (
        <button
            onClick={() => signOut()}
            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Logout
        </button>
    );
}

export default LogoutButton;