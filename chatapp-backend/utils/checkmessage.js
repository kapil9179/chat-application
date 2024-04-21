 //const upload = require("../utils/upload")
//   const uploadFileConditionally = async(req,res,next)=>{
//     if(req.file){
//         upload.single("file")(req,res,next)
//     }else{
//         next()
//     }
//   }
//   module.exports = uploadFileConditionally
//  const upload = require("../utils/upload")

// function uploadFileConditionally(req, res, next) {
//     if (req.headers['content-type'].includes('multipart/form-data')) {
//         upload.single("file")(req, res, next);
//     } else {
//         next();
//     }
// }
// module.exports = uploadFileConditionally;

// function uploadFileConditionally(req, res, next) {
//       console.log(req)
//     console.log('uploadFileConditionally running');
//     if (req.headers['content-type'].includes('multipart/form-data')) {
//         console.log('Uploading file');
//         upload.single("file")(req, res, next);
//     } else {
//         console.log('No file to upload');
//         next();
//     }
// }
// module.exports = uploadFileConditionally;

