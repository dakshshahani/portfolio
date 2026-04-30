export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  src: string;
  content: React.ReactNode | (() => React.ReactNode);
}
