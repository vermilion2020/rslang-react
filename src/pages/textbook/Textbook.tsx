import { ContentContainer } from '../../components/contentContainer/ContentContainer';
import './Textbook.scss';
import './GenerForWords.scss';
import { Units } from '../../components/units/Units';
import { Cards } from '../../components/textBookCards/Cards';
import { useWords } from '../../hooks/words';

export function Textbook() {
  const { words} = useWords();
  return (
    <ContentContainer title="Учебник">
      <Units />
      <Cards words={words}/>
    </ContentContainer>
  );
}