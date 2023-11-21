// send this url to create campaign
export const getMetadataUrl = (cid: string) => {
  const url = `https://${cid}.ipfs.nftstorage.link/`;
  return url;
};
