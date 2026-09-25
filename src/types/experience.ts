export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  logo: string;
  src: string;
  /** How the banner/thumbnail image should fit. Wide logos need "contain", photos use "cover". */
  srcFit?: "cover" | "contain";
  content: React.ReactNode | (() => React.ReactNode);
}
