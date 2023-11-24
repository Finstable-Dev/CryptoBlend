/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ["bafybeibaegwnkg5ztwydjwos7kbgom6aa7ibd2col2ukxmffndaaxewn4e.ipfs.nftstorage.link", "bafybeifo2534ibigluq3mabsgrsln62cid7idrydesbdyxni2rioh43yya.ipfs.nftstorage.link"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            }
        ]
    }
}

module.exports = nextConfig
