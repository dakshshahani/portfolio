export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string; // e.g., "MAY 2025"
  endDate: string; // e.g., "JUL 2025"
  description: string; // compact version for list view
  src: string; // image/screenshot URL
  content: React.ReactNode | (() => React.ReactNode); // full details for expanded view
}
