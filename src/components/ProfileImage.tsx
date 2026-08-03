import React, { useState } from 'react';
import ImageModal from './ImageModal';
import defaultProfile from "../assets/mainprofile.png";

interface ProfileImageProps {
  width?: string;
  height?: string;
  profileImg?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ width, height, profileImg = defaultProfile }) => {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-black rounded-full p-2">
      <div className="bg-white rounded-full p-2">
        <div className="relative group w-fit cursor-pointer border-dashed border-3 border-red-500 rounded-full">

          <img
            src={profileImg}
            onClick={() => setSelectedImage(profileImg)}
            className={`${width} ${height} h-45 rounded-full object-cover transition-transform duration-300`}
            alt="profile"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/20 transition-colors duration-300" onClick={() => setSelectedImage(profileImg)}></div>

          <ImageModal
            image={selectedImage ?? ""}
            isOpen={selectedImage !== null}
            onClose={() => setSelectedImage(null)}
          />

        </div>
      </div>
    </div>
  );
};

export default ProfileImage;