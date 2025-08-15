import Link from "next/link";
import ConnectWalletBtn from "./Button";
import TextInput from "./TextHeading";

const lineStyle = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  filter:
    "drop-shadow(0 0 50px rgba(255, 200, 193, 0.8)) drop-shadow(0 0 25px #FFA89A)",
};

const HudText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`orbitron text-[#39FF14] text-xs md:text-sm ${className}`}>
    {children}
  </div>
);

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#050505] overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden">
        <div
          className="absolute bottom-0 left-0 w-full h-full"
          style={{
            background: "linear-gradient(to top, #000D18 90%, #00120A 10%)",
            transform: "perspective(1000px) rotateX(70deg) scaleX(1.5)",
            transformOrigin: "bottom center",
          }}
        >
          <div
            className="w-full h-full"
            style={{
              backgroundSize: "80px 30px",
              backgroundImage:
                "linear-gradient(to right, #FF8A79 1px, transparent 1px)," +
                "linear-gradient(to bottom, #FF8A79 1px, transparent 1px)",
            }}
          />
        </div>
      </div>

      <div className="absolute bottom-24 left-0 w-full h-px bg-[#FF073A] shadow-[0_0_10px_#FF073A]">
        <div
          className="absolute w-full h-[12px] bg-[#FF8274] border-4 border-[#FFC8C1]"
          style={lineStyle}
        ></div>
      </div>

      <header className="absolute top-0 left-0 right-0 p-6 md:p-8 flex justify-between items-center z-20">
        <TextInput text="EHYZ" />
        <TextInput text="Leaderboard" />
        <ConnectWalletBtn />
      </header>
      <div>
        <div className="absolute top-30 left-8 z-20 hidden md:block">
          <HudText>
            <span className="text-white">DSP:</span> 1707 x 979
          </HudText>
          <HudText>
            <span className="text-white">FPS:</span> 67.90
          </HudText>
        </div>
        <div className="absolute top-30 right-8 text-right z-20 hidden md:block">
          <HudText>
            10-08-2025 <span className="text-white">:DATE</span>
          </HudText>
          <HudText>
            02:56:20 <span className="text-white">:TIME</span>
          </HudText>
        </div>
        <div className="absolute bottom-30 left-8 z-20 hidden md:block">
          <HudText>
            <span className="text-white">EVO:</span> Alpha
          </HudText>
          <HudText>
            <span className="text-white">VERS:</span> 01.08.84
          </HudText>
        </div>
        <div className="absolute bottom-30 right-8 text-right z-20 hidden md:block">
          <HudText>
            74.906 <span className="text-white">:LOG</span>
          </HudText>
          <HudText>
            Win11 Chrome/138.0.0.0 <span className="text-white">:SYS</span>
          </HudText>
        </div>
        <div className="absolute top-1/2 left-8 -translate-y-1/2 z-20 hidden md:block">
          <HudText>
            <span className="text-white">{"///:"}</span> 0.20
          </HudText>
        </div>
        <div className="absolute top-1/2 right-8 -translate-y-1/2 z-20 hidden md:block">
          <HudText>
            0.49{" "}
            <span className="text-white">
              {":\\"}
              <span>\\</span>
            </span>
          </HudText>
        </div>
        <main className="relative flex flex-col items-center justify-center h-screen z-10 p-4">
          <h1 className="font-atomos text-[84px]">EXPLORE NFT COLLECTION</h1>
          <p className="font-voltec text-[28px] mt-4 text-base md:text-lg max-w-xl lg:max-w-3xl text-center leading-relaxed">
            A collection of 2525 highly-fashionable NFTs on the ETH Blockchain.
            Unique, metaverse-ready, and designed to benefit their holders.
          </p>
          <Link href={"/game"}>
            <button className="futuristic-btn hover:cursor-pointer mt-6">
              <span className="line line-top"></span>
              <span className="line line-bottom"></span>
              <span className="line line-left"></span>
              <span className="line line-right"></span>
              <span className="line line-top-left"></span>

              <span className="line line-top-right"></span>

              <span className="orbitron text-[11px] text-[#FCFF3E]">
                Start Game
              </span>
            </button>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default HeroSection;
