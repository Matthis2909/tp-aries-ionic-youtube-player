export interface YoutubeAPIRequest {
    kind: string;
    etag: string;
    items: Items[];
}

export interface Items {
    kind: string;
    etag: string;
    id: number|Identifier;
    snippet: Snippet;
}

interface Identifier {
    kind: string;
    videoId: string;
}

interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    channelTitle: string;
    assignable: boolean;
    liveBroadcastContent: string;
    thumbnails: Thumbnails[];
}

interface Thumbnails {
    [key: string]: Thumbnail;
}

interface Thumbnail {
    url: string;
    width: number;
    height: number;

}