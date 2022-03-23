import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { Label } from "../../components/Label";
import { useFetchJudge } from "../../queries/useFetchJudge";
import { useJudgeEntry } from "../../queries/useJudgeEntry";

export const Judge = () => {
  const [skipped, setSkipped] = useState<string[]>([]);
  const { data, refetch } = useFetchJudge();
  const { mutate: judge, status } = useJudgeEntry();
  const entry = data?.find((el) => !skipped.includes(el.id));

  const handleSkip = () => {
    if (!entry) return;
    setSkipped((p) => [...p, entry.id]);
  };

  const handleAccept = () => judge({ entryId: entry?.id!, judgement: true });
  const handleReject = () => judge({ entryId: entry?.id!, judgement: false });

  useEffect(() => {
    refetch();
  }, [refetch, status]);

  if (!entry) return null;

  return (
    <Container>
      <EntryImage src={entry?.photo ?? undefined} />
      <Label v={entry.price} desc="PLN" />
      <Label v={entry.voltage} desc="%%" />
      <Label v={entry.volume} desc="ml" />
      <Button label="Reject" onClick={handleReject} />
      <Button label="Skip" onClick={handleSkip} />
      <Button label="Accept" onClick={handleAccept} />
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
  display: grid !important;
  grid-template: auto auto auto / 1fr 1fr 1fr;
  grid-gap: 5px;
  align-items: center;
  justify-items: center;
  margin-bottom: 20px;
`;

const EntryImage = styled.img`
  max-width: 100%;
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  border-radius: 15px;
  background: red;
  object-fit: fill;
`;
