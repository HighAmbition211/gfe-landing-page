"use client"

import React from "react"

import { Icons } from "../icons"
import Balance from "./balance"
import BuyDapp from "./buyDapp"
import BuyGfeToken from "./buyGfe"
import TransactionHistory from "./transaction"

const Dashboard = () => {
  return (
    <div className="bg-[#FAFAFA] px-16 py-12">
      <p className="text-[#1E293B] font-semibold text-5xl">
        Hello, Jesse Lawson
      </p>
      <div className="flex items center gap-2 text-sm text-[#64748B] font-medium">
        <div className="flex items-center gap-1">
          <Icons.mail />
          <p>Jesselawson@gmail.com</p>
        </div>
        <div className="flex items-center gap-1">
          <Icons.location />
          <p>United Kingdom</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <Balance />
        <TransactionHistory />
      </div>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <BuyGfeToken />
        <BuyDapp />
      </div>
    </div>
  )
}

export default Dashboard
