import { Input } from './input_component';

export const AddSeason = ({ number, poster, onChange }) => {

   return(
      <div>
         <h2 className="normal-case text-lg font-bold dark:text-white">
          Add Season
        </h2>

        <div className="flex gap-2">
          <Input id="number" label="Number" type="number" value={number} onChange={onChange} />
          <Input id="poster" label="poster" value={poster} onChange={onChange} />
        </div>
      </div>
   );
};
