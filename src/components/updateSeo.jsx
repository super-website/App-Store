const updateSeo = ({ title, description, tags }) => {
  if (title) document.title = title

  if (description) {
    let metaDesc = document.querySelector("meta[name='description']")
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    metaDesc.content = description
  }

  if (tags) {
    let metaTags = document.querySelector("meta[name='keywords']")
    if (!metaTags) {
      metaTags = document.createElement('meta')
      metaTags.name = 'keywords'
      document.head.appendChild(metaTags)
    }
    metaTags.content = tags.join(', ')
  }

  // if (image) {
  //   let metaOGImage = document.querySelector("meta[property='og:image']")
  //   if (!metaOGImage) {
  //     metaOGImage = document.createElement('meta')
  //     metaOGImage.setAttribute('property', 'og:image')
  //     document.head.appendChild(metaOGImage)
  //   }
  //   metaOGImage.content = image
  // }
}

export default updateSeo
