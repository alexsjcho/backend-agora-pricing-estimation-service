import { RESOLUTION } from "../constants/videoRtcConstants";

const totalResolutionSubscribed = (videoProfile, hostCount, channelMode) => {
  let aggregateHost = 0;
  if (channelMode === "conference") {
    aggregateHostCount = hostCount - 1;
  } else {
    aggregateHostCount = hostCount;
  }
  switch (videoProfile) {
    case 120:
      return 120 * 160 * aggregateHostCount;
    case 180:
      return 180 * 320 * aggregateHostCount;
    case 240:
      return 240 * 320 * aggregateHostCount;
    case 360:
      return 360 * 640 * aggregateHostCount;
    case 480:
      return 480 * 640 * aggregateHostCount;
    case 720:
      return 720 * 1280 * aggregateHostCount;
    case 1080:
      return 1080 * 1920 * aggregateHostCount;
    default:
      return 120 * 160;
  }
};

const videoStreamingVariant = (value) => {
  if (value <= 921600) {
    return RESOLUTION.HD;
  } else if (value > 921600 && value <= 2073600) {
    return RESOLUTION.FULLHD;
  } else if (value > 2073600 && value <= 3686400) {
    return RESOLUTION.TWOK;
  } else if (value > 3686400 && value <= 35251200) {
    return RESOLUTION.TWOKPLUS;
  }
};
export const calculateAggregateVideoResolution = (
  videoProfile,
  hostCount,
  channelMode
) => {
  const value = totalResolutionSubscribed(videoProfile, hostCount, channelMode);
  const resolution = videoStreamingVariant(value);
  return resolution;
};
