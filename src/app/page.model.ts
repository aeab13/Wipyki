export interface Page {
	id?: number;
	title: string;
	content: string;
    create_date?: Date;
    last_edit_date?: Date;
	author?: number;
}