import axios from "axios";

const readMetadata = async (url: string): Promise<{ data: any }> => {
  return axios.get(url);
};

export const readMetadataService = {
  readMetadata,
};

export default readMetadataService;
