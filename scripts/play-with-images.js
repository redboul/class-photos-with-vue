const Jimp = require('jimp');
const fs = require('fs');
const denodeify = require('denodeify');

const readDirPromise = denodeify(fs.readdir);

const photosPath = './photos/';
const photosBlurred = './static/blurred/';

readDirPromise(photosPath)
    .then(photos => photos.forEach(photo => Jimp.read(photosPath + photo)
            .then(image => image
                    .blur(10)
                    .resize(512, Jimp.AUTO)
                    .quality(40)
                    .write(photosBlurred + photo))));














