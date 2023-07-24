import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import AuthUser from "~/components/authUser/AuthUser";
import { Button } from "~/components/ui/button";
import { api } from "~/utils/api";
import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { status } = useSession();

  return (
    <>
      <Head>
        <title>Royal Fx | Trading journal</title>
        <meta name="description" content="Your favourite trading journal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${mont.className} `}>
        {status === "authenticated" ? (
          <AuthUser />
        ) : (
          <>
            <p>Start by signing in</p>
            <Button onClick={async () => signIn()}>Sign in</Button>
          </>
        )}
      </main>
    </>
  );
}
