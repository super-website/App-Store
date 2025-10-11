function purifyAudioUrl(url) {
  try {
    // Decode the URL in case it contains encoded characters
    const decodedUrl = decodeURIComponent(url)

    // Optionally, you could re-encode the URL to ensure it's properly formatted
    const purifiedUrl = encodeURI(decodedUrl)

    // Return the purified URL
    return purifiedUrl
  } catch (error) {
    console.error('Error decoding URL:', error)
    return '' // Fallback in case of an error
  }
}
export { purifyAudioUrl }
