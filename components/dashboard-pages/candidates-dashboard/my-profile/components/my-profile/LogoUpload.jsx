
'use client'

import { useState } from "react";

const LogoUpload = () => {
    const [logImg, setLogoImg] = useState("");
    const logImgHander = (e) => {
        setLogoImg(e.target.files[0]);
    };
    return (
        <>
            <div className="uploading-outer">
                <div className="uploadButton">
                    <input
                        className="uploadButton-input"
                        type="file"
                        name="attachments[]"
                        accept="image/*"
                        id="upload"
                        required
                        onChange={logImgHander}
                    />
                    <label
                        className="uploadButton-button ripple-effect"
                        htmlFor="upload"
                    >
                        {logImg !== "" ? logImg.name : "Photo de profile"}
                    </label>
                    <span className="uploadButton-file-name"></span>
                </div>
                <div className="text">
                    La taille maximale du fichier est de 1 Mo, la dimension minimale est de 330 x 300 mm.
                    Les fichiers adaptés sont .jpg & .png
                </div>
            </div>
        </>
    );
};

export default LogoUpload;
