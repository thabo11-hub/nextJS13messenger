"use client";

function LogoutButton() {
    return (
        <button
            onClick={() => console.log("hello!")}
            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Logout
        </button>
    );
}

export default LogoutButton;