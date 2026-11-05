const { ImageKit } = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

async function uploadImage(buffer, originalName = 'image.jpg') {
    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: originalName,
    });
    
    return result;
}

module.exports = uploadImage;
