import { NFTStorage, File } from "nft.storage";
const NFT_STORAGE_TOKEN = process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN || "";

const NFTStorageUploadFolder = async (imageBaseUrl: string) => {
  const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });

  const files = [];
  for (let i = 1; i <= 10; i++) {
    files.push(
      new File(
        [
          JSON.stringify(
            {
              name: `${
                i === 10 ? "You have claimed this NFT" : `Your ${i} point`
              }`,
              description: `${
                i === 10 ? "You have claimed this NFT" : `You have ${i} point`
              }`,
              image: `${imageBaseUrl}${i === 10 ? "" : `${i}point`}.png`,
              attributes: [
                {
                  "trait-type": "Point",
                  value: i,
                },
              ],
            },
            null,
            2
          ),
        ],
        `${i === 10 ? `claimed.json` : `${i}point.json`}`
      )
    );
  }
  const cid = await client.storeDirectory(files);
  console.log("Metadata CID:", cid);
};

const PinataService = {
  NFTStorageUploadFolder,
};

export default PinataService;
