import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../context/Authcontext";
import axios from "axios";
//https://63cd283efba6420d4d698593.mockapi.io/Products

function Nav() {
  const navigate = useNavigate();
  const { setGData, Gdata, page, setPage } = useContext(Authcontext);

  const SearchData = (val = " ", page = page) => {
    let url = `https://63cd283efba6420d4d698593.mockapi.io/Products?search=${val}?_limit=10&_page=${page}`;
    // `https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`
    axios.get(url).then((res) => {
      setGData(res.data);

      //console.log(res);
    });

    console.log(val);
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "rgb(228,0,70)",
        color: "white",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          style={{ width: "45%", border: "1px solid red" }}
          src="ProjectLogo.png"
        />
      </div>

      <div
        style={{
          width: "40%",
          marginTop: "5px",
          paddingTop: "10px",
        }}
      >
        <input
          style={{
            width: "80%",
            color: "black",
          }}
          placeholder="search"
          type="text"
          onChange={(e) => SearchData(e.target.value, page)}
        />
        <button>search</button>
      </div>

      <div
        style={{
          display: "flex",
          width: "6%",
          justifyContent: "space-around",
          marginTop: "5px",
        }}
      >
        <h4
          style={{ marginTop: "10px" }}
          onClick={() => {
            navigate("/cart");
          }}
        >
          cart
        </h4>
        <img
          style={{ width: "40px", borderRadius: "50%", height: "40px" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTduRGzoict2KOdbOy6We6z0E5bYZxhzrGjsQ&usqp=CAU"
        />
      </div>
      <div
        style={{
          display: "flex",
          width: "8%",
          justifyContent: "space-around",
          marginTop: "5px",
        }}
        onClick={() => {
          navigate("/login");
        }}
      >
        <h4 style={{ marginTop: "10px" }}>SignIn</h4>
        <img
          style={{ width: "40px", borderRadius: "50%", height: "40px" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLD7-puUcHOkhENEikaFXpU6XA3J7gGWLdcA&usqp=CAU"
        />
      </div>
    </div>
  );
}

export { Nav };
// import {
//   Box,
//   Flex,
//   Avatar,
//   HStack,
//   Link,
//   IconButton,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
//   Image,
// } from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";

// const Links = [
//   <div>
//     {" "}
//     <input />
//     <button>search</button>
//   </div>,
//   "cart",
// ];

// const NavLink = ({ children } = { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.200", "gray.700"),
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );

// export default function Nav() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       {/* <Box bg={useColorModeValue("red.100", "red.100")} px={4}>
//         <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
//           <IconButton
//             size={"md"}
//             icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//             aria-label={"Open Menu"}
//             display={{ md: "none" }}
//             onClick={isOpen ? onClose : onOpen}
//           />
//           <HStack spacing={8} alignItems={"center"}>
//             <Box>
//               <Image className="logoimage" src="Project Logo.png" alt="logo" />
//             </Box>
//             <HStack
//               as={"nav"}
//               spacing={4}
//               display={{ base: "none", md: "flex" }}
//             >
//               {Links.map((link) => (
//                 <NavLink key={link}>{link}</NavLink>
//               ))}
//             </HStack>
//           </HStack>
//           <Flex alignItems={"center"}>
//             <Button
//               variant={"solid"}
//               colorScheme={"teal"}
//               size={"sm"}
//               mr={4}
//               leftIcon={<AddIcon />}
//             >
//               Action
//             </Button>
//             <Menu>
//               <MenuButton
//                 as={Button}
//                 rounded={"full"}
//                 variant={"link"}
//                 cursor={"pointer"}
//                 minW={0}
//               >
//                 <Avatar size={"sm"} src={""} />
//               </MenuButton>
//               <MenuList>
//                 <MenuItem>Link 1</MenuItem>
//                 <MenuItem>Link 2</MenuItem>
//                 <MenuDivider />
//                 <MenuItem>Link 3</MenuItem>
//               </MenuList>
//             </Menu>
//           </Flex>
//         </Flex>

//         {isOpen ? (
//           <Box pb={4} display={{ md: "none" }}>
//             <Stack as={"nav"} spacing={4}>
//               {Links.map((link) => (
//                 <NavLink key={link}>{link}</NavLink>
//               ))}
//             </Stack>
//           </Box>
//         ) : null}
//       </Box> */}

//     </>
//   );
// }
