export default function AnotherParticipation({ submitted, setSubmitted }) {
  const handleClick = () => {
    setSubmitted(false);
  };

  return (
    <>
      <button disabled={!submitted} onClick={handleClick}>
        Another Participation
      </button>
    </>
  );
}
