const {DateTime} = require('luxon')

module.exports = function(eleventyConfig) {

  // Grab css and imgs, src to public folder
  eleventyConfig.addPassthroughCopy('./src/style.css')
  eleventyConfig.addPassthroughCopy('./src/assets')

  eleventyConfig.addFilter('postDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
  })

  // Where are we working from, public facing files location
  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}