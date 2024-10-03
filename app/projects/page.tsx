import { LinkPreview } from "@/components/ui/link-preview";
import { ChevronsDown } from "lucide-react";
import ProjectShowcase from "../components/Project";

function page() {
  return (
    <div className="mt-36">
      <div className="flex gap-10">
        <ChevronsDown className="w-20 h-20" />
        <h1 className="font-poppins text-4xl font-extralight">
          Checkout My Work
        </h1>
      </div>
      <ProjectShowcase
        projectNumber="01"
        projectName="TokenForge"
        description="Create and manage tokens on the Solana blockchain effortlessly. Generate metadata-rich tokens for seamless integration and enhanced functionality within your applications."
        imageSrc="https://forgetoken.vercel.app/"
        codeLink="https://github.com/chdineshbabu/tokenlp"
        moreProjectsLink="/more-projects"
      />
      <ProjectShowcase
        projectNumber="02"
        projectName="KeyForge"
        description="A Solana blockchain wallet app designed for secure account creation using mnemonic seed phrases, ensuring user-friendly access and management of their private and public keys."
        imageSrc="https://keyforge-seven.vercel.app/"
        codeLink="https://github.com/chdineshbabu/keyforge"
        moreProjectsLink="/more-projects"
      />
      <ProjectShowcase
        projectNumber="03"
        projectName="CryptoPay"
        description="A Solana blockchain wallet app designed for secure account creation using mnemonic seed phrases, ensuring user-friendly access and management of their private and public keys."
        imageSrc="https://cryptopay-sable.vercel.app/"
        codeLink="https://github.com/chdineshbabu/cryptopay"
        moreProjectsLink="/more-projects"
      />
      <ProjectShowcase
        projectNumber="04"
        projectName="CryptoLottery"
        description="A Solana blockchain wallet app designed for secure account creation using mnemonic seed phrases, ensuring user-friendly access and management of their private and public keys."
        imageSrc="https://crypto-lottery-xi.vercel.app/"
        codeLink="https://github.com/chdineshbabu/CryptoLottery"
        moreProjectsLink="/more-projects"
      />
            <ProjectShowcase
        projectNumber="05"
        projectName="Blog site"
        description="A Solana blockchain wallet app designed for secure account creation using mnemonic seed phrases, ensuring user-friendly access and management of their private and public keys."
        imageSrc="https://blog-site-ten-neon.vercel.app/"
        codeLink="https://github.com/chdineshbabu/blog-site"
        moreProjectsLink="/more-projects"
      />
      <ProjectShowcase
        projectNumber="06"
        projectName="Rental"
        description="A Solana blockchain wallet app designed for secure account creation using mnemonic seed phrases, ensuring user-friendly access and management of their private and public keys."
        imageSrc="https://rental-eight-xi.vercel.app/"
        codeLink="https://github.com/chdineshbabu/rental"
        moreProjectsLink="/more-projects"
      />
      <div></div>
    </div>
  );
}

export default page;
