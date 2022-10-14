// It's common to store reusable interfaces in a "global" interface.ts file.
// Each interface is exported, which lets us import them when needed.

// This interface is used in the feed exercise
export interface IItem {
	title: string;
	image: string;
}
