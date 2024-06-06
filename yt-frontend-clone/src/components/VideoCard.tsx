import { useRouter } from "next/navigation"
import type { Video } from "../../videos"
import { Line } from "./Line"

export const VideoCard = ({ video }: { video: Video }) => {
    const router = useRouter();

    return <div className="cursor-pointer" onClick={() => {
        router.push("/video/1");
    }}>
        <div className="thumbnail mb-3">
            <img className="rounded-t-2xl" src={video.thumbnail} alt="" />
            <Line progress={60} />
        </div>
        <div className="details container grid grid-cols-5 gap-1">
            <div className="channel-logo col-span-1">
                <img className="rounded-full" src={video.channelLogo} />
            </div>
            <div className="info-right col-span-4">
                <div className={"text-white-800 text-lg font-medium"}>
                    {video.title}
                </div>
                {/* <div className={"text-gray-400 text-lg font-normal"}>
                    {video.description}
                </div> */}
                <div className="flex">
                    <div className={"text-gray-400 text-base font-normal pr-2"}>
                        {video.views}
                    </div>
                    <div className={"text-gray-400 text-base font-normal"}>
                        • {video.timestamp}
                    </div>
                </div>
            </div>
        </div>
    </div>
}