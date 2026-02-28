import Image from "next/image";

export default function Home() {
  return (
    <div className="labanca_landing">

      <div id="hero">
        <h1 className="text-center text-4xl font-bold mt-1">Labanca.. the future of banking</h1>
      </div>
      <div id="mantra">
        <div id="mission">
          At Labanca, our mission is to ease banking so that whether it is transferring it, depositing, and withdrawing, your experiense is seamless and fast.
        </div>
        <div id="vision">
          Our vision is to have the fastest and most reliable banking system in the space of finance.
        </div>
      </div>

      <div id="our_services">
        <div id="deposits">
          <h1>Deposits</h1>
          You can deposit your money into your account at any of our branches available country-wide, via our agents, and using our 24Hours operational ATMs
        </div>
        <div id="withdrawals">
          <h1>Withdrawals</h1>
          At labanca, you can have money in the palm of your hands anytime, through our well distributed bank branches, agent shops and ATMs. 
        </div>
        <div id="transfers">
          <h1>Transfers</h1>
          Wherever you are, no matter the time, you can send money to your friends and famil
        </div>
      </div>
      
    </div>
  );
}
