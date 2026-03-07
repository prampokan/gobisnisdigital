export default function MacCard({ children, header = "" }: any) {
  return (
    <div className="shadow rounded-3xl bg-background/20 group hover:shadow-xl duration-300 outline outline-transparent hover:outline-sky-300">
      <div className="h-10 border-b-2 border-sky-200/50 group-hover:border-sky-200 duration-300 w-full px-5 flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <div className="w-4 h-4 rounded-full shadow-sm outline outline-transparent group-hover:outline-sky-300 group-hover:outline duration-300"></div>
          <div className="w-4 h-4 rounded-full shadow-sm outline outline-transparent group-hover:outline-sky-300 group-hover:outline duration-300"></div>
          <div className="w-4 h-4 rounded-full shadow-sm outline outline-transparent group-hover:outline-sky-300 group-hover:outline duration-300"></div>
        </div>
        <span className="font-mono text-sm text-slate-300 group-hover:text-sky-500 duration-300">
          {header}
        </span>
      </div>

      <div className="p-5">{children}</div>
    </div>
  );
}
