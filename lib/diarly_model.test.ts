import {readFile} from 'fs/promises'
import {DiarlyMeta} from "./diarly_model";

describe('diarly model', () => {
	test('it can deserialize a metadata file', () => {
		return readFile('fixtures/diarly_meta.json', 'utf-8')
			.then(jsonString => {
				let metadata: DiarlyMeta = JSON.parse(jsonString)
				return metadata
			})
			.then(metadata => {
				const expectedMeta = {
					journals: {
						Diary: {
							defaultJournal: true,
							sortOrder: 0,
							identifier: "defaultJournal",
							noteTemplate: "$time\n# What did I do?\n\n# What did I learn?\n \n$weather \n$location "
						}
					},
					notes: {
						"\/Diary\/2020\/01-27.md": {
							lastModifiedAt: "2020-01-27T14:40:57.539Z",
							lastModifiedBy: "c737c808-e356-4d79-90c2-00e14d0877d4",
							starred: false,
							sortOrder: 0,
							identifier: "defaultJournal.27-01-2020",
							createdAt: "2020-01-27T09:57:41.202Z"
						},
						"\/Diary\/2020\/01-17.md": {
							lastModifiedAt: "2020-01-17T17:41:48.035Z",
							lastModifiedBy: "c737c808-e356-4d79-90c2-00e14d0877d4",
							starred: false,
							sortOrder: 0,
							identifier: "defaultJournal.17-01-2020",
							createdAt: "2020-01-17T11:43:15.304Z"
						},
						"\/Diary\/2020\/01-16.md": {
							lastModifiedAt: "2020-01-16T12:16:14.260Z",
							lastModifiedBy: "c737c808-e356-4d79-90c2-00e14d0877d4",
							starred: false,
							sortOrder: 0,
							identifier: "defaultJournal.16-01-2020",
							createdAt: "2020-01-16T11:19:52.409Z"
						}
					},
					"files": {
						"file1.png": {
							createdAt: "2020-01-10T23:10:27.113Z",
							preferredFilename: "file1.png"
						},
						"file2.jpg": {
							createdAt: "2021-12-09T16:02:22.591Z",
							preferredFilename: "file2.jpg"
						}
					},
					"calendar": "gregorian",
					"version": "2.4.16"
				}

				expect(metadata).not.toBeNull();
				expect(metadata).toStrictEqual(expectedMeta)
			})
	})
})

export {}
