// Static export on GitHub Pages: add the repo sub-path to local image URLs.
export default function imageLoader({ src }) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${src}`;
}
