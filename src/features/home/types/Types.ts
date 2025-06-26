// Story Modal Types
export interface SlideType {
    id: number;
    image: string;
    text: string;
}

// Each Story has(title, cover, slides imade) Types
export interface StoryType {
    id: number;
    title: string;
    cover: string;
    slides: SlideType[];
}

// Story Modal Types
export interface StoryModalProps {
    isOpen: boolean;
    story: StoryType | null;
    onClose: () => void;
}

// StoryCard
export interface StoryCardProps {
    story: {
        id: number;
        title: string;
        cover: string;
    };
    onClick?: () => void;
}

// StoryCarousel
export interface StoryCarouselProps {
    stories: StoryType[];
    onStoryClick: (story: StoryType) => void;
}