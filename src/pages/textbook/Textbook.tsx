import { ContentContainer } from '../../components/contentContainer/ContentContainer';
import './Textbook.scss';
import './GenerForWords.scss';
import { Units } from '../../components/units/Units';
import { Cards } from '../../components/textBookCards/Cards';
import { Paging } from '../../components/units/Paging';

export function Textbook() {
  return (
    <ContentContainer title="Учебник">
      <Units />
      <Cards/> 
      <Paging />
    </ContentContainer>
  );
}