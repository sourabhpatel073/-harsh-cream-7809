import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children } = { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image src="Project Logo.png" alt="logo" />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}
            >
              Action
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIAAdwMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABQYHAQQIAgP/xABCEAABAwMCAwUDBwgLAQAAAAABAAIDBAURBiEHEjEiQVFhcTKBkRMUFSOCocFCUmKSsbLh8CUzQ0RjcqKzwtPyFv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDcUREBERAREQEREBERAREQEREBERAREQERRGp9Q0OmrY+vuMhDBsyNu7pHdwA/nCCSqamClgfPUzRwwsGXySODWtHmSqJXcTaeeqfQ6VtlXeqobc0bC2Np8zjOPPGPNR9v09etfTRXXV0klHas89Na4XEcw7i49ff1PdyrRbbbqK10raW30sVNA3oyNuB/FBRWu4oXQc/La7Qw9GOw9wHu5/wX39A8Rx2hqyiLvzTTjH7i0FcoM6dV8TbT2pqK23iIdfkXBjsf6fuBXbtPE21zVgoL7T1Flrs45KtpDD9rGw83ABXnZR96sltvlKaa6UcVRH+TzDtN82nqD6IO+x7JGNexwc1wyHNOQR5L6WWT0t84ZS/OKGSW6aYL/rYJD9ZSgnqPD16HvA6rRrPdKS82+Gvt8wlp5RlrhsR4gjuI8EHdREQEREBERB+VVURUtNLUVEjY4YmF73uOzWjclZnpihk19qKTVF4id9FUjzFbaSQdl2D7RB2O/XxO3RqkuLVZPPSW7TdA/FVeKgMdjujBGT6ZLc+QKulqoILXbqehpG8sFPGGMHkO/wDFB21HX+9UNgtr7hcpfk4GEN2GXOcegA7ypFZrx0c8aet7RnldWb/qOwgoGouIN/vFbK+nrqigpOYiKCmkMZa3uy4bk+O+FGQar1HTu5or9cyf8SqfIPg4kKGRBpWleLFxpqiODUQbVUriA6pYzlkj8yBs4e7PqtohkZNEyWJzXxvAc1zTkOB6FeTV6J4WTvqNCWwyEksa+MZ8GvIH3AILVJGyVjo5GtexwLXNcMgg9QQsvcx3DXVrDGXf/M3d/K5pJLaWT8Ovvbn80LUlDawskeodPVltkA55GExOI9iQbtPxQTAOQCOh8FyqdwrvEl10pDFVE/O6BxpZg45cOX2c+fLjPmCrigIiICIiDOnN+lONbRJ2o7Xb+Zg8HnbPwl+5aKFnunuzxg1IHdTSRlvpiPP4LQkBZtxvrqJtipqCV7hWyTCeABpIIaQ12T3bPWkrPuMWnKm82elrLfC+eponnMUbcucx+AcAdcEA/FBhaIiAvQfCivoqrR9LT0T3OdR/VT5YW4kI5zjPUdrqvP0cb5pGRRMc+R7g1jWjJcTsAB4r0NwwsM1h0rDFVsLKqpeaiZhG7C4ABp8wAPflBbUKIgzrRLfoziTqy1s7MMxbVMb5ntH/AHPuWirPbb2uNV15ejbawO9fq/4LQkBERAREQZ1Xn6I4z0M7tortQmHP6bf/ACwe9aKFRuLFqqKmxwXa3g/PbRM2pYQNywHtfDAd9lWfTt3p77ZqW5UpHJOzJbn2HdHNPochBJIi69dW01vpZKqtnjggjGXySOwAg8363tBseq7jRf2ZlMsP+R/aA92ce5QSl9WXyTUV/q7lI0MbI7libj2Yx7OfPHXzUQguPCi0G6azpZXD6mhBqX+ZGzB+sQfsr0IvOXDnUTdN6limqC0UdSPkalx/IaejvccZ8sr0VDLHNE2WJ7XxvGWvaQQ4eIKD7XBXKrev7+3T2mqmpa4CqlBhpm9SZHDY48hk+5BXuHzvpXXGrb2N4vlm0sbvHl2P3NYfetFVY4c2J9g0pSU07S2qlHy9QD1D3b4PmBge5WdAREQEREHy9rXsLXAOaRggjYhZbFNJww1HNDM2R+mLk/5SJzRzfNpMdPgAPMAd4OdUXTu1so7vQS0VxgbNTyjDmO/aPAjxQZPf+MNXK58VgoWQM7p6rtOI8mDYe8lZ7d71dL1KJbrXz1TgctD3Ya30aNh8FZNa8Pblp18lTSNkrbZnIlY3L4h+mB+8NvHCpgOdx0QEREBS1k1JebC7+irhNCzOTCTzRn7J2+GColEGt6d4w5eyHUNCGg7GppMkDzLDvj0J9F3rPSz6+1VHqCta5tit5LaCBw/rX53cfgCfMNHcc1nQ/DOsuz466/RyUlv2cIHZbLMPMdWD139Oq2ylpoaOnjp6aJkUMTQ1kbBhrQO4BB+yIiAiIgIiICIiBhVG/wDDrTt7kdM+lNJUu3M1KeQk+Jb7J+CtyIMcruDFY15NvvUEjO5lRAWH3uBP7FHjg9qPmwau1cviJpP+tbmiDIbfwYlLw653poZ3spoN/wBZx/4q86e0NYNPubLRUYkqR/eKg/KPHpnYe4BWVEBERAREQEREBERARcHooaSS+MqZJI4YXxA8oYcDIy7cdrrjA3+7ogmkUC1+oWl2WU78l2OZgwPax0f6fznH2+W+tkeY4ad7c8rQQADud/ayM9nx7zjuQTaKGgkvIZUOlgjc5xYYgMbbAPGOb1I39SEilvpm+sgpWxB7QfEtz2vyu4dPHw7kEyuMhRtx+kMD5rz8xjkGYgzAd+R7R6/d4rruF6MxcezGXPwyNzNm8o5ckjY5B8Rud8AIJrK5yoBzb1GeTmqJw3PbYIW83Z8D4nofXIxsVI2+iob84c4xc8fUR+zg8+cb+HTv26boJ9FwOgXKAiIg/9k="
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
}
