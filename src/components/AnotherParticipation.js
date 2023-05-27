import { Button } from "antd";

export default function AnotherParticipation({ submitted, setSubmitted }) {
  const handleClick = () => {
    setSubmitted(false);
  };

  return (
    <>
      <Button disabled={!submitted} onClick={handleClick} type="primary">
        Another Participation
      </Button>
    </>
  );
}
