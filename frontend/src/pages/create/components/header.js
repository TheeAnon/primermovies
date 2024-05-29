export const Header = ({ step, setStep }) => {
  return(
    <div className="flex w-full items-center">
       <h1 className="normal-case text-xl font-bold dark:text-white flex-1">
         Create Series
       </h1>

       <ul className="flex text-xs font-bold flex-end items-center py-2">
         <li className="rounded-full bg-blue-200 px-2" onClick={()=>setStep(1)}>Series</li>
         <li className={`w-4 h-1 ${step === 2 ? "bg-blue-200" : "bg-gray-200"}`}></li>
         <li className={`rounded-full px-2 ${step === 2 ? "bg-blue-200" : "bg-gray-200"}`}>Seasons</li>
       </ul>
    </div>
  );
};
