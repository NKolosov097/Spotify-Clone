"use client";

import MediaItem from "@/components/MediaItem";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LikedButton from "@/components/LikeButton";

interface ILikedContentProps {
  songs: Array<Song>;
}

const LikedContent = ({ songs }: ILikedContentProps): JSX.Element => {
  const router = useRouter();
  const { isLoading, user } = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  if (songs.length === 0) {
    return (
      <div
        className="
        flex
        flx-col
        gap-y-2
        w-full
        px-2
        text-neutral-400
        "
      >
        No Liked Songs
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-y-2 w-full p-6">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onClick={() => {}} data={song} />
          </div>
          <LikedButton songID={song.id} />
        </div>
      ))}
    </div>
  );
};

export default LikedContent;
