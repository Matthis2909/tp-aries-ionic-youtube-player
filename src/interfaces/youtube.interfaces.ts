export interface YoutubeAPIRequest {
    kind: string;
    etag: string;
    items: Items[];
}

export interface Items {
    kind: string;
    etag: string;
    id: number;
    snippet: Snippet;
}

interface Snippet {
    channelId: string;
    title: string;
    assignable: boolean;
}