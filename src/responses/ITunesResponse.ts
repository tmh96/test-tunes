export interface ITunesResponse {
    trackId: number
    artistName: string
    trackName: string
    collectionName: string
    previewUrl: string
    artworkUrl100?: string
    kind?: string
}