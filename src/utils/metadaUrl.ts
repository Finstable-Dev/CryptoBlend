// send this url to create campaign
export const getMetadataUrl = async (cid: string) => {
  const url = `https://${cid}.ipfs.nftstorage.link/`;
  return url;
};
