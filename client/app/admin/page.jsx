import LeftBox from "@/components/left/LeftBox";
import RightBox from "@/components/right/RightBox";

function page() {
  return (
    <div className="flex min-w-dvw gap-2 h-full">
      {/* left */}
      {/* buttonsboard */}
      <div className="flex-1 border border-slate-200 bg-white rounded-md flex flex-col px-2 py-2 gap-2">
        <LeftBox />
      </div>

      {/* right */}
      {/* scoreboard */}
      <div className=" basis-[27rem] bg-slate-50 border border-slate-200 px-2 py-2 rounded-md flex flex-col ">
        <RightBox />
      </div>
    </div>
  );
}

export default page;
