import useSWR from "swr";
import fetcher from "../lib/fetcher";

export const useProfile = () => {
  const { data, error } = useSWR("me", fetcher);

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const usePlaylist = () => {
  const { data, error } = useSWR("playlist", fetcher);

  return {
    playlist: data || [],
    isLoading: !data && !error,
    isError: error,
  };
};
