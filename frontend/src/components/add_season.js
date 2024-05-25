import { Input } from './input_component';
import { useState } from 'react';

export const AddSeason = ({
  number,
  seasonPoster,
  episodes,
  onSeasonChange,
  addSeason,
  seasons
}) => {
  const [episode, setEpisode] = useState(false);
  const [addedEpisodes, setAddedEpisodes] = useState([]);
  const [episodeData, setEpisodeData] = useState({
    number: 1,
    title: "",
    description: "",
    duration: "",
    releaseDate: "",
    poster: "",
  });
  const { episodeNumber, episodeTitle, episodeDescription, episodeDuration, episodeReleaseDate, episodePoster } = episodeData;

  const onEpisodeChange = (e) =>
    setEpisodeData({ ...episodeData, [e.target.name]: e.target.value });

  const postEpisode = () => {
    try{
      if (episodeTitle && episodeDuration && episodeReleaseDate && episodePoster && episodeNumber) {
        setAddedEpisodes((prev) => [...prev, episodeData]);
        setEpisodeData({
          number: episodeNumber + 1,
          title: "",
          description: "",
          duration: "",
          releaseDate: "",
          poster: "",
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
    if (number && seasonPoster && addedEpisodes.length > 0) {
      const newSeason = { number, poster: seasonPoster, episodes: addedEpisodes };
      addSeason(newSeason);
      setAddedEpisodes([]);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="flex flex-col">
      <h2 className="normal-case text-lg font-bold dark:text-white">
        Add Season
      </h2>

     {seasons.length > 0 && (
        <div className="mt-4">
            {seasons.map((season, index) => (
              <div key={index} className="p-2">
                <span className="block dark:text-white">Season {season.number}</span>
                <span className="block text-sm dark:text-gray-400">{season.poster}</span>
                <span className="block text-sm dark:text-gray-400">Episodes: {season.episodes.length}</span>
              </div>
            ))}
        </div>
      )}

      <div className="flex gap-2">
        <Input id="number" label="Number" type="number" value={number} onChange={onSeasonChange} />
        <Input id="poster" label="Poster" value={seasonPoster} onChange={onSeasonChange} />
      </div>

      <div className="gap-2 mt-2">
        <h2 className="normal-case text-lg font-bold dark:text-white">
          Episodes
        </h2>

        {addedEpisodes.length > 0 && (
        <div className="mt-4 flex gap-2">
            {addedEpisodes.map((episode, index) => (
              <div key={index} className="border rounded p-2">
                <span className="block dark:text-white">Episode {episode.episodeNumber}: {episode.episodeTitle}</span>
                <span className="block text-sm dark:text-gray-400">Description: {episode.episodeDescription}</span>
                <span className="block text-sm dark:text-gray-400">Duration: {episode.episodeDuration}</span>
                <span className="block text-sm dark:text-gray-400">Release Date: {episode.episodeReleaseDate}</span>
                <span className="block text-sm dark:text-gray-400">Poster: {episode.episodePoster}</span>
              </div>
            ))}
        </div>
        )}

        <button type="button" onClick={() => setEpisode(true)} className="mt-2 rounded-full btn">+ Add Episodes</button>
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
                  name="description"
                  value={episodeDescription}
                  rows={4}
                  autoComplete="off"
                  onChange={(e) => onEpisodeChange(e)}
                  className="border dark:border-gray-400 mt-2 text-sm focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-black placeholder-gray-400 dark:text-white rounded"
                  placeholder="A little desc about the series"
                ></textarea>
              </div>
              <div className="sm:flex gap-2">
                <Input id="episodeReleaseDate" type="date" label="Release date" placeholder="DD/MM/YYYY" value={episodeReleaseDate} onChange={onEpisodeChange} />
                <Input id="episodePoster" label="Episode poster" value={episodePoster} onChange={onEpisodeChange} />
                <Input id="episodeDuration" label="Episode duration" value={episodeDuration} onChange={onEpisodeChange} />
              </div>
              <button type="button" onClick={postEpisode} className="mt-2 rounded-full btn">Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
