interface DiarlyMeta {
	journals: Journals
	notes: Notes
	files: Files
	calendar: string
	version: string
}

interface Journals {
	[name: string]: Journal
}

interface Journal {
	defaultJournal: boolean
	sortOrder: number
	identifier: string
	noteTemplate: string
}

interface Notes {
	[name: string]: Note
}

interface Note {
	lastModifiedAt: string
	lastModifiedBy: string
	starred: boolean
	sortOrder: number
	identifier: string
	createdAt: string
}

interface Files {
	[name: string]: File
}

interface File {
	createdAt: string
	preferredFilename: string
}

export type {DiarlyMeta, Journals, Journal, File, Files, Note, Notes}
