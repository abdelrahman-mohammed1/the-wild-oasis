import styled from "styled-components";
import { formatCurrency } from '../../utils/helpers'
import { useState } from "react";
import { useDeleteCabin } from "./useDeleteCabin";
import CreateCabinForm from "./CreateCabinForm";
import { HiTrash, HiPencil, HiSquare2Stack } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;


export default function CabinRow({ cabin }) {
  const { id: cabinId, name, maxCapacity, description, regularPrice, discount, image } = cabin
  const [showForm, setShowForm] = useState(false)

  const { deleteCabin, isDeleting } = useDeleteCabin()
  const { isCreating, creatingCabin } = useCreateCabin()
  function handelDuplicate() {
    creatingCabin({
      name: `Copy of ${name}`,
      maxCapacity, regularPrice, discount, image, description
    })
  }

  return (

    <Table.Row role='row' columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'  >
      <Img Img src={image} ></Img >
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guest</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? <Discount>{formatCurrency(discount)}</Discount> : <span>&mdash;</span>}
      <div>
        <button disabled={isCreating} onClick={handelDuplicate}>
          <HiSquare2Stack />
        </button>
        <Modal>
          <Modal.Open opens='edit'>
            <button >
              <HiPencil />
            </button>
          </Modal.Open>
          <Modal.Window name='edit'>
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>

          <Modal.Open opens='delete'>
            <button>
              <HiTrash />
            </button>
          </Modal.Open>
          <Modal.Window name='delete'>
            <ConfirmDelete onConfirm={() => deleteCabin(cabinId


            )} resourceName='cabin' disabled={isDeleting} />
          </Modal.Window>
        </Modal>
        <Menus.Menu>
          <Menus.Toggle id={cabinId} />
          <Menus.List id={cabinId}>
            <Menus.Button onClick={handelDuplicate} icon={<HiSquare2Stack />}>Duplicate</Menus.Button>
            <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
            <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
          </Menus.List>
        </Menus.Menu>
      </div>
    </Table.Row >

  )
}
