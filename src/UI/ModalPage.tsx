import { Button, ModalBody, Modal } from "flowbite-react";
import { useContext } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { ProductContext } from "../context/ProductContext";

const ModalPage = ({onClick, children}:any) => {

  const {openModal, setOpenModal}:any = useContext(ProductContext)

  return (
    <Modal
      className="z-99 bg-black/40!"
      show={openModal}
      size="md"
      onClose={() => setOpenModal(false)}
      popup
    >
      <ModalBody className="rounded-lg bg-white! p-4!">
        <div className="text-center">
          <HiOutlineExclamationCircle
            color="red"
            className="bg-red/30 mx-auto mt-4 h-16 w-16 rounded-full p-2"
          />
          <h3 className="mt-6 text-lg">Do you want to {children}?</h3>
        </div>

        <div className="mt-10 flex w-full justify-end! gap-4">
          <Button
            className="bg-dark-orange! cursor-pointer ring-0!"
            onClick={onClick}
          >
            Yes, I'm sure
          </Button>
          <Button
            className="bg-border/20! cursor-pointer font-light! text-black ring-0!"
            onClick={() => setOpenModal(false)}
          >
            No, cancel
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ModalPage;
