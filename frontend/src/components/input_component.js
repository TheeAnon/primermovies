export const Input = ({ id, label, type, placeholder, value, onChange }) => {
   return(
      <div>
         <label for={id} className="block mb-0 text-sm font-medium dark:text-gray-400">
            {label}
         </label>
         <input
            required
            type={type?type:"text"}
            name={id}
            value={value}
            autoComplete="off"
            onChange={(e) => onChange(e)}
	    className="border dark:border-gray-400 mt-2 text-sm focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-black placeholder-gray-400 dark:text-white rounded"
            placeholder={placeholder?placeholder:label}
         />
      </div>
   );
};
