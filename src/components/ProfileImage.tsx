import React from 'react';
import profileImg from "../assets/images_d.png";

interface ProfileImageProps {
  width?: string;
  height?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ width, height }) => {
  return (
    <img
      src={profileImg}
      className={`${width} ${height} h-45 rounded-full border-4 border-red-600 object-cover drop-shadow-[0_7px_0px_rgba(0,0,0,0.35)]`}
      alt="profile"
    />
  );
};

export default ProfileImage;