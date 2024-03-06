import React from "react";
import "./protfolio.css";
import dex_defi from "../../img/dex-defi.png";
import NFT from "../../img/NFT.png";
import Voting from "../../img/voting.png";
import DataMask from "../../img/Datamask.png";
import Twitter from "../../img/twt.png";
import Digital from "../../img/digital.png";
import Video from "../../img/video.png";
import Flint from "../../img/flint.png"

const data = [
  {
    id: 1,
    image: Flint,
    title: "Flint with AI ChatBot",
    desc: `Redesign of a website [flintk12.com] using NextJS, integrated with an OpenAI chatbot (GPT 3.5) and added rate limiter using Redis.`,
    github: "https://github.com/Rana-Paul/Flint",
    demo: "https://flint-eta.vercel.app",
  },
  {
    id: 2,
    image: Digital,
    title: "Digital Market",
    desc: `A Modern Full Stack Digital Market for Digital Products. Built with the Next.js 14 App Router, tRPC, TypeScript, Payload & Tailwind`,
    github: "https://github.com/Rana-Paul/Digital-Market",
    demo: "https://digital-market-production-4041.up.railway.app/",
  },
  {
    id: 3,
    image: Video,
    title: "Video Transcoder",
    desc: `This is a Video Transcoder app, Here you can Transcode your video into different format. Built with the ReactJS, Nodejs, Express ,FFMPEG`,
    github: "https://github.com/Rana-Paul/Video-Tanscoder-v2",
    demo: "https://illustrious-babka-52448f.netlify.app/",
    video: "https://www.youtube.com/watch?v=HNfJKOqEgrg&t=149s",
  },
  {
    id: 4,
    image: dex_defi,
    title: "dEX-DeFi Project",
    desc: `A Web3 project where you can buy and sell Tokens, Built with the ReactJS, Solidity, Hardhat, Mocha and Chai`,
    github: "https://github.com/Rana-Paul/dEX-DeFi",
    demo: "https://unique-gelato-7d48b6.netlify.app/",
    video: "https://youtu.be/9cJbci3XzuM",
  },
  {
    id: 5,
    image: NFT,
    title: "NFT Marketplace",
    github: "https://github.com/Rana-Paul/NFT-Marketplace",
    demo: "https://spectacular-gumdrop-15a54a.netlify.app/",
    desc: `Here you can Upload Your NFT, Buy NFT and Sell NFT. It's Hosted on  Goerli Test Network .Here is the Demo Video`,
    video: "https://youtu.be/9cJbci3XzuM",
  },
  {
    id: 6,
    image: Voting,
    title: "Voting dApp",
    github: "https://github.com/Rana-Paul/Voting-Dapp-Smart-Contract",
    demo: "https://github.com/Rana-Paul/Voting-Dapp-Smart-Contract/",
    desc: `It's a very simple Voting dApp, Here you can vote. it's my frst dAPP also. it's have a lot of Bugs .Here is the Demo Video`,
    video: "https://github.com/Rana-Paul/Voting-Dapp-Smart-Contract",

  },
  {
    id: 7,
    image: DataMask,
    title: "DataMask",
    github: "https://github.com/Rana-Paul/DataMask",
    demo: "https://youtu.be/n2baOGij72c",
    desc: `It's a chrome Extension. Here you can check the Balance of an account and also transfer funds.`,
    video: "https://youtu.be/n2baOGij72c",

  },
];

const protfolio = ({title}) => {
  return (
    <section id="services">
      <h5>My Recent Work</h5>
      <h2>{title} Projects</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, desc, github, demo, video }) => {
          return (
            <article className="portfolio_items" key={id}>
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px", height: "10%"}}>
                <a href={video? video : demo} target="_blank">
                  <h5 style={{ color: "white", marginBottom: "10px" }}>
                    {desc}{" "}
                    <span
                      style={{
                        color: "var(--color-primary-variant)",
                        fontSize: "16px",
                        textDecoration: "underline",
                      }}
                    >
                      {video ? "Link" : ""}
                    </span>
                  </h5>
                </a>
              </div>

              <div style={{marginTop: "2rem"}}>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
              </div>
              
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default protfolio;
