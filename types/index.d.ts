declare module "*.jpg";
declare module "*.png" {
  const path: string;
  export default path;
}
