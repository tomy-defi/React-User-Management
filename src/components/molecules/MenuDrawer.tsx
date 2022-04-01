import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay
} from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickHome: () => void;
  onClickManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const {
    isOpen,
    onClose,
    onClickHome,
    onClickManagement,
    onClickSetting
  } = props;
  return (
    <Drawer placement="left" size="xs" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button onClick={onClickHome} w="100%">
              Top
            </Button>
            <Button onClick={onClickManagement} w="100%">
              User Management
            </Button>
            <Button onClick={onClickSetting} w="100%">
              Setting
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
