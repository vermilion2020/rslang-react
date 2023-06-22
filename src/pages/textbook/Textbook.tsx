import { ContentContainer } from '../../components/contentContainer/ContentContainer';
import './Textbook.scss';
import './GenerForWords.scss';
import { Units } from '../../components/units/Units';
import { Cards } from '../../components/textBookCards/Cards';
import { useWords } from '../../hooks/words';
import { UnitContext } from '../../context/UnitContext';
import { useContext } from 'react';

export function Textbook() {
  const { unit } = useContext(UnitContext);
  const { words } = useWords(unit);

  return (
    <ContentContainer title="Учебник">
      <Units />
      <Cards words={words}/>
    </ContentContainer>
  );
}