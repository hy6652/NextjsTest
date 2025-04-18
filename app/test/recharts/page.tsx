"use client"

import { RechartsGenericBarChart } from "@/components/RechartsGenericBarChart"
import { BotUser, botUserData } from "../../types/base"

export default function BarChart(){
    var dataKeys = Object.keys(botUserData[0]).filter(x => x !== "date") as (keyof BotUser)[];
    return (
        <RechartsGenericBarChart<BotUser>
            data={botUserData}
            dataKeys={dataKeys}
            xDataKey="date"
            width="50%"
            height={300}
            stack={true}
        />
    )
}