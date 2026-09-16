import { Container } from "@/components/ui/Container";

export default function ProjectLoading() {
  return (
    <div className="animate-pulse py-20">
      <Container>
        <div className="h-3 w-24 rounded-full bg-paper-dim" />
        <div className="mt-6 h-12 w-2/3 rounded-md bg-paper-dim" />
        <div className="mt-10 h-px w-full bg-line" />
        <div className="mt-16 aspect-video w-full rounded-md bg-paper-dim" />
      </Container>
    </div>
  );
}
