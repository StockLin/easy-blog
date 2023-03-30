import React from "react";
import Skeleton from "react-loading-skeleton";


interface IProps {
  counts?: number,
  showImage?: boolean
}


const PostSkeleton: React.FC<IProps> = ({ counts = 1, showImage = false }) => {
  return (
    <div className=" flex flex-col gap-4">
      {
        Array(counts).fill(0).map((_, idx) => (
          <div key={idx} className=" flex flex-row justify-center gap-4">
            {/* author */}
            <div className={`${showImage ? "basis-2/3" : "flex-1"} flex flex-col gap-4`}>
              <div className=" flex flex-row items-center gap-4">
                <Skeleton circle className=" w-[24px] h-[24px]" />
                <Skeleton className=" w-[100px] h-[12px]" />
              </div>

              <div>
                <Skeleton className=" w-4/5" />
                <Skeleton className=" w-3/5" />
              </div>
            </div>

            {
              showImage && (
                <div className=" flex-auto">
                  <Skeleton className=" w-[112px] h-[112px]" />
                </div>
              )
            }
          </div>
        ))
      }
    </div>
  )
}

export default PostSkeleton