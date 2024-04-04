import { useContract, useNFTs } from "@thirdweb-dev/react";
import { TOOLS_ADDRESS } from "../const/addresses";
import Link from "next/link";
import {
  Text,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
  Grid,
  Box,
} from "@chakra-ui/react";
import NFT from "../components/NFT";
import NavBar from "../components/NavBar";
import { Orbitron, Press_Start_2P } from "next/font/google";

const cyber = Orbitron({
  subsets: ["latin"],
  weight: ["900"],
});

export default function Shop() {
  const { contract } = useContract(TOOLS_ADDRESS);
  const { data: nfts } = useNFTs(contract);
  console.log(nfts);

  return (
    <div className={`${cyber.className} overflow-hidden`}>
    <Box
     
     backgroundImage="url('/gradient.jpg')"
	 // backgroundColor={"rgb(204, 255, 255)"}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      minHeight="100vh"
      p={4}
      py={8}
    >
      <Box
        backdropFilter="blur(30px)"
        backgroundColor="rgba(255, 255, 255, 0.25)"
        boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
        backdropBlur="xl"
        borderRadius="md"
        overflow={"hidden"}
      >
        <NavBar />
      </Box>
      {/* SHOP CONTAINER STARTS ------------------------------------ */}
      <Container maxW={"1200px"}>
        <Flex
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          my={6}
        ></Flex>
        {/* .......SHOP text CONTAINER------------------------- */}
       
        <Text
          fontWeight={"bold"}
          py={2}
          fontSize={"x"}
          color={"green.500"}
          align={"center"}
          mb={10}
          p={"5"}
          backdropBlur="xl"
          backdropFilter="blur(30px)"
        >
          Purchase 🧪Miners with $Bonus to increase your earnings 💎.
        </Text>
        {/* NFT PORT MINER CONTAINER------------------------------------------- */}
        {!nfts ? (
          <Flex h={"40vh"} justifyContent={"center"} alignItems={"center"}>
            <Spinner />
          </Flex>
        ) : (
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            gap={8}
          >
            {nfts?.map((nftItem) => (
              <NFT key={nftItem.metadata.id} nft={nftItem} />
            ))}
          </Grid>
        )}
        {/* BACK BUTTON AND FOOTER-------------------------------------- */}

       

        <Text color={"cyan.400"} align={"center"} m={"20px"}>
          {" "}
          ⛏️ Farm All Rights reserved{" "}
        </Text>
      </Container>
    </Box>
    </div>
  );
}
