import HeaderBox from "@/components/Header";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Jojo",
    lastName: "Sehrawat",
    email: "jojosehrawat21@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title={"Welcome"}
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and Manage your account andd transactions efficiently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalCurrentBalance={987.65}
            totalBanks={1}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 500.5 }]}
      />
    </section>
  );
};

export default Home;
