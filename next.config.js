/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}

const withImages = require("next-images");
const withTM = require("next-transpile-modules")(["@madzadev/audio-player"]);

module.exports = withImages(withTM());
