import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Orbitron } from "next/font/google";
import { Sepolia } from "@thirdweb-dev/chains";

const cyber = Orbitron({
  subsets: ["latin"],
  weight: ["900"],
});


const clientId = "726d7a94581c89c81fe6c76ad591ace6";

function MyApp({ Component, pageProps }: AppProps) {
  return (
  /* eslint-disable-next-line */
    <ThirdwebProvider activeChain={Sepolia} clientId={clientId}>
      <main className={`${cyber.className}`}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </main>
    </ThirdwebProvider>
  );
}

export default MyApp;
