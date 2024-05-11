import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
interface bookProps {
  open: any;
  close: any;
  description: string;
  title: string;
}
const BookModal = ({ open, close, description, title }: bookProps) => {
  return (
    <>
      <Modal isOpen={open} onClose={close}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
          <ModalBody>
            <p>{description}</p>
            {/* Add more content here */}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onClick={close}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BookModal;
