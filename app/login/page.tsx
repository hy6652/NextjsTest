'use client'

import { useUserStore } from "@/stores/useUserStore";
import { useRef } from "react"

export default function Login(){
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const {setAccessToken, setRefreshToken, clearToken} = useUserStore();

    const handleSubmit = (e: React.FormEvent) => {
        if (email && password){
            // token 가져오기
            const accessToken = "access_token1";
            const refreshToken = "refresh_token1";

            setAccessToken(accessToken);
            setRefreshToken(refreshToken);
        }
    }
    
    const handleLogout = () => {
        clearToken();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Login
                <input type="text" ref={email} />
                <input type="text" ref={password} />
            </label>
            <button type="submit">Login</button>
            <div>
                {email && password && (
                    <div>
                        <button type="button" onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
        </form>
    )
}