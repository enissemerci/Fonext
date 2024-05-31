/* eslint-disable react/prop-types */

function SocialMedias({ onSelectSocialMedia, btnClasses, socialMediasData }) {
  return (
    <div className="d-flex flex-wrap gap-1 justify-content-sm-start justify-content-center w-100">
      {socialMediasData.map((socialMedia, idx) => (
        <button
          key={idx}
          onClick={() => onSelectSocialMedia(socialMedia)}
          className={`${btnClasses[socialMedia.platform]} my-1 mx-1`}
        >
          {socialMedia.platform}
        </button>
      ))}
    </div>
  );
}

export default SocialMedias;
