import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import { useAuth } from "../../hooks/useAuth";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
export const Login: VFC = memo(() => {
  const { login, loading } = useAuth();
  const [userId, setUserId] = useState("");

  const onChanageUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);
  const onClickLogin = () => login(userId);
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="8px">
        <Heading as="h1" size="lg" textAlign="center">
          User Management App
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="User ID"
            value={userId}
            onChange={onChanageUserId}
          />
          <PrimaryButton
            disabled={userId === ""}
            loading={loading}
            onClick={onClickLogin}
          >
            Login
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
