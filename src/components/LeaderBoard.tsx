import Image from "next/image";

type TeamData = {
  logo: string;
  name: string;
  score: number;
  sol: number | null;
};

const leaderboardData: TeamData[] = [
  { logo: "/logos/1.png", name: "REALTECH", score: 17, sol: null },
  {
    logo: "/logos/2.png",
    name: "PYSCHO PIGEONS",
    score: 15,
    sol: 30,
  },
  { logo: "/logos/3.png", name: "SSTS", score: 8, sol: 25 },
  { logo: "/logos/4.png", name: "38TH RAMA", score: 11, sol: 25 },
];

const LeaderboardRow = ({ team }: { team: TeamData }) => (
  <div className="flex h-[144px] items-center justify-between text-white text-xl py-4 border-b-4 border-[#eb5b42]">
    <div className="flex w-[60%] items-center gap-4">
      <Image
        src={team.logo}
        alt={`${team.name} logo`}
        width={40}
        height={40}
        className="object-contain"
      />
      <span className="font-voltec font-bold tracking-wider">{team.name}</span>
    </div>

    <div className="flex w-[20%] items-center gap-2">
      <span className="font-pressStart2P-regular text-[18px]">
        {team.score}
      </span>
      <Image alt="skull-logo" src={"/logos/skull.png"} width={35} height={35} />
    </div>
    <div className="flex w-[20%] items-center gap-4">
      {team.sol !== null && (
        <span className="font-pressStart2P-regular text-[18px] text-left">
          {team.sol} SOL
        </span>
      )}
    </div>
  </div>
);

const LeagueTable = () => {
  return (
    <div className="min-h-screen bg-[#000d18] font-sans text-white p-8 mb-40">
      <div className="fixed top-0 left-0 h-full w-2 bg-[#000D18] opacity-50"></div>
      <div className="fixed top-0 right-0 h-full w-2 bg-[#000D18] opacity-50"></div>

      <div className="max-w-4xl mx-auto">
        <h1 className="font-atomos-regular text-6xl font-bold text-center mb-12 tracking-widest">
          THE LEAGUE
        </h1>

        <div className="bg-[#00120A] border-2 border-[#FFFFFF] rounded-lg p-6">
          {leaderboardData.map((team, index) => (
            <LeaderboardRow key={index} team={team} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeagueTable;
