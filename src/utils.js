import Resizer from "react-image-file-resizer";

export const resizeFile = (file, height, width,quality) =>
    new Promise((resolve) => {
        Resizer.imageFileResizer(
            file,
            height,
            width,
            "JPEG",
            quality,
            0,
            (uri) => {
                resolve(uri);
            },
            "base64"
        );
    });