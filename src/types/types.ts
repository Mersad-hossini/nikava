// Icon types
export interface NavLinkProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  href: string;
}

// Product types
export interface ProductType {
  id: number;
  title: string;
  price: string;
  image: string;
}
