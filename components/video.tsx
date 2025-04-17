'use client'

import MuxPlayer, {MuxPlayerProps} from "@mux/mux-player-react"
import "@mux/mux-player/themes/minimal";

type MuxVideoProps = MuxPlayerProps & {
  aspectRatio: number
}

export const MuxVideo = (props: MuxVideoProps) => {
  return (
    <div style={{ aspectRatio: props.aspectRatio }} className="rounded-md overflow-hidden max-w-[800px]">
      <MuxPlayer theme="minimal" className="w-full h-full object-cover" {...props} />
    </div>
  )
}