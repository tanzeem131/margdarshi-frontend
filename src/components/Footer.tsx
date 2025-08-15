import TextInput from "./TextHeading";

const Foooter = () => {
  return (
    <div className="border-t-2 border-[#292929] h-[60px]">
      <div className="flex justify-between mt-4 mx-20">
        <div className="flex gap-2">
          <span className="text-[#39FF14] text-[15px]">/</span>{" "}
          <TextInput text="© WEBTHREE 2024 " textSize="text-[15Px]" />
        </div>
        <div className="flex gap-2">
          <span className="text-[#39FF14] text-[15px]">/</span>{" "}
          <TextInput text="ALL RIGHTS RESERVED " textSize="text-[15Px]" />
        </div>
      </div>
    </div>
  );
};

export default Foooter;
