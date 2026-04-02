import { S3Client, } from "@aws-sdk/client-s3";
export const s3 = new S3Client({
    endpoint: process.env.MINIO_ENDPOINT ?? "http://localhost:9000",
    region: "us-east-1", // MinIO ignores this, but SDK requires it
    credentials: {
        accessKeyId: process.env.MINIO_ACCESS_KEY,
        secretAccessKey: process.env.MINIO_SECRET_KEY,
    },
    forcePathStyle: true, // Required for MinIO (no virtual-hosted style)
});
export const BUCKET = process.env.MINIO_BUCKET ?? "Colabe_Note";
//# sourceMappingURL=file.middleware.js.map