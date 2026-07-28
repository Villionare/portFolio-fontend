import React, { useState } from 'react';
import profileImg from "../assets/mainprofile.png";
import ImageModal from './ImageModal';

interface ProfileImageProps {
  width?: string;
  height?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ width, height }) => {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="relative group w-fit cursor-pointer">

      <img
        src={profileImg}
        onClick={() => setSelectedImage(profileImg)}
        className={`${width} ${height} h-45 rounded-full border-4 border-red-600 object-cover drop-shadow-[0_7px_0px_rgba(0,0,0,0.35)] transition-transform duration-300`}
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
  );
};

export default ProfileImage;