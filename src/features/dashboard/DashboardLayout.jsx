import styled from 'styled-components';
import Stats from './Stats';
import Spinner from '../../ui/Spinner';
import { useRecentBookings } from '../dashboard/useRecentBookings'
import { useRecentStays } from '../dashboard/useRecentStays'
import { useCabins } from '../cabins/useCabins';
import SalesChart from './SalesChart';
import DurationChart from './DurationChart';
import TodayActivity from '../check-in-out/TodayActivity';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;


export default function DashboardLayout() {
  const { bookings, isLoading: Loading1 } = useRecentBookings()
  const { isLoading: Loading2, confirmedStays, numDays } = useRecentStays()
  const { isLoading: Loading3, cabins } = useCabins()
  if (Loading1 || Loading2 || Loading3) return <Spinner />


  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings} cabinCount={cabins.length} confirmedStays={confirmedStays} numDays={numDays} />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  )
}
