export interface FeatureCardProps {
  title: string;
  description: string;
  backgroundImage: string;
  imageClassName?: string;
}
export interface ButtonProps {
  children?: React.ReactNode;
  text: string;
  variant: string;
  onClick?: () => void;
}
