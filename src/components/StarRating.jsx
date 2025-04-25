export const StartRating = ({ rating }) => {
  const fullStar = (
    <svg
      width="19"
      height="17"
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.24494 0.255066L11.8641 5.89498L18.0374 6.64316L13.4829 10.877L14.679 16.9793L9.24494 13.9561L3.8109 16.9793L5.00697 10.877L0.452479 6.64316L6.62573 5.89498L9.24494 0.255066Z"
        fill="#FFC633"
      />
    </svg>
  );

  const halfStar = (
    <svg
      width="9"
      height="17"
      viewBox="0 0 9 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.56594 16.9793L8.99998 13.956V0.255005L6.38077 5.89491L0.20752 6.6431L4.76201 10.8769L3.56594 16.9793Z"
        fill="#FFC633"
      />
    </svg>
  );

  const stars = [];
  const fullCount = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  for (let i = 0; i < fullCount; i++) {
    stars.push(<span>{fullStar}</span>);
  }

  if (hasHalf) {
    stars.push(<span>{halfStar}</span>);
  }

  return <div className="flex flex-row gap-1">{stars}</div>;
};
