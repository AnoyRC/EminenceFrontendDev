import AsideContainer from "@/components/layout/dashboard/home/AsideContainer";

export default function DashLayout({ children }) {
  return (
    <main className="flex justify-between w-full flex-grow">
      <div className="flex justify-center flex-grow">
        <div className="w-[668px] px-[16px] py-[20px]">{children}</div>
      </div>
      <AsideContainer />
    </main>
  );
}