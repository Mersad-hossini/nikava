// types/Types.ts

// اسلاید داخل هر استوری
export interface SlideType {
    id: number;
    image: string;
    text: string;
}

// هر استوری شامل عکس کاور و لیست اسلایدها
export interface StoryType {
    id: number;
    title: string;
    cover: string;
    slides: SlideType[];
}

// 📌 کامپوننت مودال استوری
export interface StoryModalProps {
    isOpen: boolean;
    story: StoryType | null;
    onClose: () => void;
}

// 📌 کامپوننت کارت استوری (StoryCard)
export interface StoryCardProps {
    story: {
        id: number;
        title: string;
        cover: string;
    };
    onClick?: () => void;
}

// 📌 کامپوننت اسلایدر استوری‌ها (StoryCarousel)
export interface StoryCarouselProps {
    stories: StoryType[];
    onStoryClick: (story: StoryType) => void;
}