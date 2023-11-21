"use client";

import PinataService from "@/services/pinata.service";
import React, { ChangeEvent, useState } from "react";
import { NFTStorage } from "nft.storage";
import { getMetadataUrl } from "@/utils/metadaUrl";
import Image from "next/image";

interface IBinaryImageData {
  pointer: number;
  binaryData: ArrayBuffer | string;
  imageSrc: string;
}
export default function Home() {
  const [binaryImageData, setBinaryImageData] = useState<
    Array<IBinaryImageData>
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const NFT_STORAGE_TOKEN = process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN || "";
  const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });

  const arrayBufferToBase64 = (buffer: ArrayBuffer): string => {
    const bytes = new Uint8Array(buffer);
    let binary = "";
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  const handleImageChange = async (
    event: ChangeEvent<HTMLInputElement>,
    pointer: number
  ) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const binaryData = reader.result as string; // This will be an ArrayBuffer
        const base64String = arrayBufferToBase64(reader.result as ArrayBuffer);
        setBinaryImageData([
          ...binaryImageData,
          {
            pointer: pointer,
            binaryData,
            imageSrc: `data:image/png;base64,${base64String}`,
          },
        ]);
      };
      reader.onerror = (error) => {
        console.error("Error reading the file:", error);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const upload = async () => {
    setIsLoading(true);
    const files: File[] = [];
    binaryImageData.forEach(async (image) => {
      const imageFile = new File(
        [new Blob([image.binaryData])],
        `${image.pointer === 10 ? `claimed.png` : `${image.pointer}point.png`}`,
        {
          type: "image/*",
        }
      );
      files.push(imageFile);
    });
    const cid = await client.storeDirectory(files);
    console.log("image CID:", cid);
    const imageBaseUrl = getMetadataUrl(cid);
    await PinataService.NFTStorageUploadFolder(imageBaseUrl);
    setIsLoading(false);
  };

  const imageInputs = [];
  for (let i = 1; i <= 10; i++) {
    imageInputs.push(
      binaryImageData.find((image) => image.pointer === i) ? (
        <Image
          src={
            binaryImageData.find((image) => image.pointer === i)
              ?.imageSrc as string
          }
          alt={i.toString()}
          width={200}
          height={200}
          className="w-full h-32 rounded-lg"
        />
      ) : (
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-32 p-1 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {" "}
                PNG or JPG
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={(e) => {
                handleImageChange(e, i);
              }}
            />
          </label>
        </div>
      )
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="grid grid-cols-3 w-[400px] text-black gap-1">
          {imageInputs}
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={upload}
        >
          {isLoading ? "Loading..." : "Upload"}
        </button>
      </div>
    </main>
  );
}
