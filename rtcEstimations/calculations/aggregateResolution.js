import { RESOLUTION } from "../constants/videoRtcConstants";

const totalResolutionForHosts = (videoProfile, hostCount, channelMode) => {
  let aggregateHost = 0;
  if (channelMode === "conference") {
    aggregateHost = hostCount - 1;
  } else {
    aggregateHost = hostCount;
  }
  switch (videoProfile) {
    case 120:
      return 120 * 160 * aggregateHost;
    case 180:
      return 180 * 320 * aggregateHost;
    case 240:
      return 240 * 320 * aggregateHost;
    case 360:
      return 360 * 640 * aggregateHost;
    case 480:
      return 480 * 640 * aggregateHost;
    case 720:
      return 720 * 1280 * aggregateHost;
    case 1080:
      return 1080 * 1920 * aggregateHost;
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
  const value = totalResolutionForHosts(videoProfile, hostCount, channelMode);
  const resolution = videoStreamingVariant(value);
  return resolution;
};
