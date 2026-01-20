import { LanguageProvider } from '@/components/LanguageProvider';
import PuzzleGame from '@/components/PuzzleGame';

export default function Page({ params }: { params: { levelId: string } }) {
  return (
    <LanguageProvider>
      <PuzzleGame levelId={params.levelId} />
    </LanguageProvider>
  );
}
