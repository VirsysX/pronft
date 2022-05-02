import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import heroBg from "../assets/hero-shape-1.png";
import sectionBg from "../assets/section-shape-1.png";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import { useEffect, useState, useRef } from "react";
import actionitem4 from "../assets/auction-item-4.jpg";
import slime from "../assets/slime.png";
import Script from "next/script";

import Slider from "react-slick";
import { content } from "../assets/contents";
import { HeartIcon } from "@heroicons/react/outline";
const Navbar = () => {
  const [navbg, setNavBg] = useState("transparent");
  useEffect(() => {
    function onScroll(event) {
      const backgroundcolor = window.scrollY < 100 ? "transparent" : "black";
      setNavBg(backgroundcolor);
      console.log(backgroundcolor);
    }
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <nav
      className="row fixed top-0 w-full z-50 justify-between  flex-row-reverse md:flex-row px-10 transition-all duration-300 py-2"
      style={{ backgroundColor: `${navbg}` }}
    >
      <Btn type="pri">Connect Walet</Btn>
      <div className="row flex-1 space-x-3 hidden md:flex">
        {["Home", "About Us", "Explore", "Blog", "Contact Us"].map(
          (elm, ind) => (
            <p
              key={ind}
              className="px-3 text-base-content transition cursor-pointer text-0 hover:text-[#173D37]"
            >
              {elm}
            </p>
          )
        )}
      </div>
      <div className="row">
        <p className="text-0">Virsys</p>
      </div>
    </nav>
  );
};

const Btn = ({ children, type, className }) => {
  return (
    <div
      className={`row-0 overflow-hidden relative group hover:scale-95 ${className} `}
    >
      {type == "sec" ? (
        <>
          <div className="w-full h-full z-0 absolute  transition-all duration-700 -bottom-full left-0 group-hover:inset-0 group-hover:transition-all group-hover:duration-700 bg-gradient-to-br from-[#9F47E7] to-[#4875C0]"></div>
          <div className="w-full h-full z-0 absolute transition-all duration-700 top-0 -left-full group-hover:inset-0 bg-gradient-to-br from-[#9F47E7] to-[#4875C0]"></div>
        </>
      ) : (
        ""
      )}
      <button
        className={`row py-2 font-bold z-10 px-7 transition text-lg text-base-content ${
          type == "pri"
            ? "bg-gradient-to-r from-[#9F47E7] to-[#4875C0] hover:to-[#9F47E7] hover:from-[#4875C0]"
            : "bg-white/30"
        }`}
      >
        {children}
      </button>
    </div>
  );
};

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const slider = useRef();
  return (
    <div className="w-full h-full relative">
      <div
        className="col flex-col-reverse md:row w-full py-[100px] md:py-[180px] z-10 overflow-hidden"
        style={{ backgroundImage: `url(${heroBg.src})` }}
      >
        <div className="container mx-auto px-1">
          <div className="col flex-col-reverse md:row">
            <div className="col w-full md:w-1/2 ">
              <div className="container  mx-auto w-full">
                <Slider {...settings} ref={slider}>
                  {content.header.img.map((e, i) => (
                    <div className="w-full h-full" key={i}>
                      <img className="w-[80%] h-[80%] ex-cor" src={e} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col px-2 w-full md:w-1/2 items-end text-right">
              <p className="text-base text-base-content mb-3">
                {content.header.text1}
              </p>
              <h1 className="text-[32px] md:text-[54px] mb-4 font-bold">
                {content.header.text2}
              </h1>
              <p className="text-[14px] text-base-content mb-3">
                {content.header.text3}
              </p>
              <div className="row justify-end space-x-3">
                <Btn type="sec">Create NFT</Btn>
                <Btn type="pri">Get Started</Btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AuctionCard = ({ img, bid, creator, namex, }) => {
  return (
    <div className="col space-y-4 group mx-4 bg-[#091315] border-2 border-[#112327]">
      <div className="overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt="j"
          className="w-full max-w-full transition-all duration-200 h-auto group-hover:scale-[1.05]"
        />
      </div>

      <div className="row-0 w-full justify-between">
        <div className="col-0 space-y-1 items-start">
          <p className="text-0">Current Bid</p>
          <p className="font-bold text-lg">ETH {bid}</p>
        </div>
        <div className="row-0 space-x-1 ">
          <div className="col space-y-1">
            <p className="text-0">Creator</p>
            <p className="font-bold text-lg">{creator}</p>
          </div>
          <div className="row w-14 h-14 rounded-full bg-purple-400 font-bold text-lg first-letter:capitalize">
            {creator[0]}
          </div>
        </div>
      </div>
      <div className="row w-full justify-end">
        <p className="font-bold text-xl text-right group-hover:text-secondary trans">
          {namex}
        </p>
      </div>
    </div>
  );
};
const ProductCard = ({ img, bid, creator, namex , stock}) => {
  return (
    <div className="col space-y-4 group mx-4 bg-[#091315] border-2 border-[#112327]">
      <div className="overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt="missing"
          className="w-full max-w-full transition-all duration-200 h-auto group-hover:scale-[1.05]"
        />
      </div>

      <div className="row-0 w-full justify-between">
        <button className="btn btn-sm gap-2">
          <HeartIcon className="h-6 w-6 text-red-500" />
          <p className="text-0">4.12k</p>
        </button>
        <div className="row-0  ">
          <div className="col space-y-1">
            <p className="font-bold text-lg">{creator}</p>
          </div>
          <div className="row w-14 h-14 rounded-full bg-purple-400 font-bold text-lg first-letter:capitalize">
            {creator[0]}
          </div>
        </div>
      </div>
      <div className="row-0 justify-between ">
        <p className="font-bold text-lg">ETH {bid}</p>
        <p className="text-0">In Stock {stock}</p>
      </div>
      <div className="row w-full justify-end">
        <p className="font-bold text-xl text-right group-hover:text-secondary trans">
          {namex}
        </p>
      </div>
      <button className="btn btn-wide">Place A Bid</button>
    </div>
  );
};

const Auction = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slider = useRef();
  return (
    <div className="col space-y-4 w-full overflow-hidden text-center">
      <p className="text-0">Auctions</p>
      <h1 className="font-bold text-lg">Live Auctions</h1>

      <div className="row  w-full ">
        <button
          className="btn btn-sm btn-circle hidden md:flex"
          onClick={() => slider.current.slickPrev()}
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <div className="container flex-1  w-full">
          <Slider {...settings} ref={slider}>
            {content.auction.map((e, i) => (
              <div key={i}>
                <AuctionCard
                  img={e.img}
                  bid={e.bid}
                  creator={e.creator}
                  namex={e.name}
                />
              </div>
            ))}
          </Slider>
        </div>
        <button
          className="btn btn-sm btn-circle hidden md:flex"
          onClick={() => slider.current.slickNext()}
        >
          <ArrowRightIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="row space-x-3">
        <button
          className="btn btn-sm btn-circle md:hidden"
          onClick={() => slider.current.slickPrev()}
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <button
          className="btn btn-sm btn-circle md:hidden"
          onClick={() => slider.current.slickNext()}
        >
          <ArrowRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="col space-y-4 w-full overflow-hidden text-center">
      <p className="text-0">Products</p>
      <h1 className="font-bold text-lg">Explore Products</h1>
      <div className="row flex-wrap w-full ">
        {content.products.map((e,i)=>(
          <div className="row w-full md:w-1/2 lg:w-1/3" key={i}><ProductCard img={e.img} bid={e.bid} creator={e.creator} namex={e.name} stock={e.inStock} /> </div>
        ))}
      </div>
    </div>
  );
};
const Sells = () => {
  return (
    <div
      className="col  w-full py-[60px] md:py-[50px] md:pt-[100px] px-10"
      style={{ backgroundImage: `url(${sectionBg.src})` }}
    >
      <p className="text-0 text-right w-full mb-3">Auctions</p>
      <div className="row-0 w-full justify-end md:justify-between py-2">
        <Btn type="pri" className="hidden md:flex mb-6">
          View All Sellers
        </Btn>
        <p className="text-lg font-bold text-right">Top Sellers</p>
      </div>
      <div className="grid grid-cols-1 w-full  md:grid-cols-2 lg:grid-cols-3 gap-7  place-content-center mb-4">
        {content.sellers.map((e, i) => (
          <div className="row justify-end w-full bg-[#091315]" key={i}>
            <div className="col space-y-1 items-end">
              <p className="text-lg font-bold">{e.name}</p>
              <p className="text-0">ETH {e.eth}</p>
            </div>
            <div className="w-[100px] row-0">
              <img className="w-full max-w-[106%]" src={e.img} />
            </div>
          </div>
        ))}
      </div>
      <Btn type="pri" className="md:hidden">
        View All Sellers
      </Btn>
    </div>
  );
};

const Footer = () => {
  return (
    <footer
      className="row w-full py-[15px] md:py-[20pxpx] md:pt-[12px] px-10 justify-end"
      style={{ backgroundImage: `url(${sectionBg.src})` }}
    >
      <div className="col items-end w-full md:w-1/2">
        <p className="text-lg font-bold ">About Us</p>
        <p className="text-0">Who we are </p>
        <p className="text-0">Why Us</p>
        <p className="text-0">Our Mission</p>
      </div>
      <div className="col items-end w-full md:w-1/2">
        <p className="text-lg font-bold ">Contact Us</p>
        <p className="text-0">(+880) 123456789</p>
        <p className="text-0">contact@virsys.com</p>
        <p className="text-0">Gulsan, Dhaka</p>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="bg-base-100 min-w-full min-h-screen overflow-y-auto  ">
      <Head>
        <title>Minions NFT</title>
        <meta name="description" content="A NFT Market for Pros" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossOrigin="anonymous"
        strategy="beforeInteractive"
        onLoad={async () =>
          (window.$ = window.jquery = " (await import(jquery)).default")
        }
      />
      <Navbar />
      <Header />
      <Auction />
      <Sells />
      <Products />
      <Footer />
    </div>
  );
}
