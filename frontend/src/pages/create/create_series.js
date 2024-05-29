import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/input_component";
import { AddSeason } from "./components/add_season";
import { Header } from "./components/header";

const CreateSeries = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const genresList = ["Action", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Thriller"];

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    genre: [],
    poster: "",
    releaseDate: "",
    cast: [],
    rating: 0,
    seasons:[],
  });

  const [seasonData, setSeasonData] = useState({
    seasonNumber: 1,
    seasonPoster: "",
    seasonEpisodes: [],
  });

  const { title, description, genre, poster, releaseDate, cast, rating, seasons } = formData;
  const { seasonNumber, seasonPoster, seasonEpisodes } = seasonData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSeasonChange = (e) =>
    setSeasonData({ ...seasonData, [e.target.name]: e.target.value });

  const toggleGenre = (selectedGenre) => {
    setFormData((prevFormData) => {
      const newGenres = prevFormData.genre.includes(selectedGenre)
        ? prevFormData.genre.filter((g) => g !== selectedGenre)
        : [...prevFormData.genre, selectedGenre];
      return { ...prevFormData, genre: newGenres };
    });
  };

  const validateSeries = () => {
    setError("");
    if (title && description && poster && releaseDate && genre.length > 0 && rating) {
      setStep(2);
    } else {
      setError("Please fill in all required fields.");
    }
  };

  const postSeason = (newSeason) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      seasons: [...prevFormData.seasons, newSeason],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try{
      setSuccess("Series created successfully");
    } catch (error) {
      setError("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="flex p-4 dark:bg-black w-full overflow-y-hidden dark:bg-[#0F1110]">
      <div className="w-full md:m-auto md:max-w-lg flex flex-col flex-1">
        <Header step={step} setStep={setStep} />
        { success && (<div role="alert" className="p-1 alert alert-success rounded-none">
            <span>{success}</span>
          </div>)}
        { error && (<div role="alert" className="p-1 alert alert-error rounded-none text-sm">
            <span>{error}</span>
          </div>)}

        <form className="space-y-6 mb-4 mt-4 flex flex-col flex-1" onSubmit={(e) => handleSubmit(e)}>

          {step === 1 && (
            <>
          <Input id="title" label="Title" placeholder="The chi" value={title} onChange={onChange} />
          <div>
           <label for="description" className="block mb-0 text-sm font-medium dark:text-gray-400">
              Description
           </label>
           <textarea
              required
              type="text"
              name="description"
              value={description}
              rows={4}
              autoComplete="off"
              onChange={(e) => onChange(e)}
              className="border dark:border-gray-400 mt-2 text-sm focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-black placeholder-gray-400 dark:text-white rounded"
              placeholder="A little desc about the series"
            ></textarea>
          </div>
          <Input id="poster" label="Poster url" placeholder="https://blablabla" value={poster} onChange={onChange} />
          <div>
            <label className="block mb-0 text-sm font-medium dark:text-gray-400">Choose genre(s)</label>
            <div className="flex gap-2 mt-2 overflow-auto">
              {genresList.map((g) => (
                <span
                  key={g}
                  onClick={() => toggleGenre(g)}
                  className={`btn btn-xs ${genre.includes(g) ? "bg-black text-white dark:bg-white dark:text-black" : ""} cursor-pointer`}
                >
                  {g}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <Input id="releaseDate" type="date" label="Release date" placeholder="DD/MM/YYYY" value={releaseDate} onChange={onChange} />
            <Input id="rating" label="Rating" type="number" value={rating} onChange={onChange} />
          </div>

          <button type="button" onClick={validateSeries} className="btn w-full rounded" disabled={loading}>
             {loading?<span className="loading loading-infinity loading-lg"></span>:"Next"}
          </button></>)}

          {step === 2 && (
            <>
          <AddSeason seasonNumber={seasonNumber} seasonPoster={seasonPoster} seasonEpisodes={seasonEpisodes} onSeasonChange={onSeasonChange} addSeason={postSeason} seasons={seasons} />

          <button type="submit" className="btn w-full place-self-end rounded" disabled={loading}>
             {loading?<span className="loading loading-infinity loading-lg"></span>:"Post"}
          </button></>)}
        </form>

      </div>
    </div>
  );
};

export default CreateSeries;
