import TableOperations from '../../ui/TableOperations'
import Filter from '../../ui/Filter'
import SortBy from '../../ui/SortBy'
export default function CabinsTableOperation() {
    return (
        <TableOperations>
            <Filter filterFiled='discount' options={[
                { value: 'all', label: 'All' },
                { value: 'no-discount', label: 'No discount' },
                { value: 'with-discount', label: 'With discount' }
            ]} />

            <SortBy options={[
                { value: 'name-asc', label: 'Sort by Name (A-Z)' },
                { value: 'name-desc', label: 'Sort by Name (Z-A)' },
                { value: 'regularPrice-asc', label: 'Sort by Price (low first)' },
                { value: 'regularPrice-desc', label: 'Sort by Price (high first)' },
                { value: 'maxCapacity-asc', label: 'Sort by maxCapacity (low first)' },
                { value: 'maxCapacity-desc', label: 'Sort by maxCapacity (high first)' },
            ]} />
        </TableOperations>
    )
}
