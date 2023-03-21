const calculateAggregateVideoResolution = require("../calculations/calculateResolution");

module.exports = function calculateRTCPrice(
  hostVideoProfile,
  hostCount,
  audienceCount,
  sessionDuration,
  channelMode
) {
  let totalRtcPrice = 0;
  let hostAggregateResolution =
    calculateAggregateVideoResolution(hostVideoProfile);

  if (channelMode === "conference") {
    hostCount * sessionDuration * videoVariantPrice;
  } else {
    hostRtcPrice = hostCount * sessionDuration * videoVariantPrice;
    audienceRtcPrice = audienceCount * sessionDuration * videoVariantPrice;
    totalRtcPrice = hostRtcPrice + audienceRtcPrice;
  }
};

calculateRTCPrice("480p", 4, 0, 60, "conference");
