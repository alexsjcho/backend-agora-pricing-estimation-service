import { calculateAggregateVideoResolution } from "./calculateResolution";

function calculateRTCPrice(
  sessionDuration,
  hostCount,
  audienceCount,
  channelMode,
  videoVariantPrice
) {
  let totalRtcPrice = 0;
  if (channelMode === "conference") {
    hostCount * sessionDuration * videoVariantPrice;
  } else {
    hostPrice = hostCount * sessionDuration * videoVariantPrice;
    audiencePrice = audienceCount * sessionDuration * videoVariantPrice;
  }
}
