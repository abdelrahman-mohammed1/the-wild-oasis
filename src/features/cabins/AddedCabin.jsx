
import Button from "../../ui/Button"
import CreateCabinForm from "./CreateCabinForm"
import Modal from "../../ui/Modal"
import CabinTable from '../cabins/CabinTable'



export default function AddedCabin() {
    return <Modal>
        <Modal.Open opens='cabin-form'>
            <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name='cabin-form'>
            <CreateCabinForm />
        </Modal.Window>


        <Modal.Open opens='table'>
            <Button>Show Table</Button>
        </Modal.Open>
        <Modal.Window name='table'>
            <CabinTable />
        </Modal.Window>
    </Modal>
}