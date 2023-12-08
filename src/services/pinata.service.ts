import { NFTStorage, File } from "nft.storage";
const NFT_STORAGE_TOKEN = process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN || "";

const NFTStorageUploadFolder = async (imageBaseUrl: string) => {
  const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });

  const files = [];
  for (let i = 1; i <= 11; i++) {
    files.push(
      new File(
        [
          JSON.stringify(
            {
              name: `${
                i === 10
                  ? "You have claimed this NFT"
                  : i === 11
                  ? "Your 9 point"
                  : `Your ${i} point`
              }`,
              description: `${
                i === 10
                  ? "You have claimed this NFT"
                  : i === 11
                  ? "You have 9 point"
                  : `You have ${i} point`
              }`,
              image: `${imageBaseUrl}${
                i === 10 ? "claimed" : i === 11 ? "9point" : `${i}point`
              }.png`,
              attributes: [
                {
                  "trait-type": "Point",
                  value: i === 10 || i === 11 ? 9 : i,
                },
                {
                  "trait-type": "Is Expired",
                  value: i === 11,
                },
              ],
            },
            null,
            2
          ),
        ],
        `${
          i === 10
            ? `claimed.json`
            : i === 11
            ? "expired.json"
            : `${i}point.json`
        }`
      )
    );
  }
  const cid = await client.storeDirectory(files);
  console.log("Metadata CID:", cid);
  return cid;
};

const PinataService = {
  NFTStorageUploadFolder,
};

export default PinataService;
