import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import heroBg from "../assets/hero-shape-1.png";
import sectionBg from "../assets/section-shape-1.png";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import { useEffect, useState, useRef } from "react";
import actionitem4 from "../assets/auction-item-4.jpg";
import Script from "next/script";
import { Avatar } from "react-lorem-ipsum";

import Slider from "react-slick";
import { content } from "../assets/contents";
import { HeartIcon } from "@heroicons/react/outline";

const Dialogue = () => {
  return (
    <div className="col px-5 md:px-9 py-2 items-end">
      <h1 className="text-xl font-bold mb-1 w-full text-center">Place a Bid</h1>
      <p className="text-base font-bold mb-5  w-full text-center text-gray-500 row-0">
        You must bid at least{" "}
        <span className="text-white font-bold"></span>
      </p>
      <input
        className="w-full p-8 bg-gray-500 placeholder:text-white/70 placeholder:text-right mb-4 input"
        placeholder={`00.00 ETH `}
        type="email"
      />
      <p className="text-base  mb-3">Enter Quantity</p>
      <input
        className="w-full p-8 placeholder:text-white/70 placeholder:text-right bg-gray-500 mb-3 input"
        placeholder={`00.00 ETH `}
        type="email"
      />
    
      <div className="row mb-2 justify-between w-full">
        <p className="text-lg font-bold">{`ETH 66.6`}</p>{" "}
        <p className="text-base  text-gray-500">You must bid at least</p>
      </div>
      <div className="row justify-between w-full">
        <p className="text-lg font-bold">{`ETH 00.05`}</p>{" "}
        <p className="text-base  text-gray-500">Service Payments</p>
      </div>
      <div className="row justify-between w-full">
        <p className="text-lg font-bold">{`ETH 67.1`}</p>{" "}
        <p className="text-base  text-gray-500">Total Bid amount</p>
      </div>
      <Btn type="pri" className="w-full mt-2" >Place Bid</Btn>
    </div>
  );
};

const Navbar = () => {
  const [navbg, setNavBg] = useState("transparent");
  useEffect(() => {
    function onScroll(event) {
      const backgroundcolor = window.scrollY < 100 ? "transparent" : "#060125";
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
              className="px-3 text-base-content transition cursor-pointer text-0 hover:text-[#43b4a0]"
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
    <div
      className="h-full col  flex-col-reverse md:row w-full ex-bg py-[100px] md:py-[180px] z-10 overflow-hidden"
      style={{ backgroundImage: `url(${heroBg.src})` }}
    >
      <div className="container mx-auto px-1">
        <div className="col flex-col-reverse md:row">
          <div className="col w-full md:w-1/2 ">
            <div className="container  mx-auto w-full">
              <Slider {...settings} ref={slider}>
                {content.header.img.map((e, i) => (
                  <div
                    key={i}
                    className="overflow-hidden ex-cor w-[80%] h-[80%]"
                  >
                    <Image src={e} alt={"nn"} placeholder="blur" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="col px-2 w-full md:w-1/2 items-end text-right">
            <p className="text-base text-base-content mb-3">
              {content.header.text1}
            </p>
            <h1 className="text-[32px] md:text-[54px] mb-3 font-bold">
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
  );
};

const AuctionCard = ({ img, bid, creator, namex }) => {
  return (
    <div className="col cursor-pointer space-y-4 group mx-4 bg-[#130e30] border-2 border-[#112327]">
      <div className="overflow-hidden w-full  ">
        <Image src={img} alt={namex} placeholder="blur" />
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
          <div className="row-0 w-14 h-14 rounded-full overflow-hidden bg-purple-400 font-bold text-lg first-letter:capitalize">
            <Avatar gender="male" className="w-full h-full" />
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

const CollectionCard = ({ img, namex, item }) => {
  return (
    <div className="col cursor-pointer space-y-4  mx-4 bg-[#130e30] border-2 border-[#112327] ">
      <div className="overflow-hidden w-full  ">
        <Image src={img} alt={namex} placeholder="blur" />
      </div>
    </div>
  );
};

const ProductCard = ({ img, bid, creator, namex, stock }) => {
  return (
    <div className="col cursor-pointer space-y-4 group mx-8 bg-[#130e30] border-2 border-[#112327]">
      <div className="overflow-hidden w-full  ">
        <Image src={img} alt={namex} placeholder="blur" />
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
          <div className="row-0 w-14 h-14 rounded-full overflow-hidden bg-purple-400 font-bold text-lg first-letter:capitalize">
            <Avatar gender="male" className="w-full h-full" />
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
      <label htmlFor="dialougex" className="btn btn-wide modal-button">Place a Bid</label>
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
        {content.products.map((e, i) => (
          <div className="row w-full md:w-1/2 lg:w-1/3" key={i}>
            <ProductCard
              img={e.img}
              bid={e.bid}
              creator={e.creator}
              namex={e.name}
              stock={e.inStock}
            />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};
const Sells = () => {
  return (
    <div
      className="col ex-bg w-full py-[60px] md:py-[50px] md:pt-[100px] px-10"
      style={{ backgroundImage: `url(${sectionBg.src})` }}
    >
      <p className="text-0 text-right w-full mb-3">Auctions</p>
      <div className="row-0 w-full justify-end md:justify-between py-2">
        <Btn type="pri" className="hidden md:flex mb-6">
          View All Sellers
        </Btn>
        <p className="text-lg font-bold text-right">Top Sellers</p>
      </div>
      <div className="grid grid-cols-1 w-full  md:grid-cols-2 lg:grid-cols-3 gap-7  place-content-center mb-3">
        {content.sellers.map((e, i) => (
          <div className="row justify-end w-full bg-[#130e30]" key={i}>
            <div className="col space-y-1 items-end">
              <p className="text-lg font-bold">{e.name}</p>
              <p className="text-0">ETH {e.eth}</p>
            </div>
            <div className="w-[90px] row-0">
              <Avatar gender="male" className="w-full h-full" alt="man" />
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
      className="col md:row ex-bg w-full py-[15px] md:py-[20px] md:pt-[12px] px-8 md:px-10 items-end md:justify-between"
      style={{ backgroundImage: `url(${sectionBg.src})` }}
    >
      {content.footer.map((e, i) => (
        <div key={i} className="col w-full md:w-1/4   items-end">
          <p className="text-xl font-bold mb-7 relative before:absolute before:-bottom-2 before:right-0 before:w-[80%] before:h-[3px] before:bg-[#43b4a0]">
            {e.name}
          </p>
          {e.items.map((el, il) => (
            <p
              key={il}
              className="row-0 text-base mb-5 cursor-pointer relative before:absolute before:-bottom-1 hover:text-[#43b4a0] transition-all before:right-0 before:w-0 before:transition-all hover:before:w-[100%] before:h-[1px] before:bg-[#43b4a0]  font-bold text-white"
            >
              {el} <span className="text-[#43b4a0] ml-3 text-lg"> &lt;</span>
            </p>
          ))}
        </div>
      ))}
      <div className="col order-1 md:order-4 w-full md:w-1/4 items-end">
        <p className="text-lg font-bold mb-5 text-white">Virsys</p>
        <p className="text-xs row-0 justify-end  font-bold text-right">
          Lorem ipsum dolor sit amet consec tetur aditonsi soom isotope elit
          esumo tempo incidunt labore dolore magna aliqu core tetur
        </p>
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
      <input type="checkbox" id="dialougex" className="modal-toggle" />
      <label htmlFor="dialougex" className="modal modal-bottom sm:modal-middle cursor-pointer">
        <label className="modal-box relative" htmlFor="">
        <label htmlFor="dialougex" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
         <Dialogue />
        </label>
      </label>
    </div>
  );
}
