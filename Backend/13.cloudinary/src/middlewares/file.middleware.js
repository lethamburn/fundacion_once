const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const storage = new CloudinaryStorage({
  cloudinary,
  folder: 'Albums',
  allowedFormats: ['jpg', 'png', 'jpeg', 'gif'],
})

const upload = multer({ storage })

const deleteImgCloudinary = (imgUrl) => {
  const [, , , ...imgComponents] = imgUrl.split('/')
  const [imgName] = imgComponents[imgComponents.length - 1].split('.')
  const publicId = `${imgComponents[imgComponents.length - 2]}/${imgName}`

  cloudinary.uploader.destroy(publicId, (error, result) => {
    if (error) {
      console.error(`Error deleting image in Cloudinary: ${error.message}`)
      return
    }

    console.log(`Image deleted in Cloudinary: ${result}`)
  })
}

const configCloudinary = () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_secret: process.env.CLOUDINARY_API_SECRET,
        api_key: process.env.CLOUDINARY_API_KEY
    })
}

module.exports = { upload, deleteImgCloudinary, configCloudinary }