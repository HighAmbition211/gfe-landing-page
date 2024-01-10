import React from "react"

function ServerHosting() {
  return (
    <div className="lg:px-0 lg:pr-24 flex flex-col-reverse lg:flex-row gap-12 pb-24">
      <div className="">
        <img src="/bgs/555.svg" alt="image" className="" />
      </div>
      <div className=" px-5 pt-5 flex flex-col gap-6 lg:w-1/2">
        <h1 className="font-medium auth py-[8px] px-[16px] text-base md:text-[20px] w-fit rounded-sm bg-[#EEF5FF] text-primary">
          Future
        </h1>
        <h1 className="text-[45px] font-monument text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
          Blockchain and server hosting
        </h1>
        <p className="auth text-lg font-mont auth">
          The world cost of electricity is determined by local monopolies. We
          have no global market to draw a value measurement for decentralized
          power. Market prices are based on many factors, in our case we need a
          global process that consumes power around the world to measure
          against. This energy use needs to provide a product that is fungible
          globally. We see the energy and hash power related to blockchain
          earnings as an ideal situation for analysis, it consumes around 1% of
          the world’s energy.
        </p>
        <p className="auth text-lg font-mont ">
          This hash power and energy conversion to FIAT currency occurs in
          London and China, the equipment is very similar and the energy is the
          biggest geographic component variable. Often mining environments
          (servers, electrical infrastructure, cooling equipment and housing)
          are de-commissioned based on the cost of power vs the productive
          output. The environment and equipment requirements are so similar it’s
          hard to tell the difference between server hosting and mining. The
          collective doesn’t discriminate in our server hosting; we sell our
          power to all. We provide ethically sourced power one KW at a time to
          global commons consumers.
        </p>
      </div>
    </div>
  )
}

export default ServerHosting
