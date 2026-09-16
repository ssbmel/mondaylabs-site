import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center gap-6 py-32 text-center md:py-44">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">페이지를 찾을 수 없습니다.</h1>
      <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
        요청하신 페이지가 존재하지 않거나 이동되었습니다.
      </p>
      <Button href="/">홈으로 돌아가기</Button>
    </Container>
  );
}
