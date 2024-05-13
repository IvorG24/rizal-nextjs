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
      <Modal
        className="bg-yellow-200 fixed top-28 m-4 text-black"
        isOpen={open}
        onClose={close}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
          <ModalBody>
            <p className="underline underline-offset-8 text-justify text-black">
              {description}
            </p>
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
