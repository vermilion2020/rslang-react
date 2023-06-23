import { ContentContainer } from '../../components/contentContainer/ContentContainer';
import './Dictionary.scss';
import { Units } from '../../components/units/Units';
import { Cards } from '../../components/dictionaryCards/Cards';
import { Paging } from '../../components/units/Paging';

export function Dictionary() {

  return (
    <ContentContainer title="Словарь">
      <Units />
      <Paging />
      <Cards/> 
    </ContentContainer>
  );
}