import { Input } from '../../../components/input_component';
import { useState } from 'react';

export const AddSeason = ({
  seasonNumber,
  seasonPoster,
  seasonEpisodes,
  onSeasonChange,
  addSeason,
  seasons
}) => {
  const [episode, setEpisode] = useState(false);
  const [addedEpisodes, setAddedEpisodes] = useState([]);
  const [episodeData, setEpisodeData] = useState({
    episodeNumber: 1,
    episodeTitle: "",
    episodeDescription: "",
    episodeDuration: "",
    episodeReleaseDate: "",
    episodePoster: "",
  });
  const { episodeNumber, episodeTitle, episodeDescription, episodeDuration, episodeReleaseDate, episodePoster } = episodeData;

  const onEpisodeChange = (e) =>
    setEpisodeData({ ...episodeData, [e.target.name]: e.target.value });

  const postEpisode = () => {
    try{
      if (episodeTitle && episodeDuration && episodeReleaseDate && episodePoster && episodeNumber) {
        setAddedEpisodes((prev) => [...prev, episodeData]);
        setEpisodeData({
          episodeNumber: episodeData.episodeNumber + 1,
          episodeTitle: "",
          episodeDescription: "",
          episodeDuration: "",
          episodeReleaseDate: "",
          episodePoster: "",
        });
        setEpisode(false);
      } else {
        alert("Please fill in all required fields.");
      }
    }catch(e){
      alert(e.message);
    }
  };

  const postSeason = () => {
   try{
      alert(seasonNumber);
      if (seasonNumber && seasonPoster && addedEpisodes.length > 0) {
        const newSeason = { seasonNumber, seasonPoster, seasonEpisodes: addedEpisodes };
        addSeason(newSeason);
        setAddedEpisodes([]);
      } else {
        alert("Please fill in all required fields.");
      }
    }catch(e){
      alert(e.message);
    }
  };

  return (
    <div className="flex flex-col flex-1">
      <h2 className="normal-case text-lg font-bold dark:text-white">Seasons</h2>
     {seasons.length > 0 && (
        <div className="mt-2 grid grid-cols-3 gap-2">
            {seasons.map((season, index) => (
 	      <div key={index} className="bg-gray-200 rounded p-2 text-sm relative flex flex-col w-full">
      		<div className="flex space-between">
	          <span className="line-clamp-1 font-bold">{season.seasonNumber}({season.seasonEpisodes.length})</span>
      		</div>
      	 	<span className="text-xs line-clamp-1">{season.seasonPoster}</span>
              </div>
            ))}
        </div>
      )}

      <div className="flex gap-2">
        <Input id="seasonNumber" label="Number" type="number" value={seasonNumber} onChange={onSeasonChange} />
        <Input id="seasonPoster" label="Poster" value={seasonPoster} onChange={onSeasonChange} />
      </div>

      <div className="gap-2 mt-2">
        <div className="flex gap-2">
          <h2 className="normal-case text-lg font-bold dark:text-white">Episodes</h2>
          <button type="button" onClick={() => setEpisode(true)} className="rounded-full btn btn-sm">+</button>
        </div>

        {addedEpisodes.length > 0 && (
        <div className="mt-2 grid grid-cols-5 gap-2">
            {addedEpisodes.map((episode, index) => (
	      <div key={index} className="bg-gray-200 rounded p-2 text-sm relative flex flex-col w-full">
      		<div className="flex space-between">
      		  <span className="line-clamp-1 font-bold">{episode.episodeNumber}: {episode.episodeTitle}</span>
      		</div>
      		<span className="text-xs line-clamp-2">{episode.episodeDescription}</span>
    	      </div>
            ))}
        </div>
        )}

        <button type="button" onClick={postSeason} className="mt-2 rounded-full btn w-full">Add Season</button>
      </div>

      {episode && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-end">
          <div className="bg-white dark:bg-gray-800 p-6 w-full rounded-t-lg z-2">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold dark:text-white">Add Episode</h2>
              <button type="button" onClick={() => setEpisode(false)} className="text-xl font-bold dark:text-white">&times;</button>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <Input id="episodeNumber" label="Episode number" type="number" value={episodeNumber} onChange={onEpisodeChange} />
              <Input id="episodeTitle" label="Episode title" value={episodeTitle} onChange={onEpisodeChange} />
              <div>
                <label htmlFor="description" className="block mb-0 text-sm font-medium dark:text-gray-400">
                  Description
                </label>
                <textarea
                  required
                  name="episodeDescription"
                  value={episodeDescription}
                  rows={4}
                  autoComplete="off"
                  onChange={(e) => onEpisodeChange(e)}
                  className="border dark:border-gray-400 mt-2 text-sm focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-black placeholder-gray-400 dark:text-white rounded"
                  placeholder="A little desc about the series"
                ></textarea>
              </div>
              <div className="flex gap-2">
                <Input id="episodeReleaseDate" type="date" label="R. date" placeholder="DD/MM/YYYY" value={episodeReleaseDate} onChange={onEpisodeChange} />
                <Input id="episodePoster" label="Poster" value={episodePoster} onChange={onEpisodeChange} />
                <Input id="episodeDuration" label="Duration" value={episodeDuration} onChange={onEpisodeChange} />
              </div>
              <button type="button" onClick={postEpisode} className="mt-2 rounded btn">Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
