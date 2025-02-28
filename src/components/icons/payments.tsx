export const SettingsIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.75 10.9629C6.75 12.171 5.77062 13.1504 4.5625 13.1504C3.35438 13.1504 2.375 12.171 2.375 10.9629C2.375 9.75477 3.35438 8.77539 4.5625 8.77539C5.77062 8.77539 6.75 9.75477 6.75 10.9629ZM6.75 10.9629H13.625M9.25 4.71289C9.25 5.92101 10.2294 6.90039 11.4375 6.90039C12.6456 6.90039 13.625 5.92101 13.625 4.71289C13.625 3.50477 12.6456 2.52539 11.4375 2.52539C10.2294 2.52539 9.25 3.50477 9.25 4.71289ZM9.25 4.71289H2.375"
        stroke="black"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CreditCardIcon = () => {
  return (
    <svg
      width="14"
      height="11"
      viewBox="0 0 14 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.75 3.90039H13.25M3.75 9.52539H10.25C11.3001 9.52539 11.8251 9.52539 12.2262 9.32103C12.579 9.14127 12.8659 8.85443 13.0456 8.50162C13.25 8.10054 13.25 7.57549 13.25 6.52539V3.77539C13.25 2.72529 13.25 2.20024 13.0456 1.79916C12.8659 1.44635 12.579 1.15952 12.2262 0.979753C11.8251 0.775391 11.3001 0.775391 10.25 0.775391H3.75C2.6999 0.775391 2.17485 0.775391 1.77377 0.979753C1.42096 1.15952 1.13413 1.44635 0.954363 1.79916C0.75 2.20024 0.75 2.72529 0.75 3.77539V6.52539C0.75 7.57549 0.75 8.10054 0.954363 8.50162C1.13413 8.85443 1.42096 9.14127 1.77377 9.32103C2.17485 9.52539 2.6999 9.52539 3.75 9.52539Z"
        stroke="black"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

interface IWavy{
  classStyles ?: string;
}
export const WavyLines:React.FC<IWavy> = ({classStyles}) => {
  return (
    <svg
      width="528"
      height="133"
      viewBox="0 0 528 133"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full translate-x-8 ${classStyles}`}
    >
      <path
        d="M7.00659 107.157C6.65926 79.9463 19.9272 30.6655 75.7777 51.2244C145.591 76.923 185.186 174.175 250.311 96.071C315.435 17.9675 378.475 -18.3129 406.609 27.5414C434.742 73.3958 487.884 140.917 505.597 107.157C519.768 80.1479 526.437 27.0375 528 3.8584"
        stroke="#BBA0F5"
        strokeWidth="13"
      />
    </svg>
  );
};
