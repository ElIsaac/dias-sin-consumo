import React from "react";
import {
  Button,
  ButtonText,
  Center,
  CloseIcon,
  GluestackUIProvider,
  Heading,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
} from "@gluestack-ui/themed";
import { Icon } from "react-native-paper";
import { useDispatch } from "react-redux";
import { actualizar } from "../redux/dateSlice";

export const ModalConsumo = ({setShowModal, showModal}) => {
  const ref = React.useRef(null);
  const dispatch = useDispatch();
  return (
    <Modal
      isOpen={showModal}
      onClose={() => {
        setShowModal(false);
      }}
      finalFocusRef={ref}
    >
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">Actualizacion del dia</Heading>
          <ModalCloseButton>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Text>
            Ha consumido alguna sustancia el dia de hoy?
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="outline"
            size="sm"
            action="secondary"
            mr="$3"
            onPress={() => {
              setShowModal(false);
            }}
          >
            <ButtonText>No</ButtonText>
          </Button>
          <Button
            size="sm"
            action="positive"
            borderWidth="$0"
            onPress={() => {
              setShowModal(false);
              dispatch(actualizar())
            }}
          >
            <ButtonText>Si</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
