'use client'

import React from "react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, Area, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { colors, botUserData, botTokenData, feedbackData, actionRatioData, botUserTokenData, changedFeedbackName } from "../types/base";

export default function SimpleBarChart() {  
    const botkeys = Object.keys(botUserData[0]).filter(x => x !== "date");
    const feedbackKeys = Object.keys(feedbackData[0]).filter(x => x!== "bot");

    return (
        <div>
            <div>
                <h2 style={{padding: 30}}>Simple Bar Chart</h2>                
                <ResponsiveContainer width="50%" height={450}>
                    <BarChart
                        width={500}
                        height={300}
                        data={botUserData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="date" tick={{ fill: "white" }}/>
                        <YAxis />
                        <Tooltip cursor={{ fill: "transparent" }} contentStyle={{ backgroundColor: "grey", border: "none"}}/>
                        <Legend height={30} />
                        
                        {botkeys.map((key, index) => {
                            return <Bar dataKey={key} fill={colors[index]} barSize={20} />
                        })}

                    </BarChart>
                </ResponsiveContainer>
            </div>
            
            <div>
                <h2 style={{padding: 30}}>Stack Bar Chart</h2>
                <ResponsiveContainer width="50%" height={450}>
                    <BarChart
                        width={500}
                        height={300}
                        data={botUserData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}>
                        
                        <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip cursor={{ fill: "transparent" }} contentStyle={{ backgroundColor: "grey", border: "none" }}/>
                        <Legend height={30} />

                        {botkeys.map((key, index) => {
                            return <Bar dataKey={key} fill={colors[index]} stackId="a" barSize={20} />
                        })}
                    </BarChart>
                </ResponsiveContainer>
            </div>
            
            <div>
                <h2 style={{padding: 30}}>Vertical Bar Chart</h2>
                <ResponsiveContainer width="50%" height={450}>
                    <BarChart
                        width={500}
                        height={300}
                        data={feedbackData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        layout="vertical">

                        <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="bot" />
                        <Tooltip cursor={{ fill: "transparent" }} contentStyle={{ backgroundColor: "grey", border: "none" }}/>
                        <Legend height={30} formatter={(value) => changedFeedbackName[value as keyof typeof changedFeedbackName] || value} />

                        {feedbackKeys.map((key, index) => {
                            return <Bar dataKey={key} fill={colors[index]} stackId="a" barSize={20} />
                        })}
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div>
                <h2 style={{padding: 30}}>Line Chart</h2>
                <ResponsiveContainer width="50%" height={450}>
                    <LineChart
                        width={500}
                        height={300}
                        data={botTokenData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                     >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip cursor={{ fill: "transparent" }} contentStyle={{ backgroundColor: "grey", border: "none" }} />
                        <Legend />

                        {botkeys.map((key, index) => {
                            return <Line type="linear" dataKey={key} stroke={colors[index]} />
                        })}
                    </LineChart>
                </ResponsiveContainer>
            </div>
            
            <div>
                <h2 style={{padding: 30}}>Pie Chart</h2>
                <ResponsiveContainer width="50%" height={450}>
                    <PieChart width={400} height={400}>
                        <Pie data={actionRatioData} dataKey="value" cx="50%" cy="50%" innerRadius="50%" outerRadius="80%">
                            {
                                actionRatioData.map((key, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index]} />
                                ))
                            }
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div>
            <h2 style={{padding: 30}}>Combo Chart</h2>
            <ResponsiveContainer width="50%" height={450}>
                <ComposedChart
                    width={500}
                    height={400}
                    data={botUserTokenData}
                    margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip cursor={{ fill: "transparent" }} contentStyle={{ backgroundColor: "grey", border: "none" }}/>
                    <Legend />

                    {/* {botkeys.map((key, index) => {
                        return <Area type="monotone" dataKey={`${key}_tokenUsed`} fill="#f2f3f4" stroke="#ffffff" fillOpacity={0.3} />
                    })} */}
                    
                    <Area type="monotone" dataKey={`botA_tokenUsed`} fill="#f2f3f4" stroke="#ffffff" fillOpacity={0.3} />

                    {botkeys.map((key, index) => {
                        return <Bar dataKey={`${key}_userCount`} fill={colors[index]} barSize={20} />
                    })}

                    {/* {botkeys.map((key, index) => {
                        return <Line type="linear" dataKey={`${key}_tokenUsed`} stroke={colors[index]}/>
                    })} */}

                </ComposedChart>
            </ResponsiveContainer>
            </div>
        </div>
    );
}