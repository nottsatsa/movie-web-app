"use client";
interface searchProps {
  searchValue: any;
}

export const SearchInput = ({ searchValue }: searchProps) => {
  return (
    <div>
      <input
        onChange={searchValue}
        className={`h-[40px] w-[280px] bg-white rounded-[6px] border-[1px] border-solid border-black px-[12px] py-[4px] flex text-black`}
        placeholder={"Search.."}
      />
      <div className="text-[100px] hidden">hello</div>
    </div>
  );
};
