import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware'

interface userState {
    accessToken: string;
    refreshToken: string;
    setAccessToken: (newAccessToken: string) => void;
    setRefreshToken: (newRefreshToken: string) => void;
    clearToken: () => void;
}

export const useUserStore = create(
    persist<userState>(
        (set) => ({
            accessToken: "",
            refreshToken: "",
            setAccessToken: (newAccessToken) => set({ accessToken: newAccessToken }),
            setRefreshToken: (newRefreshToken) => set({ refreshToken: newRefreshToken }),
            clearToken: () => set({ accessToken: "", refreshToken: "" })
        }),
        {
            name: "userTokenStore", // 여기까지만 쓰면 기본 localStorage에 저장
            storage: createJSONStorage(() => sessionStorage), // sessionStroage로 설정

        }
    )
)