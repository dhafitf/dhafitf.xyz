import React from "react"

import CustomLink from "@/atoms/CustomLink"

type Props = Omit<CurrentlyPlayingItem, "isPlaying" | "album" | "albumImageUrl">

const SpotifyItem = ({ title, songUrl, artists }: Props) => {
  return (
    <div className="inline-flex items-center gap-1">
      <span>Playing</span>
      <CustomLink href={songUrl} className="truncate font-semibold">
        {title}
      </CustomLink>
      <span>by</span>
      <div className="truncate font-semibold">
        {artists.map((artist, index) => (
          <span key={index} className="after:content-[','] last:after:content-[] mr-1">
            <CustomLink href={artist.url}>{artist.name}</CustomLink>
          </span>
        ))}
      </div>
    </div>
  )
}

export default SpotifyItem
