
import styled from 'styled-components';

import Heading from '../../ui/Heading';
import Row from '../../ui/Row';
import Spinner from '../../ui/Spinner';
import TodayItem from '../dashboard/TodayItem';
import { useTodayActivity } from './useTodayActivity';

const StyledToday = styled.div`
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 2;
  padding-top: 2.4rem; 
  background-color: var(--color-grey-0);
`;

const TodayList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

   &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;



export default function TodayActivity() {
  const { activities, isLoading } = useTodayActivity()
  return (
    <StyledToday>
      <Row type='horizontal'>
        <Heading as='h2'>Today</Heading>
      </Row>
      {isLoading ? <Spinner /> :
        activities?.length > 0 ? <TodayList>
          {activities.map((stay) => <TodayItem stay={stay} key={stay.id} />)}
        </TodayList> : <NoActivity>No Activity</NoActivity>


      }
    </StyledToday>
  )
}



